import { ReactNode } from 'react'

interface Props {}

const RootLayout=({children}:{children: ReactNode})=> {
   

    return (
        <div>{children}</div>
    )
}

export default RootLayout
