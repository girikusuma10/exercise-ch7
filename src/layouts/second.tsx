import type { ReactElement } from 'react'
import Head from 'next/head'

interface ISecondLayoutProps {
    children: React.ReactNode
}

const SecondLayout = ({ children }: ISecondLayoutProps): ReactElement => {
    return (
        <>
            <Head>
                <title>Movie 21 Second</title>
                <meta name='description' content='Just a simple website for watch movies' />
            </Head>
            {children}
            <footer>
                <p>This is from second layout</p>
            </footer>
        </>
    )
}

export default SecondLayout
