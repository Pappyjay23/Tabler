import { LuBellDot } from "react-icons/lu";
import Logo from "../assets/logo.svg";
import Profile from "../assets/profile.png";
import { Link } from "react-router-dom";
const Header = () => {
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
					<div className='flex items-center space-x-1 cursor-pointer'>
						<img
							src={Profile}
							alt='Profile img'
							className='w-[30px] h-[30px] rounded-full object-cover'
						/>
						<div className='flex flex-col'>
							<p className='text-[12px] font-medium text-[#5C6368]'>
								Jane Pearson
							</p>
							<p className='text-[11px] text-[#a0a4ae]'>Administrator</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
