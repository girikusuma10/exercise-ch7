
import type { ReactElement } from 'react'
import DefaultLayout from '@/layouts/default'
// import SecondLayout from '@/layouts/second'

const Home = (): ReactElement => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1 className='m-auto'>Second Page</h1>
        </main>
    )
}

Home.getLayout = function getLayout (page: ReactElement) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default Home
