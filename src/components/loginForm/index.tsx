"use client"
import { useState ,FC } from 'react';
import { Input, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation'
import {useThemeContext} from "@/hooks/useThemeContext";
// import {handleLogin} from "@/server_actions/loginActions";

interface LoginProps {}
const Login:FC<LoginProps> = ({}) => {
    const {theme , setTheme} = useThemeContext();
    const router = useRouter();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = ({username , password } : {username : string , password : string}) => {
        try {
            console.log('username' , username)
            console.log('password' , password)
            if(username === "demo" && password === "1234"){
                router.push("/products")
            }
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div><Button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>theme {theme}</Button> </div>
            <div className="w-full max-w-md">
                <form className="bg-white p-8 rounded shadow-md">
                    <div className="mb-6">
                        <Input
                            label="Username"
                            value={username}
                            onChange={(e:any) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e:any) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <Button onClick={()=>handleLogin({username , password}) }>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
