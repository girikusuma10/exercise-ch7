import type { ReactElement } from 'react'
import Image from 'next/image'

const Header = (): ReactElement => {
    return (
        <>
            <header className='w-full p-4 bg-brown flex flex-col'>
                <Image src='/images/logo.png' alt='Pokemon Logo' width={120} height={120} className='w-fit m-auto' priority={true} />
                <h1 className='text-2xl text-center mt-4'>Find Your Pokemon</h1>
            </header>
        </>
    )
}

export default Header
