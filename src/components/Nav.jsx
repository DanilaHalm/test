import Link from "next/link";
import { useRouter } from 'next/navigation'

const Nav = ({id,title}) => {
const router = useRouter()
 
 return (<button onClick={() => router.push('/gallery')>gallery</button>)
}

export default Nav
