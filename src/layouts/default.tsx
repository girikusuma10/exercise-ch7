import type { ReactElement } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
interface IDefaultLayoutProps {
    children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => {
    return (
        <>
            <Head>
                <title>Find Your Pokemon</title>
                <meta name='description' content='Just a simple website for watch movies' />
                <link rel='icon' href='/images/favicon.png' sizes='any' />
            </Head>
            <div className={inter.className}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout
