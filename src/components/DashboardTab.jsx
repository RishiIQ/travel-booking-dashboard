import { useState } from 'react'
import { NepaliRupee, SquarePen, Plane, UserRound, X } from 'lucide-react'

export default function DashboardTab ({
  Revenue,
  totalBookings,
  activeTrips,
  customersCount,

}) {


  return (
    <div className='space-y-6'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-slate-900'>
            Dashboard Overview
          </h1>
          <p className='text-sm text-slate-500'>
            Summary of travel operations and business metrics.
          </p>
        </div>
        
      </div>

      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-white p-6 rounded-xl border border-slate-200 hover:shadow-[2px_2px_0px_0px_#dc8d79] transition '>
          <div className='flex items-center gap-2 text-slate-500 mb-1'>
            <NepaliRupee
              size={16}
              strokeWidth={2.5}
              className='text-orange-600'
            />
            <span className='text-sm font-medium'>Total Revenue</span>
          </div>
          <p className='text-3xl font-bold text-slate-900 mt-2'>
            ₹{Revenue.toLocaleString()}
          </p>
        </div>

        <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition hover:shadow-[2px_2px_0px_0px_#dc8d79]'>
          <div className='flex items-center gap-2 text-slate-500 mb-1'>
            <SquarePen
              size={16}
              strokeWidth={2.5}
              className='text-indigo-600'
            />
            <span className='text-sm font-medium'>Bookings</span>
          </div>
          <p className='text-3xl font-bold text-slate-900 mt-2'>
            {totalBookings}
          </p>
        </div>

        <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition hover:shadow-[2px_2px_0px_0px_#dc8d79]'>
          <div className='flex items-center gap-2 text-slate-500 mb-1'>
            <Plane size={16} strokeWidth={2.5} className='text-amber-600' />
            <span className='text-sm font-medium'>Active Trips</span>
          </div>
          <p className='text-3xl font-bold text-slate-900 mt-2'>
            {activeTrips}
          </p>
        </div>

        <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition hover:shadow-[2px_2px_0px_0px_#dc8d79]'>
          <div className='flex items-center gap-2 text-slate-500 mb-1'>
            <UserRound
              size={16}
              strokeWidth={2.5}
              className='text-emerald-600'
            />
            <span className='text-sm font-medium'>Customers</span>
          </div>
          <p className='text-3xl font-bold text-slate-900 mt-2'>
            {customersCount}
          </p>
        </div>
      </div>

      <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4'>
          <div>
            <h3 className='text-lg font-bold text-slate-900'>
              Monthly Revenue Performance
            </h3>
            <p className='text-sm text-slate-500'>
              Overview of incoming booking revenue across months
            </p>
          </div>
          <div className='flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg'>
            <span className='w-2.5 h-2.5 rounded-full bg-lime-600'></span> Paid
            Revenue (₹)
          </div>
        </div>

        <div className='h-64 flex items-end justify-between gap-2 sm:gap-6 pt-8 pb-2 px-2 border-b border-slate-100'>
          {[
            { month: 'Jun', amount: 1200, height: '40%' },
            { month: 'Jul', amount: 2400, height: '65%' },
            { month: 'Aug', amount: 1800, height: '50%' },
            { month: 'Sep', amount: 3200, height: '85%' },
            { month: 'Oct', amount: 5350, height: '100%' },
            { month: 'Nov', amount: 4100, height: '78%' },
            { month: 'Dec', amount: 2900, height: '60%' }
          ].map((item, index) => (
            <div
              key={index}
              className='flex-1 flex flex-col items-center h-full justify-end group relative'
            >
              <div className='absolute -top-10 bg-slate-900 text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10'>
                ₹{item.amount.toLocaleString()}
              </div>
              <div
                style={{ height: item.height }}
                className='w-full max-w-[48px] bg-orange-300 group-hover:bg-orange-700 rounded-t-md transition-all duration-300'
              ></div>
              <span className='text-xs font-medium text-slate-500 mt-3'>
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}