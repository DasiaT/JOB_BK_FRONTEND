import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {IUser, IProfile } from './Interfaces/IUser';

function Login() {
    const [user, setUser] = useState<IUser | null>(null);
    const [profile, setProfile] = useState<IProfile | null>(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse as IUser),
        onError: (error) => console.log('Login Failed:', error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get<IProfile>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=381023784359-2efkdnkr1j5s23ual1n4hg8bmjf1je2q.apps.googleusercontent.com`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => setProfile(res.data))
                .catch((err) => console.log(err));
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
