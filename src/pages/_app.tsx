import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { Page } from '../types/page'
import '@/styles/index.css'

type Props = AppProps & {
    Component: Page
}

export default function App ({ Component, pageProps }: Props): ReactElement {
    const getLayout = Component.getLayout ?? (page => page)
    const Layout = Component.layout ?? Fragment
    return (
        <Layout>
            {getLayout(<Component {...pageProps} />)}
        </Layout>
    )
}
