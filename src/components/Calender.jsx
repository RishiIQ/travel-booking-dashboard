export default function Calender() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Calendar</h1>
        <p className="text-sm text-slate-500">Schedule of departures.</p>
      </div>

      {/* Active Schedule Notification Card */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-orange-100 border border-orange-300 font-medium rounded-xl text-orange-900 shadow-sm gap-2">
        <p className="text-sm">March 2026 Schedule Grid Active. 3 Trips scheduled this month.</p>
        <span className="text-xs bg-orange-600 text-white px-3 py-1 rounded-lg font-semibold shadow-sm">
          Active Grid
        </span>
      </div>

      {/* Scheduled Departures List */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Upcoming Departures</h3>
        <div className="space-y-3">
          {[
            { title: 'Bali Summer Getaway', date: 'March 10, 2026', slots: '3 Booked', status: 'Confirmed' },
            { title: 'Alpine Skiing Expedition', date: 'March 18, 2026', slots: '1 Booked', status: 'Scheduled' },
            { title: 'Kyoto Heritage Tour', date: 'March 25, 2026', slots: '3 Booked', status: 'Confirmed' }
          ].map((trip, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl bg-slate-50 border border-slate-100 gap-3 hover:bg-slate-100/60 transition">
              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900 text-base">{trip.title}</h4>
                <p className="text-xs text-slate-500">Departure Date: <span className="font-medium text-slate-700">{trip.date}</span></p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                  {trip.slots}
                </span>
                <span className="text-xs font-semibold bg-slate-200 text-slate-700 px-3 py-1 rounded-full">
                  {trip.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}