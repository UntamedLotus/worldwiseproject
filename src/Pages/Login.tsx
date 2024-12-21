import React, { useState } from "react";
import PageNav from "../components/PageNav";

const Login = () => {
	const [email, setEmail] = useState("jack@example.com");
	const [password, setPassword] = useState("qwerty");
	return (
		<main className='h-full w-full p-10 text-white grid grid-rows-[15%_auto] bg-gray-800'>
			<PageNav />
			<div className='flex items-center mx-auto'>
				<form className='w-[60vw] bg-slate-700 shadow-2xl p-10 rounded-lg space-y-12 text-lg'>
					<div className='flex flex-col justify-start space-y-5'>
						<label htmlFor='email'>Email address</label>
						<input
							type='email'
							id='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							className='text-black p-2 rounded-md w-full'
						/>
					</div>

					<div className='flex flex-col justify-start space-y-5'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							className='text-black p-2 rounded-md w-full'
						/>
					</div>

					<footer className='flex items-center justify-center '>
						<button className='bg-green-500 text-black text-lg px-10 py-2 rounded-md'>
							Login
						</button>
					</footer>
				</form>
			</div>
		</main>
	);
};

export default Login;
