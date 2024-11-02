import StatsCard from "../components/Home/StatsCard";
import DevelopmentActivity from "../components/Home/DevelopmentActivity";
import Documentation from "../components/Home/Documentation";

const Home = () => {
	const stats = [
		{ label: "New Tickets", value: "43", change: "+6%", increase: true },
		{ label: "Closed Today", value: "17", change: "-3%", increase: false },
		{ label: "New Replies", value: "7", change: "+9%", increase: true },
		{ label: "Followers", value: "27.3k", change: "+3%", increase: true },
		{ label: "Daily earnings", value: "$95", change: "-2%", increase: false },
		{ label: "Products", value: "621", change: "-1%", increase: false },
	];

	return (
		<main className='py-4 px-4 lg:px-8 bg-[#F5F7FB] w-full min-h-screen h-full'>
			<div className='max-w-[1440px] mx-auto'>
				<h1 className='text-[#585F66] font-medium text-[1.1rem] mb-4'>
					Dashboard
				</h1>
				<section className='flex gap-4 justify-center md:justify-start lg:justify-between flex-wrap lg:flex-nowrap mb-8'>
					{stats.map((stat, i) => (
						<StatsCard stat={stat} key={i} />
					))}
				</section>
				<div className='flex flex-col lg:flex-row gap-5'>
					{/* Development Activity */}
					<DevelopmentActivity />

					{/* Read Documentation */}
					<Documentation />
					
				</div>
			</div>
		</main>
	);
};

export default Home;
