import {useState} from 'react';
import {Search} from 'lucide-react'
export default function BookingsTab({ bookings }) {

  const [searchQuery,setSearchQuery] = useState('')

  const filteredBookings = bookings.filter((item) => 
    item.customerId.toLocaleString().includes(searchQuery.toLowerCase()) ||
  item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.tripTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.totalAmount.toLocaleString().includes(searchQuery.toLowerCase()) ||
  item.paymentStatus.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className='grid md:grid-cols-2 sm:grid-cols-1'>
        <div>
            <h1 className="text-2xl font-bold text-slate-900">Bookings</h1>
        <p className="text-sm text-slate-500">Pipeline of bookings and payments.</p>
        </div>
      
      <div className="relative max-w-md w-full mt-2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Id,Name,Trip title,amount or status..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
        />
      </div>
      </div>

         
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-orange-100 border-b border-slate-200 text-xs font-semibold text-orange-800 uppercase tracking-wider">
                <th className="px-6 py-4">Booking ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Trip</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
              {filteredBookings.map((item) => (
                <tr key={item.id} className="hover:bg-orange-100/70 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">#{item.customerId}</td>
                  <td className="px-6 py-4 text-slate-600">{item.customerName}</td>
                  <td className="px-6 py-4 text-slate-600">{item.tripTitle}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">₹{item.totalAmount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      item.paymentStatus === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {item.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}