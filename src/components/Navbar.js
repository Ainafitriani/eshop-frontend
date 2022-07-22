import React from 'react';
import { Navbar as NavBar, Container, Nav, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navbar({isLogedIn}) {

    const navigate = useNavigate();
    return(
        <NavBar>
            <Container>
                <NavBar.Brand>eShop</NavBar.Brand>
                <Nav>
                    {isLogedIn ?
                        icon
                    : 
                    <>
                    <Button onClick={()=> navigate('/auth/login')} className='me-2'>Login</Button>
                    <Button onClick={()=> navigate('/auth/register')} variant='outline-primary'>Register</Button>
                    </>
                    }
                </Nav>
            </Container>

        </NavBar>

    );
}

export default Navbar;