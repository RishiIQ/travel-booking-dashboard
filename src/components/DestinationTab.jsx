import { useState } from 'react'
import { Search, X } from 'lucide-react'

export default function DestinationTab({ destinations, setDestinations }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [formStatus, setFormStatus] = useState(false)
  const [editingId, setEditingId] = useState(null)
  
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    category: '',
    price: '',
    description: '',
    image: ''
  })

  // Filter destinations based on search query
  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleOpenAdd = () => {
    setEditingId(null)
    setFormData({ name: '', country: '', category: '', price: '', description: '', image: '' })
    setFormStatus(true)
  }

  const handleOpenEdit = (item) => {
    setEditingId(item.id)
    setFormData({
      name: item.name,
      country: item.country,
      category: item.category,
      price: item.price,
      description: item.description,
      image: item.image
    })
    setFormStatus(true)
  }

  const handleDelete = (id) => {
    setDestinations((prev) => prev.filter((item) => item.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingId) {
      // Update existing destination
      setDestinations((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                name: formData.name,
                country: formData.country,
                category: formData.category || 'General',
                price: Number(formData.price),
                description: formData.description,
                image: formData.image || item.image
              }
            : item
        )
      )
    } else {
      // Create new destination
      const newDestination = {
        id: Date.now(),
        name: formData.name,
        country: formData.country,
        category: formData.category || 'General',
        price: Number(formData.price),
        rating: 5.0,
        image: formData.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
        description: formData.description
      }
      setDestinations((prev) => [newDestination, ...prev])
    }

    setFormStatus(false)
    setEditingId(null)
    setFormData({ name: '', country: '', category: '', price: '', description: '', image: '' })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Destinations</h1>
          <p className="text-sm text-slate-500">Manage curated travel destinations.</p>
        </div>
        <div>
          <button 
            type="button"
            className="bg-orange-100 border border-black hover:bg-orange-300  hover:text-black px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 transform hover:-translate-y-1 active:translate-y-0.5 shadow-[2px_2px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] active:shadow-[1px_1px_0px_0px_#000000]"
            onClick={handleOpenAdd}
          >
            Add Destination
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
          placeholder="Search by destination, country, or category..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
        />
      </div>

      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((item) => (
            <div key={item.id} className="relative h-96 w-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group bg-white border border-slate-200 flex flex-col">
              
             
              <div className="absolute inset-0 w-full h-full z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <span className="absolute top-4 right-4 bg-orange-100/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  ★ {item.rating}
                </span>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-semibold bg-orange-500 text-white px-2.5 py-1 rounded-md mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-white text-2xl">{item.name}</h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">{item.country}</p>
                </div>
              </div>

             
              <div className="h-48 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-orange-300/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  ★ {item.rating}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                    <span className="text-xs font-semibold bg-orange-50 text-orange-600 px-2 py-1 rounded-md">{item.category}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-500">{item.country}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-2">{item.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400 block">Starting from</span>
                    <span className="text-lg font-bold text-slate-900">₹{item.price.toLocaleString()}</span>
                  </div>
                  <div className="flex gap-2 z-20">
                    <button 
                      type="button"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handleOpenEdit(item); 
                      }}
                      className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition cursor-pointer"
                    >
                      Edit
                    </button>
                    <button 
                      type="button"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handleDelete(item.id); 
                      }}
                      className="px-3 py-1.5 text-xs font-medium bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 font-medium">No destinations found matching "{searchQuery}"</p>
        </div>
      )}

     
      {formStatus && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl space-y-4 border border-slate-200">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-bold text-slate-900">
                {editingId ? 'Edit Destination' : 'Create New Package'}
              </h3>
              <button 
                type="button"
                onClick={() => setFormStatus(false)}
                className="text-slate-400 hover:text-slate-700 transition"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Destination Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Tropical Bali Escape" 
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                  required 
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Country</label>
                  <input 
                    type="text" 
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    placeholder="e.g. Indonesia" 
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Price (₹)</label>
                  <input 
                    type="number" 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="e.g. 850" 
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    required 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Category</label>
                <input 
                  type="text" 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  placeholder="e.g. Beach & Leisure" 
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Description</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Short description..." 
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                  rows="2"
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Image URL</label>
                <input 
                  type="url" 
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="https://images.unsplash.com/..." 
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                />
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
                  {editingId ? 'Update Package' : 'Save Package'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}