import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'


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
    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
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
    <Navbar.Link href="/globe">
      About
    </Navbar.Link>
    <Navbar.Link href="/persrover">
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