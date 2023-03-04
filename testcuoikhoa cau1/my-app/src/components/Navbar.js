import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-lg mb-3">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        todo
                    </Nav.Link>
                    <Nav.Link to="/Active" as={NavLink}>
                        Active
                    </Nav.Link>
                    <Nav.Link to="/Complete" as={NavLink}>
                        Complete
                    </Nav.Link>
                </Nav> 
        </NavbarBs>
    );
}

export default Navbar;