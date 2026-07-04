import { useState, useEffect } from "react";

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      isLive: true,
      title: "Sunday Worship Service",
      church: "Christ the Light Church",
      viewers: "1.2K watching now",
      thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1200&q=80",
    },
    {
      id: 1,
      isLive: false,
      title: "Evening Prayer",
      church: "Christ the Light Church",
      viewers: "890 watching now",
      thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=80",
    },
    {
      id: 2,
      isLive: false,
      title: "Bible Study",
      church: "Christ the Light Church",
      viewers: "500 watching now",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    },
    {
      id: 3,
      isLive: false,
      title: "Youth Service",
      church: "Christ the Light Church",
      viewers: "300 watching now",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
    },
  ];

  // ── AUTO SLIDE EVERY 5 SECONDS ──
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[activeSlide];

  return (
    <div className="w-full">
      <div className="relative w-full rounded-2xl overflow-hidden bg-gray-900" style={{ minHeight: 320 }}>
        <img
          src={current.thumbnail}
          alt={current.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 flex flex-col justify-end h-full px-6 py-8 sm:px-10 sm:py-10" style={{ minHeight: 320 }}>
          {current.isLive && (
            <span className="mb-3 inline-flex items-center gap-1.5 self-start rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold text-white uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
          )}

          <h1 className="text-3xl font-bold text-white leading-tight sm:text-4xl lg:text-5xl max-w-lg transition-all duration-500">
            {current.title}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-white font-medium">{current.church}</span>
            <span className="w-2 h-2 rounded-full bg-red-500" />
          </div>

          <div className="mt-1.5 flex items-center gap-1.5 text-gray-300 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            {current.viewers}
          </div>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <button className="flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors px-5 py-2.5 text-sm font-semibold text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Live
            </button>
            <button className="flex items-center gap-2 rounded-md border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors px-5 py-2.5 text-sm font-semibold text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              More Info
            </button>
          </div>

          {/* Slide Dots — clicking resets the timer */}
          <div className="mt-6 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? "w-6 h-2 bg-red-500"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}