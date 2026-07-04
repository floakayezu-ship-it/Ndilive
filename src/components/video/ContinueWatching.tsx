import { useRef, useState } from "react";

const liveChannels = [
  { id: 1, church: "Christ the Light Church", service: "Sunday Worship Service", viewers: "1.2k", thumbnail: "https://images.unsplash.com/photo-1438232992991-995b671e5b28?w=400&h=225&fit=crop" },
  { id: 2, church: "Faith Assembly", service: "Power Night", viewers: "864", thumbnail: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=400&h=225&fit=crop" },
  { id: 3, church: "Grace House", service: "Worship Experience", viewers: "642", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop" },
  { id: 4, church: "The Rock Church", service: "Evening Service", viewers: "528", thumbnail: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&h=225&fit=crop" },
  { id: 5, church: "Hope Community", service: "Midweek Service", viewers: "412", thumbnail: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=225&fit=crop" },
  { id: 6, church: "New Life Church", service: "Morning Devotion", viewers: "318", thumbnail: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=225&fit=crop" },
  { id: 7, church: "The Rock Church", service: "Evening Service", viewers: "528", thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=225&fit=crop" },
  { id: 8, church: "Hope Community", service: "Midweek Service", viewers: "412", thumbnail: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=400&h=225&fit=crop" },
  { id: 9, church: "New Life Church", service: "Morning Devotion", viewers: "318", thumbnail: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=225&fit=crop" },
];

export default function StatisticsChart() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Continue Watching
        </h2>
        <button className="flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600 transition-colors">
          See All
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="relative">

        {/* LEFT BUTTON — only shows when scrolled right */}
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-0 z-10 h-[120px] w-12 flex items-center justify-center transition-opacity duration-200"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.7), transparent)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Horizontal Scroll Row */}
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar"
          onScroll={handleScroll}
        >
          <div className="flex gap-3 pb-2" style={{ width: "max-content" }}>
            {liveChannels.map((channel) => (
              <div key={channel.id} className="group cursor-pointer flex-shrink-0" style={{ width: 200 }}>
                <div className="relative rounded-xl overflow-hidden bg-gray-900" style={{ height: 120 }}>
                  <img
                    src={channel.thumbnail}
                    alt={channel.service}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-red-600 rounded px-1.5 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-white text-xs font-bold uppercase tracking-wide">Live</span>
                    <span className="text-white text-xs font-semibold">{channel.viewers}</span>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-7 h-7 rounded-full bg-black/50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    </div>
                  </div>
                </div>

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

        {/* RIGHT BUTTON — only shows when more content to scroll */}
        {showRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-0 z-10 h-[120px] w-12 flex items-center justify-center transition-opacity duration-200"
            style={{ background: "linear-gradient(to left, rgba(0,0,0,0.7), transparent)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

      </div>
    </div>
  );
}