import { ArrowLeft, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function GamePlayer({ game, onBack }) {
  const toggleFullScreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-screen bg-[#050505] relative"
      id="game-player-container"
    >
      <div className="neon-grid opacity-20" />
      <div className="flex items-center justify-between p-6 bg-black/80 backdrop-blur-xl border-b border-white/10 z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/60 hover:text-fuchsia-500 transition-all font-display font-bold text-sm group"
          id="back-button"
        >
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-fuchsia-500/20 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span>RETURN_TO_BASE</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-white font-display font-black text-lg tracking-tighter uppercase">{game.title}</h2>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">Live Session</span>
            <div className="h-1 w-12 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
          </div>
        </div>
        <button
          onClick={toggleFullScreen}
          className="p-3 rounded-xl bg-white/5 text-white/40 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
          title="Fullscreen"
          id="fullscreen-button"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 relative bg-black p-6">
        <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group">
          <div className="absolute inset-0 pointer-events-none border-2 border-fuchsia-500/0 group-hover:border-fuchsia-500/20 transition-all duration-500 z-10" />
          <iframe
            id="game-iframe"
            src={game.url}
            className="w-full h-full border-none"
            title={game.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        </div>
      </div>
    </motion.div>
  );
}
