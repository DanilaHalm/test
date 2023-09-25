"use client"

import Link from "next/link";
import { useRouter } from 'next/navigation'

const Nav = () => {
const router = useRouter()
 
 return (<button onClick={() => router.push('/gallery')}>gallery</button>)
}

export default Nav
