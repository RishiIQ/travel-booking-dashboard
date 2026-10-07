export default function StatsTab() {
    return (
        <div className="space-y-6">
         
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Analytics & Reports</h1>
                <p className="text-sm text-slate-500">Comprehensive overview of platform performance and growth metrics.</p>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Acquisition</span>
                    <p className="text-3xl font-bold text-slate-900 mt-2">21 <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full ml-2">+40% vs last month</span></p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Peak Growth Month</span>
                    <p className="text-3xl font-bold text-slate-900 mt-2">October <span className="text-xs font-medium text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full ml-2">21 Users</span></p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Conversion Rate</span>
                    <p className="text-3xl font-bold text-slate-900 mt-2">68.4% <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full ml-2">Stable</span></p>
                </div>
            </div>

          
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Customer Growth Overview</h3>
                        <p className="text-sm text-slate-500">New customer acquisition tracking from January to October</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span> Total Customers Acquired
                    </div>
                </div>

               
                <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 pt-8 pb-2 px-2 border-b border-slate-100 overflow-x-auto">
                    {[
                        { month: 'Jan', customers: '2', height: '10%' },
                        { month: 'Feb', customers: '3', height: '18%' },
                        { month: 'Mar', customers: '4', height: '25%' },
                        { month: 'Apr', customers: '4', height: '25%' },
                        { month: 'May', customers: '5', height: '32%' },
                        { month: 'Jun', customers: '5', height: '32%' },
                        { month: 'July', customers: '6', height: '40%' },
                        { month: 'Aug', customers: '9', height: '55%' },
                        { month: 'Sep', customers: '15', height: '80%' },
                        { month: 'Oct', customers: '21', height: '100%' }
                    ].map((item, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center h-full justify-end group relative min-w-[32px]">
                            
                            <div className="absolute -top-8 bg-slate-900 text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                                {item.customers} Customers
                            </div>
                            
                            
                            <div 
                                style={{ height: item.height }} 
                                className="w-full max-w-[36px] bg-orange-200 group-hover:bg-orange-700 rounded-t-md transition-all duration-300 shadow-sm flex items-center justify-center text-slate-900 group-hover:text-white text-[10px] font-bold pt-1"
                            >
                                {item.customers}
                            </div>
                            
                           
                            <span className="text-[11px] font-medium text-slate-500 mt-3 truncate">{item.month}</span>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <h3 className="text-base font-bold text-slate-900">Top Performing Destinations</h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Bali Tropical Paradise', percentage: '45%', count: '12 Bookings' },
                            { name: 'Swiss Alps Explorer', percentage: '30%', count: '8 Bookings' },
                            { name: 'Kyoto Heritage Tour', percentage: '25%', count: '6 Bookings' }
                        ].map((dest, i) => (
                            <div key={i} className="space-y-1">
                                <div className="flex justify-between text-xs font-semibold text-slate-700">
                                    <span>{dest.name}</span>
                                    <span>{dest.count}</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-orange-600 h-full rounded-full" style={{ width: dest.percentage }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                    <h3 className="text-base font-bold text-slate-900">System Activity Status</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <span className="text-slate-600 font-medium">Database Synced</span>
                            <span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-2.5 py-1 rounded-md">Operational</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <span className="text-slate-600 font-medium">API Gateway Response</span>
                            <span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-2.5 py-1 rounded-md">24ms</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <span className="text-slate-600 font-medium">Active Admin Sessions</span>
                            <span className="bg-orange-50 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-md">1 User Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}