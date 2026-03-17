import { useState, useEffect } from 'react';
import gamesData from './games.json';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';
import { Gamepad2, Search, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesData);
  }, []);

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedGame) {
    return <GamePlayer game={selectedGame} onBack={() => setSelectedGame(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative selection:bg-fuchsia-500 selection:text-white">
      <div className="neon-grid" />
      
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-2 rounded-xl shadow-[0_0_20px_rgba(217,70,239,0.3)] group-hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-display font-black tracking-tighter">
              ARCADE<span className="text-fuchsia-500 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">HUB</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search the metaverse..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-fuchsia-500/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                id="search-input"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-fuchsia-500 transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-500 text-xs font-bold tracking-widest uppercase mb-6">
              Next-Gen Unblocked Gaming
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter leading-none">
              LEVEL UP YOUR <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient-x">EXPERIENCE</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Access the ultimate collection of unblocked games. High performance, zero lag, infinite entertainment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Games Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="h-8 w-1.5 bg-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
            <h3 className="text-3xl font-display font-bold tracking-tight">TRENDING_NOW</h3>
          </div>
          <div className="md:hidden relative w-48">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 text-xs focus:outline-none focus:border-fuchsia-500"
              id="mobile-search-input"
            />
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            id="games-grid"
          >
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onSelect={setSelectedGame}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredGames.length === 0 && (
          <div className="text-center py-32 rounded-3xl border border-white/5 bg-white/[0.02]">
            <Search className="w-16 h-16 text-white/10 mx-auto mb-6" />
            <p className="text-white/40 text-2xl font-display uppercase tracking-widest">No signals found</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-fuchsia-500 hover:text-fuchsia-400 transition-colors font-bold"
            >
              RESET_SEARCH
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Gamepad2 className="w-8 h-8 text-fuchsia-500" />
              <span className="font-display font-black text-xl tracking-tighter">ARCADE HUB</span>
            </div>
            <div className="text-center text-white/40 text-sm font-light">
              © 2026 NEON ARCADE SYSTEMS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex justify-center md:justify-end gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fuchsia-500/20 hover:text-fuchsia-500 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
