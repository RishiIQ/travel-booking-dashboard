import { useState } from 'react'
import { X,Search } from 'lucide-react'

export default function TripsTab({ trips, setInitialTrips }) {
  const [formStatus, setFormStatus] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [searchQuery,setSearchQuery] = useState('')


  const [formData, setFormData] = useState({
    title: '',
    destinationName: '',
    startDate: '',
    endDate: '',
    price: '',
    maxSlots: 10
  })

  const handleOpenAdd = () => {
    setEditingId(null)
    setFormData({ title: '', destinationName: '', startDate: '', endDate: '', price: '', maxSlots: 10 })
    setFormStatus(true)
  }

  const handleOpenEdit = (item) => {
    setEditingId(item.id)
    setFormData({
      title: item.title,
      destinationName: item.destinationName,
      startDate: item.startDate,
      endDate: item.endDate,
      price: item.price,
      maxSlots: item.maxSlots
    })
    setFormStatus(true)
  }

  const handleDelete = (id) => {
    setInitialTrips((prev) => prev.filter((item) => item.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingId) {
      // Update existing trip
      setInitialTrips((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title: formData.title,
                destinationName: formData.destinationName,
                startDate: formData.startDate,
                endDate: formData.endDate,
                price: Number(formData.price),
                maxSlots: Number(formData.maxSlots)
              }
            : item
        )
      )
    } else {
      // Create new trip
      const newTrip = {
        id: Date.now(),
        title: formData.title,
        destinationName: formData.destinationName,
        startDate: formData.startDate,
        endDate: formData.endDate,
        price: Number(formData.price),
        maxSlots: Number(formData.maxSlots),
        bookedSlots: 0,
        status: 'Upcoming'
      }
      setInitialTrips((prev) => [newTrip, ...prev])
    }

    setFormStatus(false)
    setEditingId(null)
    setFormData({ title: '', destinationName: '', startDate: '', endDate: '', price: '', maxSlots: 10 })
  }

  // Filter destinations based on search query
  const filterTrips = trips.filter((item) => 
  item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
  item.destinationName.toLowerCase().includes(searchQuery.toLowerCase()) || 
  item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.price.toString().includes(searchQuery))

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Trips & Packages</h1>
          <p className="text-sm text-slate-500">Manage travel itineraries and pricing.</p>
        </div>
        <div>
          <button 
            className="bg-orange-100 border border-black hover:bg-orange-300 text-orange-700 hover:text-black px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 transform hover:-translate-y-1 active:translate-y-0.5 shadow-[2px_2px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] active:shadow-[1px_1px_0px_0px_#000000]"
            onClick={handleOpenAdd}
          >
            Create Trip
          </button>
        </div>
        
      </div>
      
        <div className="relative max-w-md w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title,destination,status or price..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
        />
      </div>
      <div>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-100 border-b border-slate-200 text-xs font-semibold text-orange-800 uppercase tracking-wider">
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Destination</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Dates</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                {filterTrips.length > 0 ? (
  filterTrips.map((item) => (
    <tr key={item.id} className="hover:bg-slate-50 transition">
      <td className="px-6 py-4 font-medium text-slate-900">{item.title}</td>
      <td className="px-6 py-4 text-slate-600">{item.destinationName}</td>
      <td className="px-6 py-4 text-slate-600">
        {Math.ceil((new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24))} Days
      </td>
      <td className="px-6 py-4 text-slate-600">{item.startDate} to {item.endDate}</td>
      <td className="px-6 py-4 font-semibold text-slate-900">₹{item.price.toLocaleString()}</td>
      <td className="px-6 py-4 text-right space-x-2">
        <button 
          onClick={() => handleOpenEdit(item)}
          className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition"
        >
          Edit
        </button>
        <button 
          onClick={() => handleDelete(item.id)}
          className="px-3 py-1.5 text-xs font-medium bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition"
        >
          Delete
        </button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6" className="text-center py-12 bg-white">
      <p className="text-slate-500 font-medium">No trips found matching your search</p>
    </td>
  </tr>
)}
                
              </tbody>
            </table>
          </div>
        </div>

       
        {formStatus && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4 border border-slate-200">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {editingId ? 'Edit Trip' : 'Create New Trip'}
                </h3>
                <button 
                  onClick={() => setFormStatus(false)}
                  className="text-slate-400 hover:text-slate-700 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Trip Title</label>
                  <input 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Bali Summer Getaway" 
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Destination Name</label>
                  <input 
                    type="text" 
                    value={formData.destinationName}
                    onChange={(e) => setFormData({...formData, destinationName: e.target.value})}
                    placeholder="e.g. Bali Tropical Paradise" 
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Start Date</label>
                    <input 
                      type="date" 
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">End Date</label>
                    <input 
                      type="date" 
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                      required 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Price (₹)</label>
                    <input 
                      type="number" 
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      placeholder="850" 
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Max Slots</label>
                    <input 
                      type="number" 
                      value={formData.maxSlots}
                      onChange={(e) => setFormData({...formData, maxSlots: e.target.value})}
                      placeholder="15" 
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                      required 
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3">
                  <button 
                    type="button" 
                    onClick={() => setFormStatus(false)}
                    className="px-4 py-2 text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition shadow"
                  >
                    {editingId ? 'Update Trip' : 'Save Trip'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}