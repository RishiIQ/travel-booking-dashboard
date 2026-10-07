import {useState} from 'react'
import {Search} from 'lucide-react'
export default function CustomersTab({ customers }) {

  const [searchQuery,setSearchQuery] = useState('')

  const filteredCustomers = customers.filter((item) => 
  item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
  item.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
  item.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-between">
        <div className="w-10flex-2">
              <h1 className="text-2xl font-bold text-slate-900">Customers</h1>
        <p className="text-sm text-slate-500">Travelers directory.</p>
        </div>
        
       
      <div className="relative max-w-md w-full mt-2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name,email,phone number or country..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
        />
      </div>
      </div>
      
      {filteredCustomers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((item) => (
          <div key={item.id} className="flex flex-col bg-orange-100/70 p-6 rounded-xl hover:bg-orange-200 shadow-sm justify-between space-y-4">
            <div>
              <p className="text-xl font-bold text-orange-900">{item.name}</p>
              <p className="text-xs text-orange-700">{item.email}</p>
            </div>

            <div className="text-sm font-medium text-orange-100 bg-gray-800 px-3 py-1.5 rounded-lg w-fit">
              Trip Count: {item.totalBookings}
            </div>

            <div className="flex justify-between items-center text-xs text-orange-800 pt-3 border-t border-orange-800/20 font-medium">
              <span>{item.phone}</span>
              <span className="bg-orange-800/10 px-2 py-0.5 rounded">{item.country}</span>
            </div>
          </div>
        ))}
      </div>
      ) :
      (
        <div>
          <p>No result found named {searchQuery}</p>
          </div>
      )
      }
      
    </div>
  );
}