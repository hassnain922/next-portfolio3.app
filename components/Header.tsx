import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='header'>
     
     <div>
      <Link href="/">
      <Image src="/logo.png" alt='logo' width={55} height={55} /> 
      </Link>
      </div>
     <nav className='nav'>
       <ul className='navList'>
       
         <li  className="navItem"><Link  className="navItem a"href="/services">Services </Link></li>
         <li  className="navItem"><Link className="navItem a" href="/portfolio">Portfolio </Link></li>
         <li  className="navItem"><Link className="navItem a" href="/contact">Contact </Link></li>
       </ul>
    </nav>
    <div className="porfolio">
      <Link className=' ' href='/createportfolio'>
         create portfolio
      </Link>
    </div>
    </header>
  );
};

export default Header