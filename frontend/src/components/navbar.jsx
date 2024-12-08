import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Clients</a></li>
        <li><a href='/admin'>Admin Panel</a></li>
      </ul>
    </div>
  )
}

export default NavBar
