import { useEffect, useRef, useState } from "react";
import { LuBellDot } from "react-icons/lu";
import Logo from "../assets/logo.svg";
import Profile from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { AppContextUse } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const navigate = useNavigate();
	const { logout, user } = AppContextUse();
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleLogout = () => {
		try {
			logout();
			navigate("/login");
			toast.success("Logout successful!");
		} catch {
			toast.error("Error signing out. Please try again.");
		}
	};

	const toggleDropdown = () => {
		setShowDropdown((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setShowDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className='py-4 px-4 lg:px-8 bg-white border border-b border-[#E9EBF2]'>
			<div className='max-w-[1440px] mx-auto flex items-center justify-between'>
				<Link to='/' className='flex items-center space-x-2 cursor-pointer'>
					<img
						src={Logo}
						alt='Logo'
						className='w-[30px] h-[30px] rounded-[10px]'
					/>
					<h1 className='text-xl font-semibold logo text-[#4A4A4A]'>tabler</h1>
				</Link>

				<div className='flex space-x-4 items-center'>
					<button className='bg-transparent border border-[#2f83e4] text-[#2f83e4] text-[12px] px-3 py-1 rounded-[4px] font-medium hidden md:block'>
						Source code
					</button>
					<LuBellDot className='cursor-pointer hover:text-blue-500 transition-all duration-500 ease-in-out' />

					<div className='relative flex items-center' ref={dropdownRef}>
						<div
							onClick={toggleDropdown}
							className='flex items-center cursor-pointer space-x-1'>
							<img
								src={user?.photoURL ? user?.photoURL : Profile}
								alt='Profile img'
								className='w-[30px] h-[30px] rounded-full object-cover'
							/>
							<div className='flex flex-col'>
								<p className='text-[12px] font-medium text-[#5C6368]'>
									{user?.displayName}
								</p>
								<p className='text-[11px] text-[#a0a4ae]'>Administrator</p>
							</div>
						</div>

						{showDropdown && (
							<div className='absolute top-8 right-0 mt-2 w-20 bg-white border border-gray-200 rounded shadow-md'>
								<button
									onClick={handleLogout}
									className='block w-full px-4 py-2 text-left text-[80%] text-gray-700 hover:bg-gray-100'>
									Logout
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			<ToastContainer />
		</header>
	);
};

export default Header;
