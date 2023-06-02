import Login from './components/Login';
import Anunciante from './components/Anunciante';
import Home from './components/Home';
import Layout from './components/Layout';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Afiliado from './components/Afiliado';
import BannerAnunciante from './components/anunciante/Banner';
import AfiliadosReport from './components/anunciante/AfiliadosReport';
import TransaccionesAnunciante from './components/anunciante/Conversiones';
import TransaccionesAfiliado from './components/afiliados/Conversiones';
import MyPerfil from './components/anunciante/Perfil';
import ListaCupones from './components/anunciante/Cupones';
import EstadoCuenta from './components/anunciante/EstadoCuenta';
import EstadoCuentaAfiliado from './components/afiliados/EstadoCuenta';
import MyPerfilAfi from './components/afiliados/Perfil';


const ROLES = {
  'Anunciante': 3,
  'Afiliado': 2,
  'Admin': 4
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
     
        <Route path="login" element={<Login />} />
    
        <Route path="unauthorized" element={<Unauthorized />} />

       
        <Route element={<RequireAuth allowedRoles={[ROLES.Anunciante]} />}>
          <Route path="anunciante" element={<Anunciante />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Anunciante]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Anunciante]} />}>
          <Route path="anunciante/banners" element={<BannerAnunciante />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Anunciante]} />}>
          <Route path="anunciante/afiliados-report" element={<AfiliadosReport />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Anunciante]} />}>
          <Route path="anunciante/transacciones-report" element={<TransaccionesAnunciante />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Anunciante]} />}>
          <Route path="anunciante/perfil" element={<MyPerfil />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Anunciante]} />}>
          <Route path="anunciante/cupones" element={<ListaCupones />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Anunciante]} />}>
          <Route path="anunciante/estado-cuenta" element={<EstadoCuenta />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Afiliado]} />}>
          <Route path="afiliado" element={<Afiliado />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Afiliado]} />}>
          <Route path="afiliado/transacciones" element={<TransaccionesAfiliado />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Afiliado]} />}>
          <Route path="afiliado/estado-cuenta" element={<EstadoCuentaAfiliado />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Afiliado]} />}>
          <Route path="afiliado/perfil" element={<MyPerfilAfi />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;