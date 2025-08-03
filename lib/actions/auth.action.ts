'use server';

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7 ; // 7 days 

export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;
    
    try {
        const userRecord = await db.collection('users').doc(uid).get();

        if (userRecord.exists) {
            return {
                success: false,
                message: 'User already exists. Please login instead.'
            };
        }
        
        await db.collection('users').doc(uid).set({
            name,
            email,
            createdAt: new Date().toISOString()
        });
        
        return {
            success: true,
            message: 'Account created successfully! Please sign in.'
        };

    } catch (e : any) { 
        console.error("Error creating user", e);

        if (e.code === 'auth/email-already-exists') {
            return {
                success: false,
                message : 'Email already in use'
            }
        }
        return {
            success: false,
            message : 'Failed to create an Account'
        }
    }
}

export async function signIn(params: SignInParams) {
    const { email, idToken } = params;
    try {
        const userRecord = await auth.getUserByEmail(email);

        if (!userRecord) {
            return {
                success: false,
                message: 'User does not exist. Create an account first.'
            };
        }

        // Set session cookie
        await setSessionCookie(idToken);

        return {
            success: true,
            message: 'Signed in successfully'
        };

    } catch (e : any) {
        console.error("Error signing in", e);
        return {
            success: false,
            message: 'Failed to log into an account'
        };
    }
}

export async function signOut() {
    const cookieStore = await cookies();
    cookieStore.delete('session');
    
    return {
        success: true,
        message: 'Signed out successfully'
    };
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn: ONE_WEEK * 1000 }); // 7 days

    cookieStore.set(
        'session', sessionCookie, {
            maxAge: ONE_WEEK,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
    }
    )
}

export async function getCurrentUser() : Promise< User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if (!sessionCookie) {
        return null;
    }

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        const userRecord = await db.collection('users').doc(decodedClaims.uid).get();

        if (!userRecord.exists) {
            // User exists in Firebase Auth but not in Firestore
            console.warn(`User ${decodedClaims.uid} exists in Auth but not in Firestore.`);
            return null;
        }

        return {
           ... userRecord.data(),
           id: userRecord.id,
        } as User;
    } catch (e : any) {
        // Handle the specific error about user not existing
        if (e.code === 'auth/user-not-found' || e.message?.includes('no user record corresponding')) {
            console.warn("Invalid session cookie - user not found in Firebase Auth");
            // Throw the error so the layout can catch it and handle the invalid session
            throw new Error('INVALID_SESSION');
        }
        console.error("Error getting current user", e);
        return null;
    }
}



export async function clearSession() {
    'use server';
    const cookieStore = await cookies();
    cookieStore.delete('session');
    return { success: true };
}

export async function isAuthenticated() {
    const user = await getCurrentUser();
    return !!user;
}

