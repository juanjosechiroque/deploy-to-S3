import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import HeaderAfiliado from "./header_afiliado";
import DashAfiliado from "./dash_afiliado";

const Afiliado = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section>
            <HeaderAfiliado/>
            <DashAfiliado/>
        </section>
    )
}

export default Afiliado
