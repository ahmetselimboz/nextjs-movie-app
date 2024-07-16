import React from 'react'
import "./globals.css"
import Header from '@/components/Header'
import Providers from './Providers'
import Tabs from '@/components/Tabs'


const Layout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>MovieApp</title>
            </head>
            <body className='dark:bg-neutral-900'>
                <Providers>
                <Header />
                <Tabs/>
                {children}

                </Providers>
            </body>
        </html>
    )
}

export default Layout