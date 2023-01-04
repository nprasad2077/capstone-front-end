import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Tail = () => {
  return (
    <Footer class='bg-gray-800'>
  <div className="w-full text-center bg-gray-800">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between bg-gray-800">
      <Footer.Brand
        href="https://flowbite.com"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Flowbite Logo"
        name="Flowbite"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="Flowbite™"
      year={2022}
    />
  </div>
</Footer>
  )
}

export default Tail