import Link from "next/link";

const Nav = ({id,title}) => {
 return (<Link href={`/gallery/${id}`}>
                    {title}
                    </Link>)
}

export default Nav
