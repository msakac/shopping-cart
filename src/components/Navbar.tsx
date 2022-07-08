import {Container,Nav,NavLink,Navbar as NavbarBs, Button} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar(){
    const {openCart, cartQuantity } = useShoppingCart()
    return <NavbarBs sticky ="top" className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link href="/" as={NavLink} >
                        Home
                    </Nav.Link>   
                    <Nav.Link href="/store" as={NavLink}>
                        Store
                    </Nav.Link> 
                    <Nav.Link href="/about" as={NavLink}>
                        About
                    </Nav.Link> 
                </Nav>
                {cartQuantity > 0 && 
                    <Button className='w-[3rem] h-[3rem] rounded-circle relative' variant='outline-primary' onClick={openCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg> 
                        <div className='rounded-circle bg-red-600 flex justify-center items-center text-white w-[1.5rem] h-[1.5rem] absolute bottom-0 right-0 translate-x-[25%] translate-y-[25%]'>
                            {cartQuantity}
                        </div>
                    </Button>
                }   
            </Container>
        </NavbarBs>
}