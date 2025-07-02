import { ReactNode } from 'react'

interface Props {}

const AuthLayout=({children}:{children: ReactNode})=> {
   

    return (
        <div className='auth-layout'>{children}</div>
    )
}

export default AuthLayout
