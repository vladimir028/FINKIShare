// import './NavigationAnimation.module.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';



function NavigationAnimationNew(){
        const linkStyle = {
          textTransform: 'uppercase',
          textDecoration: 'none',
          color: 'white',
          fontFamily: 'sans-serif',
          fontSize: '18px',
          fontWeight: 600,
          transition: '0.5s',

        };
      
        function MouseOver(event) {
            event.target.style.color = 'white';
            event.target.style.borderTop = '2px solid #262626';
            event.target.style.borderBottom = '2px solid #262626';
            event.target.style.transform = 'scaleY(1)';
            event.target.style.backgroundColor = 'gray';
            event.target.style.opacity = 1;
          }
          
          function MouseOut(event) {
            event.target.style.color = 'white';
            event.target.style.borderTop = '2px solid transparent';
            event.target.style.borderBottom = '2px solid transparent';
            event.target.style.backgroundColor = '';
           
          }
          
          let navigate = useNavigate(); 
          function routeChange(){
            let path = '/'; 
            navigate(path);
          }
          
    return (
        <Navbar expand="lg">
            <Container> 
            
            <img src='/images/finkilogo.png' style={{width: '5%', height: '5%'}} onClick={routeChange}/>
                <Navbar.Brand href="/" style={{color: 'white'}}> 
              
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
            
            <Nav.Link
              href="/select"
              style = {{...linkStyle}}
              onMouseOver={MouseOver} 
              onMouseOut={MouseOut}
            >
              Избери предмет
            </Nav.Link>
                       
            <Nav.Link href="/materials"  
             style = {{...linkStyle}}
            onMouseOver={MouseOver} 
            onMouseOut={MouseOut}>
                Материјали
            </Nav.Link>
            <Nav.Link href="/login" 
             style = {{...linkStyle}}
             onMouseOver={MouseOver} 
             onMouseOut={MouseOut}>
                Најави се
            </Nav.Link>
                        {/*<NavDropdown  title="Dropdown" id="basic-nav-dropdown" style={{ color: 'white' }}>*/}
                        {/*    Dropdown*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationAnimationNew;