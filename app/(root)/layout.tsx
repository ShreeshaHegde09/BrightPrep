import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { isAuthenticated, getCurrentUser } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import SignOutButton from '@/app/components/SignOutButton'

interface Props {}

const RootLayout= async ({children}:{children: ReactNode})=> {
    const isUserAuthenticated = await isAuthenticated();
    
    if (!isUserAuthenticated)  redirect ('/sign-in');

    const user = await getCurrentUser();

    return (
        <div className='root-layout'>
            <nav className="flex justify-between items-center p-4">
                <Link href="/" className="flex items-center gap-2" >
                    <Image src="./logo.svg" alt="Logo" width={ 38} height={32}  />
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
    )
}

export default RootLayout
