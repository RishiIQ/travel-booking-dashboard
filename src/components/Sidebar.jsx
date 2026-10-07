export default function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'destination', label: 'Destinations' },
    { id: 'trips&packages', label: 'Trips & Packages' },
    { id: 'customers', label: 'Customers' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'calender', label: 'Calender View' },
    { id: 'analytics', label: 'Analytics & Stats' },
  ];

  return (
    <nav className="w-full lg:w-52 bg-orange-100 border-r border-orange-500 p-4 flex lg:flex-col gap-1 overflow-x-auto rounded-xl lg:overflow-visible">
      {navItems.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActivePage(tab.id)}
          className={`px-4 py-2.5 rounded-2xl text-sm font-medium  whitespace-nowrap text-left hover:translate-x-1 transition ${
            activePage === tab.id
              ? 'bg-black text-white shadow-md shadow-[4px_4px_0px_0px_#faa792]'
              : 'text-slate-600 hover:bg-orange-200 hover:text-orange-800'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}