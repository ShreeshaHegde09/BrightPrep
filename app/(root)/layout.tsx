import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { isAuthenticated, getCurrentUser } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import SignOutButton from '@/app/components/SignOutButton'
import SessionHandler from '@/app/components/SessionHandler'

interface Props {}

const RootLayout= async ({children}:{children: ReactNode})=> {
    let user = null;
    let hasInvalidSession = false;
    
    try {
        user = await getCurrentUser();
        if (!user) {
            redirect('/sign-in');
        }
    } catch (error) {
        // If getCurrentUser throws an error, it means there's an invalid session
        hasInvalidSession = true;
    }

    return (
        <>
            <SessionHandler hasInvalidSession={hasInvalidSession} />
            <div className='root-layout'>
                <nav className="flex justify-between items-center p-4">
                    <Link href="/" className="flex items-center gap-2" >
                        <Image src="/logo.svg" alt="Logo" width={ 38} height={32}  />
                        <h2 className='text-primary-100'>BrightPrep</h2>
                    </Link>
                    <div className="flex items-center gap-4">
                        {user && (
                            <span className="text-sm text-gray-300">
                                Welcome, {user.name}
                            </span>
                        )}
                        <SignOutButton />
                    </div>
                </nav>
                {children}
            </div>
        </>
    )
}

export default RootLayout
