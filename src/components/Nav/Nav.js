import React from 'react'
import { Navbar } from 'flowbite-react'


const Nav = () => {
  return (
    <Navbar 
  fluid={true}
  rounded={true}
class='bg-slate-800'>
  <Navbar.Brand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
      Planetarium
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href='/'
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Rover
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Space Theater
    </Navbar.Link>
    <Navbar.Link href="/globe">
      Globe
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Nav