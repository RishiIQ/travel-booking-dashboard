export default function Header ({loginState,setLoginState}) {
  return (
    <header className='sticky top-2 mx-4 z-50 bg-orange-300 border border-black rounded-xl px-6 py-3 flex flex-col sm:flex-row justify-between items-center shadow-sm shadow-black gap-4'>
      <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full sm:w-auto'>
        <h2 className='flex items-center text-xl sm:text-2xl font-bold text-black whitespace-nowrap'>
          <img
            src='https://thumbs.dreamstime.com/b/palm-tree-sunset-beach-scene-silhouette-logo-icon-vector-art-summer-travel-design-tropical-palm-tree-silhouette-against-451799388.jpg?w=768'
            alt='brand_logo'
            className='w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm'
          />
          <span className='pl-2'>Travel Dashboard</span>
        </h2>

        <div className='overflow-hidden whitespace-nowrap w-full sm:w-36'>
          <p className='text-xs sm:text-sm text-white animate-marquee font-medium'>
            Explore the world
          </p>
        </div>
      </div>

      <div className='flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-lime-700'>
        <span className='font-medium text-slate-100 text-sm sm:text-base bg-orange-600 px-4 py-1.5 rounded-xl border border-black/30 shadow-sm'>
          Admin user
        </span>
        <button
          type='button'
          className='bg-rose-50 hover:bg-rose-100 text-rose-600 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0.5 shadow-[2px_2px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] active:shadow-[1px_1px_0px_0px_#000000] cursor-pointer'
          onClick={() => setLoginState('false')}
        >
          Logout
        </button>
      </div>
    </header>
  )
}
