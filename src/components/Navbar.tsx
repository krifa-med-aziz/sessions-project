export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">
              🎬
            </span>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
              MovieWatch
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button className="text-gray-300 text-sm font-medium transition-colors hover:text-primary cursor-pointer">
              Home
            </button>
            <button className="text-gray-300 text-sm font-medium transition-colors hover:text-primary cursor-pointer">
              Watchlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
