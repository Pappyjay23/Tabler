import { Link } from "react-router-dom";
import {
	Cell,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip
} from "recharts";

const Documentation = () => {
  const pieData1 = [
		{ name: "Segment 1", value: 37.9 },
		{ name: "Segment 2", value: 63.0 },
	];

	const pieData2 = [
		{ name: "Segment 1", value: 47.4 },
		{ name: "Segment 2", value: 33.1 },
		{ name: "Segment 3", value: 9.5 },
		{ name: "Segment 4", value: 6.0 },
	];

	const COLORS1 = ["#8BC34A", "#4CAF50"];
	const COLORS2 = ["#1a365d", "#3182ce", "#90cdf4", "#e2e8f0"];

	interface PieDataItem {
		name: string;
		value: number;
	}

	interface CustomTooltipProps {
		active?: boolean;
		payload?: Array<{
			name: string;
			value: number;
			payload: PieDataItem;
		}>;
	}
	const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
		if (active && payload && payload.length) {
			const data = payload[0];

			return (
				<div className='bg-white p-3 shadow-lg rounded-lg border border-gray-200'>
					<p className='text-sm text-gray-600 font-medium'>{`Value: ${data.value}%`}</p>
				</div>
			);
		}
		return null;
	};

	return (
			<section className='flex-1'>
				<div className='bg-[#DAE6F5] border border-[#bcd0e8] p-4 text-[80%] rounded-[4px] mb-4'>
					<p>
						<Link to='/' className='font-semibold'>
							Read our documentations
						</Link>{" "}
						with code samples
					</p>
				</div>

				{/* Charts */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div className='border border-[#d5d7de] rounded-[4px] bg-white'>
						<div className='py-4 px-6 border-b border-[#d5d7de]'>
							<p className='text-[#585F66] text-[85%] font-semibold tracking-tight'>
								Chart Title
							</p>
						</div>
						<div className='p-5'>
							<div className='h-[200px]'>
								<ResponsiveContainer width='100%' height='100%'>
									<PieChart>
										<Pie
											data={pieData1}
											cx='50%'
											cy='50%'
											innerRadius={40}
											outerRadius={80}
											paddingAngle={2}
											dataKey='value'>
											{pieData1.map((_, index) => (
												<Cell
													key={`cell-${index}`}
													fill={COLORS1[index % COLORS1.length]}
												/>
											))}
										</Pie>
										<Tooltip content={<CustomTooltip />} />
									</PieChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>

					<div className='border border-[#d5d7de] rounded-[4px] bg-white'>
						<div className='py-4 px-6 border-b border-[#d5d7de]'>
							<p className='text-[#585F66] text-[85%] font-semibold tracking-tight'>
								Chart Title
							</p>
						</div>
						<div className='p-5'>
							<div className='h-[200px]'>
								<ResponsiveContainer width='100%' height='100%'>
									<PieChart>
										<Pie
											data={pieData2}
											innerRadius={0}
											outerRadius={80}
											paddingAngle={0}
											dataKey='value'>
											{pieData2.map((_, index) => (
												<Cell
													key={`cell-${index}`}
													fill={COLORS2[index % COLORS2.length]}
												/>
											))}
										</Pie>
										<Tooltip content={<CustomTooltip />} />
									</PieChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>

					<div className='border border-[#d5d7de] rounded-[4px] bg-white'>
						<div className='py-4 px-6 border-b border-[#d5d7de]'>
							<p className='text-[#585F66] text-[85%] font-semibold tracking-tight'>
								New Feedback
							</p>
						</div>
						<div className='p-5'>
							<div className='h-[200px]'>
								<ResponsiveContainer width='100%' height='100%'>
									<PieChart>
										<Pie
											data={pieData2}
											innerRadius={0}
											outerRadius={80}
											paddingAngle={0}
											dataKey='value'>
											{pieData2.map((_, index) => (
												<Cell
													key={`cell-${index}`}
													fill={COLORS2[index % COLORS2.length]}
												/>
											))}
										</Pie>
										<Tooltip content={<CustomTooltip />} />
									</PieChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>

					<div className='border border-[#d5d7de] rounded-[4px] bg-white'>
						<div className='py-4 px-6 border-b border-[#d5d7de]'>
							<p className='text-[#585F66] text-[85%] font-semibold tracking-tight'>
								Today's Profit
							</p>
						</div>
						<div className='p-5'>
							<div className='h-[200px]'>
								<ResponsiveContainer width='100%' height='100%'>
									<PieChart>
										<Pie
											data={pieData1}
											cx='50%'
											cy='50%'
											innerRadius={40}
											outerRadius={80}
											paddingAngle={2}
											dataKey='value'>
											{pieData1.map((_, index) => (
												<Cell
													key={`cell-${index}`}
													fill={COLORS1[index % COLORS1.length]}
												/>
											))}
										</Pie>
										<Tooltip content={<CustomTooltip />} />
									</PieChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Documentation;
