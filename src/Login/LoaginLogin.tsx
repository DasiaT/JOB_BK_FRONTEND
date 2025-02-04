import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

interface User {
    access_token: string;
}

interface Profile {
    picture: string;
    name: string;
    email: string;
}

function LoginLoading() {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log("Google Login Success:", tokenResponse); // 🔍 Verifica la respuesta aquí
            setUser(tokenResponse as User);
        },
        onError: (error) => console.log("Login Failed:", error),
        flow: "implicit",
    });

    useEffect(() => {
        console.log("User state updated:", user);
        if (!user?.access_token) return;

        axios.get<Profile>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`)
            .then((res) => {
                console.log("Profile response:", res.data);
                setProfile(res.data);
            })
            .catch((err) => console.log("Error fetching profile:", err));
    }, [user]);

    const logOut = () => {
        googleLogout();
        setUser(null);
        setProfile(null);
    };

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="User" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀</button>
            )}
        </div>
    );
}

export default LoginLoading;
