import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import HeaderAnunciante from "../../components/header_anunciante";
import ListarBanners from "./ViewBanners";


const BannerAnunciante = () => {
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
            <HeaderAnunciante />
            <ListarBanners/>
            
        </section>
    )
}

export default BannerAnunciante
