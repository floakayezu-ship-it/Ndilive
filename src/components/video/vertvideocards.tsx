
const liveChannels = Array.from({ length: 25 }, (_, i) => {
  const base = [
    { church: "Christ the Light Church", service: "Sunday Worship Service", viewers: "1.2k", thumbnail: "https://images.unsplash.com/photo-1438232992991-995b671e5b28?w=400&h=225&fit=crop" },
    { church: "Faith Assembly", service: "Power Night", viewers: "864", thumbnail: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=400&h=225&fit=crop" },
    { church: "Grace House", service: "Worship Experience", viewers: "642", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop" },
    { church: "The Rock Church", service: "Evening Service", viewers: "528", thumbnail: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&h=225&fit=crop" },
    { church: "Hope Community", service: "Midweek Service", viewers: "412", thumbnail: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=225&fit=crop" },
    { church: "New Life Church", service: "Morning Devotion", viewers: "318", thumbnail: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=225&fit=crop" },
    { church: "The Rock Church", service: "Evening Service", viewers: "528", thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=225&fit=crop" },
    { church: "Hope Community", service: "Midweek Service", viewers: "412", thumbnail: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=400&h=225&fit=crop" },
    { church: "New Life Church", service: "Morning Devotion", viewers: "318", thumbnail: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=225&fit=crop" },
  ];
  return { id: i + 1, ...base[i % base.length] };
});

export default function LiveChannelsGrid() {

  return (


    <div className="w-full">
      {/* Vertical Grid */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
      >
        {liveChannels.map((channel) => (
          <div
            key={channel.id}
            className="group cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative rounded-xl overflow-hidden bg-gray-900" style={{ height: 120 }}>
              <img
                src={channel.thumbnail}
                alt={channel.service}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Live Badge */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-red-600 rounded px-1.5 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-white text-xs font-bold uppercase tracking-wide">Live</span>
                <span className="text-white text-xs font-semibold">{channel.viewers}</span>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-7 h-7 rounded-full bg-black/50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="mt-2">
              <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-red-500 transition-colors duration-200">
                {channel.church}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{channel.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}