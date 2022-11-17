import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/spacex_logo.png"
const Navbar = () => {
  return (
 <>
 <div className="flex justify-between items-center">
   <Link href="/">
    <Image src={logo} alt='logo' width={200} height={110}></Image>
   </Link>
    
  <div>

    <ul className="flex space-x-3 text-base">
        <li><Link href="/capsules">Capsules</Link></li>
        <li><Link href="/crew">Crew</Link></li>
        <li><Link href="/dragons">Dragons</Link></li>
        <li><Link href="/landpads">Landpads</Link></li>
        <li><Link href="/launches">Launches</Link></li>
        <li><Link href="/launchpads">Launchpads</Link></li>
        <li><Link href="/payloads">Payloads</Link></li>
        <li><Link href="/roadster">Roadster</Link></li>
        <li><Link href="/">Rockets</Link></li>
        <li><Link href="/">Ships</Link></li>
        <li><Link href="/">Starlink</Link></li>
    </ul>
  </div>
    
 </div>
 </>
  )
}

export default Navbar;