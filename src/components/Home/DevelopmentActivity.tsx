import Profile from "../../assets/profile.svg";
import Profile1 from "../../assets/profile2.svg";
import Profile2 from "../../assets/profile3.svg";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { useAppSelector } from "../../store/store";
const DevelopmentActivity = () => {
	const user = useAppSelector((state) => state.auth.user);
	const commits = [
		{
			user: user?.displayName,
			avatar: user?.photoURL || Profile,
			message: "Initial commit",
			date: "April 15, 2018",
		},
		{
			user: "Russell Gibson",
			avatar: Profile1,
			message: "Main structure",
			date: "April 22, 2018",
		},
		{
			user: "Beverly Armstrong",
			avatar: Profile2,
			message: "Left sidebar adjustments",
			date: "May 6, 2018",
		},
		{
			user: "Ronald Bradley",
			avatar: Profile,
			message: "Right sidebar adjustments",
			date: "May 16, 2018",
		},
		{
			user: "Russell Gibson",
			avatar: Profile1,
			message: "New structure features",
			date: "May 22, 2018",
		},
		{
			user: "Beverly Armstrong",
			avatar: Profile2,
			message: "Refactored code",
			date: "June 15, 2018",
		},
	];

	const developmentData = [
		{ date: "2018-04-01", purchases: 10 },
		{ date: "2018-04-15", purchases: 15 },
		{ date: "2018-04-01", purchases: 10 },
		{ date: "2018-04-01", purchases: 12 },
		{ date: "2018-04-30", purchases: 25 },
		{ date: "2018-04-30", purchases: 20 },
		{ date: "2018-04-30", purchases: 21 },
		{ date: "2018-05-06", purchases: 37 },
		{ date: "2018-05-06", purchases: 21 },
		{ date: "2018-05-06", purchases: 26 },
		{ date: "2018-05-06", purchases: 23 },
		{ date: "2018-05-06", purchases: 15 },
		{ date: "2018-05-06", purchases: 12 },
		{ date: "2018-04-01", purchases: 10 },
		{ date: "2018-04-15", purchases: 15 },
		{ date: "2018-04-30", purchases: 29 },
		{ date: "2018-04-15", purchases: 15 },
		{ date: "2018-04-15", purchases: 20 },
		{ date: "2018-04-15", purchases: 24 },
		{ date: "2018-04-15", purchases: 23 },
		{ date: "2018-04-15", purchases: 45 },
		{ date: "2018-05-06", purchases: 55 },
		{ date: "2018-05-06", purchases: 47 },
	];

	return (
		<section className='w-full border border-[#d5d7de] rounded-[4px] flex-1 bg-white'>
			<div className='py-4 px-6 border-b border-[#d5d7de]'>
				<p className='text-[#585F66] text-[90%]'>Development Activity</p>
			</div>
			{/* Chart */}
			<div className='h-[200px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<AreaChart data={developmentData}>
						<defs>
							<linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='5%' stopColor='#3b82f6' stopOpacity={0.8} />
								<stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
							</linearGradient>
						</defs>
						<Tooltip />
						<Area
							type='linear'
							dataKey='purchases'
							stroke='#3b82f6'
							fillOpacity={1}
							fill='url(#colorValue)'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			{/* Commits */}
			<div className='flex gap-3 py-3 px-4 md:px-6 text-[60%] md:text-[70%] text-[#b1b3b5] border-b border-[#d5d7de] font-medium'>
				<p className='flex-1'>USER</p>
				<p className='flex-1'>COMMIT</p>
				<p className='flex-1'>DATE</p>
			</div>
			{commits.map((commit, i) => (
				<div
					key={i}
					className='flex gap-3 items-center py-3 px-4 md:px-6 text-[60%] md:text-[70%] text-[#585F66] border-b border-[#d5d7de] font-medium'>
					<div className='flex-1 flex items-center gap-2 md:gap-4'>
						<div className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] rounded-full overflow-hidden">
							<img
								src={commit.avatar}
								alt='Profile img'
								className='w-full h-full object-cover'
							/>
						</div>
						<span>{commit.user}</span>
					</div>
					<p className='flex-1'>{commit.message}</p>
					<div className='flex-1 flex items-center justify-between gap-4'>
						<span>{commit.date}</span>
						<MdOutlineDeleteOutline className='cursor-pointer text-[1.2rem] text-[#b1b3b5] hover:text-red-500 transition-all duration-500 ease-in-out' />
					</div>
				</div>
			))}
		</section>
	);
};

export default DevelopmentActivity;
