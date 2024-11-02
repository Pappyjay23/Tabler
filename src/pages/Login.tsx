import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import GoogleLogo from "../assets/google-logo.png";
import { AppContextUse } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
	const [animateLogo, setAnimateLogo] = useState(false);

	useEffect(() => {
		setAnimateLogo(true);
	}, []);

	// Typewriter Functionality
	const message = "Be the admin of your own work.";
	const [currentText, setCurrentText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		if (currentIndex < message.length) {
			const timeout = setTimeout(() => {
				setCurrentText((prevText) => prevText + message[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, 40);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, message]);

	const { login } = AppContextUse();
	const navigate = useNavigate();

	const handleSignIn = async () => {
		try {
			login();
			navigate("/");
			toast.success("Login successful!");
		} catch {
			toast.error("Error signing in. Please try again.");
		}
	};

	return (
		<div className='bg-[#9fbfff] h-screen w-full text-[#000000] flex  justify-center items-center overflow-hidden'>
			<div className='w-fit mx-auto flex flex-col h-fit items-center justify-center gap-5 bg-[#fff] shadow-lg p-8 md:p-10 rounded-lg'>
				<div className={`flex items-center gap-2`}>
					<div className='flex-[0.5] flex justify-center'>
						<div
							className={`h-[30px] w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[40px] xl:w-[40px] rounded-[4px] flex items-center justify-center ${
								animateLogo ? "logo" : ""
							}`}>
							<img
								src={Logo}
								alt='Logo'
								className='h-[80%] rounded-[4px] object-cover'
							/>
						</div>
					</div>
					<span className={`text-[1.1rem] lg:text-[2rem] font-semibold logo`}>
						tabler
					</span>
				</div>
				<p className={`${animateLogo ? "logo" : ""} text-center text-[90%]`}>
					{currentText}
				</p>
				<button
					onClick={handleSignIn}
					className={`${
						animateLogo ? "logo" : ""
					} hover:bg-[#3289EF] hover:text-white bg-transparent border border-[#3289EF] text-[#3289EF] py-4 md:px-10 px-4 w-full rounded-[6px] cursor-pointer flex justify-center items-center transition duration-300 gap-4`}>
					<span className='flex items-center'>
						<img
							src={GoogleLogo}
							alt='Google Logo'
							className='h-[25px] md:h-[30px] w-auto bg-white rounded-full'
						/>
					</span>
					<span className='text-[80%] md:text-[90%] font-medium'>
						Continue with Google
					</span>
				</button>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;
