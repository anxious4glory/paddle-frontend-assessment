import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Notfound = () => {
    const router = useRouter()

    useEffect( () => {
        setTimeout(() => {
            router.push('/')
        }, 10000)
    }, [] ) //redirects to home page after ten seconds

    return (
        <div className="bg-bgColor text-white text-center py-20">
            <h1 className="text-4xl pb-4">Oooop.....</h1>
            <p className="font-bold pb-4">Page not found</p>
            <p className="font-bold pb-4">Go back to <Link href="/"><a className="text-red-500">Home Page</a></Link> </p>
        </div>
    )
}

export default Notfound