import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function GameCard({ game, onSelect }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="arcade-card group cursor-pointer overflow-hidden"
      onClick={() => onSelect(game)}
      id={`game-card-${game.id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-fuchsia-500 text-white px-6 py-2 rounded-full font-display font-bold text-sm shadow-[0_0_20px_rgba(217,70,239,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-transform">
            PLAY_NOW
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-display font-bold text-lg group-hover:text-fuchsia-500 transition-colors">{game.title}</h3>
          <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Status:</span>
          <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest animate-pulse">Ready</span>
        </div>
      </div>
    </motion.div>
  );
}
