"use client"
import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Jun',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jul',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounde-xl w-full h-full p-4">
            {/* TITLE */}
            <div className='flex justify-between items-center '>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" width={20} height={20} />
            </div></div>
  )
}

export default FinanceChart