import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardTab from './components/DashboardTab'
import DestinationTab from './components/DestinationTab'
import TripsTab from './components/TripsTab'
import CustomersTab from './components/CustomersTab'
import BookingsTab from './components/BookingsTab'
import Calendar from './components/Calender'
import './App.css'
import StatsTab from './components/StatsTab';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [loginState,setLoginState] = useState('true')
  const [userName,setUsername] = useState('')
  const [password,setPassword] = useState('')

  // --- 1. DESTINATIONS STATE ---
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Bali Tropical Paradise",
      country: "Indonesia",
      category: "Beach & Leisure",
      price: 850,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      description: "Experience serene beaches, ancient temples, and lush green rice terraces."
    },
    {
      id: 2,
      name: "Swiss Alps Explorer",
      country: "Switzerland",
      category: "Mountain & Adventure",
      price: 1450,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80",
      description: "Breathtaking snow-capped peaks, luxury chalets, and world-class skiing."
    },
    {
      id: 3,
      name: "Kyoto Heritage Tour",
      country: "Japan",
      category: "Cultural",
      price: 1200,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      description: "Discover historic bamboo groves, traditional tea houses, and shrines."
    },
    {
      id: 4,
      name: "Santorini Sunset Escape",
      country: "Greece",
      category: "Island & Romance",
      price: 1100,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
      description: "Iconic whitewashed architecture overlooking the stunning Aegean Sea."
    },
    {
      id: 5,
      name: "Parisian City Break",
      country: "France",
      category: "City & Art",
      price: 950,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
      description: "Art museums, iconic monuments, and world-class culinary experiences."
    }
  ]);

  // --- 2. TRIPS STATE ---
  const [trips, setTrips] = useState([
    {
      id: 101,
      title: "Bali Summer Getaway",
      destinationId: 1,
      destinationName: "Bali Tropical Paradise",
      startDate: "2026-11-10",
      endDate: "2026-11-18",
      price: 850,
      maxSlots: 15,
      bookedSlots: 3, 
      status: "Upcoming"
    },
    {
      id: 102,
      title: "Alpine Skiing Expedition",
      destinationId: 2,
      destinationName: "Swiss Alps Explorer",
      startDate: "2026-12-05",
      endDate: "2026-12-14",
      price: 1450,
      maxSlots: 10,
      bookedSlots: 1,
      status: "Upcoming"
    },
    {
      id: 103,
      title: "Kyoto Autumn Blossoms",
      destinationId: 3,
      destinationName: "Kyoto Heritage Tour",
      startDate: "2026-11-01",
      endDate: "2026-11-08",
      price: 1200,
      maxSlots: 20,
      bookedSlots: 3,
      status: "Active"
    },
    {
      id: 104,
      title: "Aegean Romance Cruise",
      destinationId: 4,
      destinationName: "Santorini Sunset Escape",
      startDate: "2026-12-12",
      endDate: "2026-12-20",
      price: 1100,
      maxSlots: 12,
      bookedSlots: 2,
      status: "Upcoming"
    }
  ]);

     
  // --- 3. CUSTOMERS DATA ---
  const initialCustomers = [
    {
      id: 201,
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      phone: "+91 98765 43210",
      country: "India",
      totalBookings: 2
    },
    {
      id: 202,
      name: "Priya Patel",
      email: "priya.patel@example.com",
      phone: "+91 91234 56789",
      country: "India",
      totalBookings: 1
    },
    {
      id: 203,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 555-0192",
      country: "USA",
      totalBookings: 1
    },
    {
      id: 204,
      name: "Emma Smith",
      email: "emma.smith@example.com",
      phone: "+44 20 7946 0912",
      country: "UK",
      totalBookings: 1
    }
  ];

  // --- 4. BOOKINGS DATA ---
  const initialBookings = [
    {
      id: 301,
      customerId: 201,
      customerName: "Aarav Sharma",
      tripId: 101,
      tripTitle: "Bali Summer Getaway",
      bookingDate: "2026-10-01",
      travelersCount: 2,
      totalAmount: 1700,
      bookingStatus: "Confirmed",
      paymentStatus: "Paid"
    },
    {
      id: 302,
      customerId: 201,
      customerName: "Aarav Sharma",
      tripId: 102,
      tripTitle: "Alpine Skiing Expedition",
      bookingDate: "2026-10-02",
      travelersCount: 1,
      totalAmount: 1450,
      bookingStatus: "Pending",
      paymentStatus: "pending"
    },
    {
      id: 303,
      customerId: 202,
      customerName: "Priya Patel",
      tripId: 103,
      tripTitle: "Kyoto Autumn Blossoms",
      bookingDate: "2026-10-03",
      travelersCount: 3,
      totalAmount: 3600,
      bookingStatus: "Confirmed",
      paymentStatus: "Paid"
    },
    {
      id: 304,
      customerId: 203,
      customerName: "John Doe",
      tripId: 101,
      tripTitle: "Bali Summer Getaway",
      bookingDate: "2026-10-04",
      travelersCount: 1,
      totalAmount: 850,
      bookingStatus: "Confirmed",
      paymentStatus: "Paid"
    },
    {
      id: 305,
      customerId: 204,
      customerName: "Emma Smith",
      tripId: 104,
      tripTitle: "Aegean Romance Cruise",
      bookingDate: "2026-10-05",
      travelersCount: 2,
      totalAmount: 2200,
      bookingStatus: "Cancelled",
      paymentStatus: "Refunded"
    }
  ];

  const Revenue = initialBookings
    .filter((t) => t.paymentStatus === "Paid")
    .reduce((sum, t) => sum + t.totalAmount, 0);

  const totalBookings = trips.reduce((sum, t) => sum + t.bookedSlots, 0);
  const activeTrips = trips.filter((t) => t.status === 'Active').length;
  const customersCount = initialCustomers.length;



  const handleLogin = ((e) =>{
    e.preventDefault()
    if(userName == 'user'){
      if(password == '123456'){
        setLoginState('true')
      }else{
        alert("incorrect Password")
      }
    }else{
      alert('incorrect Username')
    }
    setUsername('')
    setPassword('')
  })
  return (
    <div>
      {loginState === 'true' ?  

      <div className="h-screen w-2xl bg-orange-100/50 text-slate-800 font-sans">
      <Header loginState={loginState} setLoginState={setLoginState} />
      
      <div className="flex flex-col lg:flex-row flex-1 mt-5">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

       
        <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {activePage === 'dashboard' && (
            <DashboardTab 
              Revenue={Revenue} 
              totalBookings={totalBookings} 
              activeTrips={activeTrips} 
              customersCount={customersCount} 
              setDestinations={setDestinations}
            />
          )}
          
          {activePage === 'destination' && (
            <DestinationTab destinations={destinations} setDestinations={setDestinations} />
          )}

          {activePage === 'trips&packages' && (
            <TripsTab trips={trips} setInitialTrips={setTrips} />
          )}
          
          {activePage === 'customers' && (
            <CustomersTab customers={initialCustomers} />
          )}

          {activePage === 'bookings' && (
            <BookingsTab bookings={initialBookings} />
          )}

          {activePage === 'calender' && (
            <Calendar/>
          )}

          {activePage === 'analytics' && (
            <StatsTab/>
          )}
        </main>
      </div>
    </div> :
    <div>
      <div className="flex justify-center items-center min-h-[100vh] px-4">
  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm w-full max-w-md space-y-6">
    
   
    <div className="text-center space-y-1">
      <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
      <p className="text-sm text-slate-500">Please sign in to your dashboard</p>
    </div>

    
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Username</label>
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={userName} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
          required 
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Password</label>
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
          required 
        />
      </div>
      <button 
        type="submit"
        className="w-full mt-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] cursor-pointer"
      >
        Login
      </button>
      <div className='flex flex-col justify-center items-center text-xs gap-2 text-gray-500'>
        <p>Username - user</p>
        <p>Password-123456</p>
      </div>
    </form>

  </div>
</div>
    </div>
    }
    </div>
    
    
  )
}