import { useRef, useState, useEffect } from 'react';
import '../assets/css/login.css?v=2';
import useAuth from '../hooks/useAuth';
import {useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';



import axios from '../api/axios';
const LOGIN_URL = '/auth/login';


const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/anunciante";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response?.data?.roleId));
          
            const accessToken = response?.data?.token;
            let roles = [response?.data?.roleId];
            const entityId = response?.data?.entityId;


            Cookies.set('client_ww', entityId, { expires: 1 });
            Cookies.set('session_ww', accessToken, { expires: 1 });
            Cookies.set('rol_ww', roles, { expires: 1 });

            
            setAuth({ email, password, roles, accessToken });
            setUser('');
            setPwd('');
            //navigate(from, { replace: true });

            if (roles==3) {
            
              navigate('/anunciante', { state: { from: location }, replace: true });

            } else if (roles == 2){

              navigate('/afiliado', { state: { from: location }, replace: true });


            }


        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
      
        <section>

<div className="account-pages my-5 pt-sm-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-5">
        <div className="card overflow-hidden">
          <div className="bg-soft-winwin " >
            <div className="row">
              <div className="col-7">
                <div className="text-primary p-4">
                 <img src="https://admintest.alls.cloud/logo_blanco.png"/>
                </div>
              </div>
              <div className="col-5 align-self-end">
               
              </div>
            </div>
          </div>
          <div className="card-body pt-0">
        
            <div className="p-2">
              <form
                className="form-horizontal"
                action="#"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Correo
                  </label>
                  <input
                
                    className="form-control"
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={email}
                    required
                    
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contrasña</label>
                  <div className="input-group auth-pass-inputgroup">
                    <input
                     
                      className="form-control"
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={password}
                      required


                    />
                    <button
                      className="btn btn-light "
                      type="button"
                      id="password-addon"
                    >
                      <i className="mdi mdi-eye-outline" />
                    </button>
                  </div>
                </div>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember-check"
                  />
                  <label className="form-check-label" htmlFor="remember-check">
                    Remember me
                  </label>
                </div>
                <div className="mt-3 d-grid">
                  <button
                    className="btn btn-primary waves-effect waves-light"
                    type="submit"
                  >
                    Iniciar sesión
                  </button>
                </div>
            
                <div className="mt-4 text-center">
                  <a href="auth-recoverpw.html" className="text-muted">
                    <i className="mdi mdi-lock me-1" /> Perdiste tu clave?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <div>
        
            <p>
              © Afiliados  <i className="mdi mdi-heart text-danger" />{" "}
              Winwin
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </section>

    )
}

export default Login
