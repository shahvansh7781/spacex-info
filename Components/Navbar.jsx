import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/spacex_logo.png"
const Navbar = () => {
  return (
 <>
 <div className="flex justify-between items-center">
   <div>
    <Image src={logo} alt='logo'   width={200} height={110}></Image>
   </div>
    
  <div>

    <ul className="flex space-x-3 text-base">
        <li><Link href="/capsules">Capsules</Link></li>
        <li><Link href="/">Cores</Link></li>
        <li><Link href="/">Crew</Link></li>
        <li><Link href="/">Dragons</Link></li>
        <li><Link href="/">Landpads</Link></li>
        <li><Link href="/">Launches</Link></li>
        <li><Link href="/">Launchpads</Link></li>
        <li><Link href="/">Payloads</Link></li>
        <li><Link href="/">Roadster</Link></li>
        <li><Link href="/">Rockets</Link></li>
        <li><Link href="/">Ships</Link></li>
        <li><Link href="/">Starlink</Link></li>
    </ul>
  </div>
    
 </div>
 </>
  )
}

export default Navbar