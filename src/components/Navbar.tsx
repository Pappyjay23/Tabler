import { AiOutlineHome } from "react-icons/ai";
import { CiFileOn } from "react-icons/ci";
import { FaRegFileLines } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import { TbCheckbox, TbCube, TbPhoto } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const navLinks = [
		{
			name: "Home",
			path: "/",
			icon: <AiOutlineHome />,
		},
		{
			name: "Interface",
			path: "/interface",
			icon: <TbCube />,
		},
		{
			name: "Components",
			path: "/components",
			icon: <LuCalendar />,
		},
		{
			name: "Pages",
			path: "/pages",
			icon: <CiFileOn />,
		},
		{
			name: "Forms",
			path: "/forms",
			icon: <TbCheckbox />,
		},
		{
			name: "Gallery",
			path: "/gallery",
			icon: <TbPhoto />,
		},
		{
			name: "Documentation",
			path: "/documentation",
			icon: <FaRegFileLines />,
		},
	];

	const location = useLocation();
	return (
		<nav className='pt-4 px-4 lg:px-8 bg-white border border-b border-[#E9EBF2]'>
			<div className='max-w-[1440px] mx-auto flex items-center space-x-6 text-sm overflow-x-auto'>
				{navLinks.map((link, i) => {
					const isActive = location.pathname === link.path;
					return (
						<Link
							to={link.path}
							key={i}
							className={`flex items-center space-x-1 ${isActive ? 'text-blue-500 border-blue-500': 'text-[#9FA4B1] border-transparent'} border-b-[2px] pb-4 cursor-pointer hover:text-blue-500 hover:border-blue-500 transition-all duration-500 ease-in-out`}>
							{link.icon}
							<p>{link.name}</p>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
