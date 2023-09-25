//"use client"

import Link from "next/link";
//import { useRouter } from 'next/navigation'

const Nav = () => {
//const router = useRouter()
 return (<Link href={"/gallery"} >gallery</Link>)
 //return (<button onClick={() => router.push('/gallery')}>gallery</button>)
}

export default Nav
