import { useState, useEffect } from 'react';
import axios from 'axios';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
//PARA LOS USUARIOS
import {IUser, IProfile } from './Interfaces/User';

function Login() {
    const [user, setUser] = useState<IUser | null>(null);
    const [profile, setProfile] = useState<IProfile | null>(null);

    console.log("User: ", user);
    console.log("Profile: ", profile);
    
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse as IUser),
        onError: (error) => toast(`Error de login: ${error}`),
    });

    useEffect(() => {
        if (user) {
            axios
                .get<IProfile>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    }
                    /*,
                    body:{
                        client_id: 'CLIENT_ID.apps.googleusercontent.com'
                    }*/
                })
                .then((res) => setProfile(res.data))
                .catch((err) => toast(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div>
            <h2>Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Nombre: {profile.name}</p>
                    <p>Correo: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Salir</button>
                </div>
            ) : (
                <button onClick={() => login()}>Entrar por Google</button>
            )}
        </div>
    );
}

export default Login;
