import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface StatsCardProps {
  stat: {
    label: string;
    value: string;
    change: string;
    increase: boolean;
  }
}
const StatsCard = ({stat}: StatsCardProps) => {
  return (
    <div className='bg-white shadow-sm w-[150px] xl:w-full h-[120px] p-3 rounded-[4px] border shadow-[#d5d7de] cursor-pointer'>
      <div className={`text-[80%] ${stat.increase ? 'text-green-500': 'text-red-500'} flex justify-end items-center mb-2`}>
        <span>{stat.change}</span>
        {stat.increase ?  <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div className='flex flex-col items-center justify-center text-[#485057]'>
        <span className='text-2xl font-semibold'>{stat.value}</span>
        <span className='text-[75%] tracking-tight font-medium'>{stat.label}</span>
      </div>
    </div>
  )
}

export default StatsCard