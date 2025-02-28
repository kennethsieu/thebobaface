import Container from 'react-bootstrap/Container';
import { propTypes } from 'react-bootstrap/esm/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav(props) {
    const handleLogout = () => {
        props.logOut();
    }

    return (
        <header>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                <Navbar.Brand>BobaFace</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-md-auto'>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default SiteNav;