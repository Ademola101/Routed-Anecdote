import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (

    <div> <Navbar collapseOnSelect expand = 'lg' bg = 'dark' variant = 'dark'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href = "#" as = 'span'>
      <Link className='text-light' style={padding} to = '/' > Anecdote </Link>
      </Nav.Link>
      <Nav.Link href = "#" as = 'span'>
      <Link className='text-light' style={padding} to = '/create-new' > Create new </Link>
      </Nav.Link>
      <Nav.Link href = "#" as = 'span'>
      <Link className='text-light' style={padding} to = '/about' > About </Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
    
      
       </Navbar>
      
      
      
    </div>
  )
}
 export default Menu