import React from 'react'
import Nav from './Nav'
import { useSession } from 'next-auth/react'
const Header = () => {
    const { data: session, status: status } = useSession()
    console.log(session)
    return (
        <div><Nav /></div>
    )
}

export default Header