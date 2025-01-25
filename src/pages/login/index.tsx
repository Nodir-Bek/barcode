import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './../../api/index';
import { useDispatch } from '@/hooks/useDispatch';
import TextField from '@/components/input';
import Button from '@/components/button';
import { LoginWrapper } from './style';
import { setUser } from '@/redux/modules/auth';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = await login(username, password);
        if (user) {
            dispatch(setUser(user));
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('role', user.role);
            navigate(user.role === 'admin' ? '/products' : '/user');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <LoginWrapper>
            <div className='form w-full max-w-sm bg-white rounded-tl-[30px] rounded-br-[30px] p-6 py-8 flex flex-col justify-center items-center gap-6 z-50'>
                <h1 className='text-3xl font-bold text-black'>Xisobga kirish </h1>
                <form onSubmit={handleSubmit} className='w-full max-w-xs flex flex-col justify-center items-center gap-5'>
                    <TextField
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Login</Button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </LoginWrapper>
    );
};

export default Login;