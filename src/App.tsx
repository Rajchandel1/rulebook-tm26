import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, BookOpen, Trophy, Cpu, Users, List, Info, ShieldCheck, Layers, Users2 } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';
import { GAMES, Game } from './constants';
import buddhaLogo from './buddha.png';

// Types for the flipbook ref
interface IFlipBook {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    flip: (page: number) => void;
    getPageCount: () => number;
    getCurrentPageIndex: () => number;
  };
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'tech' | 'non-tech'>('tech');
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<any>(null);

  const techGames = GAMES.filter(g => g.category === 'Tech');
  const nonTechGames = GAMES.filter(g => g.category === 'Non-Tech');
  const activeGames = activeTab === 'tech' ? techGames : nonTechGames;

  const onPage = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const handleTabChange = (tab: 'tech' | 'non-tech') => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const goPrev = useCallback(() => {
    const pageFlip = bookRef.current?.pageFlip?.();
    if (!pageFlip) return;
    const currentIndex = pageFlip.getCurrentPageIndex();
    if (currentIndex > 0) {
      pageFlip.flip(currentIndex - 1);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-2 md:p-8 overflow-hidden font-serif">
      {/* Top Navigation / Tabs */}
      <div className="fixed top-0 left-0 w-full z-50 bg-paper/95 backdrop-blur-md border-b border-ink/10 px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-accent p-1.5 rounded-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-black text-xl tracking-tighter uppercase text-ink">Technomantra</span>
        </div>
        
        <div className="flex bg-ink/5 p-1 rounded-xl w-full md:w-auto">
          <button
            onClick={() => handleTabChange('tech')}
            className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-xs font-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest ${
              activeTab === 'tech' ? 'bg-accent text-white shadow-md' : 'text-ink/60 hover:text-ink hover:bg-ink/5'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" /> Tech
          </button>
          <button
            onClick={() => handleTabChange('non-tech')}
            className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-xs font-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest ${
              activeTab === 'non-tech' ? 'bg-accent text-white shadow-md' : 'text-ink/60 hover:text-ink hover:bg-ink/5'
            }`}
          >
            <Users className="w-3.5 h-3.5" /> Non-Tech
          </button>
        </div>
      </div>

      {/* Book Container */}
      <div className="relative w-full max-w-5xl flex items-center justify-center mt-20 mb-24 md:mt-12 md:mb-12">
        {/* Desktop Left Arrow */}
        <button
          onClick={goPrev}
          className="hidden md:flex absolute -left-20 z-10 p-5 bg-paper rounded-full shadow-xl hover:bg-accent hover:text-white transition-all disabled:opacity-20 border border-ink/5"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* The Actual Book */}
        <div className="book-wrapper perspective-3000 w-full flex justify-center">
          <HTMLFlipBook
            key={activeTab}
            width={400}
            height={580}
            size="stretch"
            minWidth={280}
            maxWidth={500}
            minHeight={450}
            maxHeight={750}
            maxShadowOpacity={0.6}
            showCover={true}
            // CHANGED: Set mobileScrollSupport to false to prevent scroll from flipping
            mobileScrollSupport={false}
            onFlip={onPage}
            className="technomantra-book"
            style={{ backgroundColor: 'transparent' }}
            ref={bookRef}
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            usePortrait={window.innerWidth < 768}
            startZIndex={0}
            autoSize={true}
            // CHANGED: Set clickEventForward to false to prevent clicking page from flipping
            clickEventForward={false}
            // CHANGED: Set useMouseEvents to false to prevent dragging/swiping to flip
            useMouseEvents={false}
            swipeDistance={20}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {/* Cover Page */}
            <div className="page bg-black text-white p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
              {/* Subtle glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="absolute inset-4 border border-white/10 pointer-events-none" />
              
              <div className="z-10 space-y-8">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative inline-block"
                >
                  <div className="w-40 h-40 md:w-56 md:h-56 mx-auto relative group">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/40 transition-all duration-500" />
                    <img 
                      src={buddhaLogo}
                      alt="Buddha Logo" 
                      className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(140,96,246,0.5)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>

                <div className="space-y-2">
                  <h2 className="text-xs tracking-[0.6em] font-black text-accent uppercase">Event 2026</h2>
                  <h1 className="text-4xl md:text-6xl font-display font-black leading-tight uppercase tracking-tighter">
                    {activeTab === 'tech' ? 'Technical' : 'Non-Tech'}<br/>
                    <span className="text-white/40 italic font-serif normal-case text-2xl md:text-3xl">Rulebook</span>
                  </h1>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-px bg-white/20" />
                  <p className="text-lg italic font-serif opacity-80 tracking-widest uppercase">Technomantra</p>
                  <div className="w-8 h-px bg-white/20" />
                </div>
              </div>
            </div>

            {/* Index Page */}
            <div className="page bg-paper p-6 md:p-10 border-l border-ink/10 shadow-inner overflow-y-auto">
              <div className="h-full flex flex-col">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-display font-black text-ink uppercase tracking-tight">Index</h2>
                  <div className="w-8 h-1 bg-accent mx-auto mt-2" />
                </div>
                <ul className="space-y-3 flex-1">
                  {activeGames.map((game, idx) => (
                    <li key={game.id} className="flex items-center group">
                      <button
                        onClick={() => bookRef.current?.pageFlip?.().flip(idx + 2)}
                        className="text-left text-sm md:text-base font-black text-ink hover:text-accent transition-colors flex-1 truncate"
                      >
                        {idx + 1}. {game.title}
                      </button>
                      <div className="w-8 text-right font-mono text-xs font-bold opacity-40 text-ink">{idx + 3}</div>
                    </li>
                  ))}

                </ul>
                <div className="mt-6 pt-4 border-t border-ink/5 text-center">
                  <p className="text-[10px] uppercase tracking-widest font-black text-ink/30">Technomantra 2026</p>
                </div>
              </div>
            </div>

            {/* Game Pages */}
            {activeGames.map((game) => (
              <div key={game.id} className="page bg-paper p-6 md:p-10 border-l border-ink/10 shadow-inner overflow-y-auto">
                <div className="min-h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6 pb-4 border-b-2 border-accent/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-accent/10 text-accent px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">
                        {game.category}
                      </span>
                      <button 
                        onClick={() => bookRef.current?.pageFlip?.().flip(1)}
                        className="text-[10px] font-black uppercase tracking-widest text-ink/40 hover:text-accent flex items-center gap-1"
                      >
                        <List className="w-3 h-3" /> Index
                      </button>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-black text-ink leading-tight">
                      {game.title}
                    </h2>
                    {game.teamSize && (
                      <div className="mt-2 flex items-center gap-1.5 text-ink/50">
                        <Users2 className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">{game.teamSize}</span>
                      </div>
                    )}
                    {game.fee && (
                      <div className="mt-1 flex items-center gap-1.5 text-accent">
                        <Trophy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-black uppercase tracking-wider">Fee: {game.fee}</span>
                      </div>
                    )}
                  </div>

                  {/* Content Sections */}
                  <div className="space-y-8 flex-1">
                    {/* About Section */}
                    <section>
                      <div className="flex items-center gap-2 mb-3">
                        <Info className="w-4 h-4 text-accent" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-ink/60">About</h3>
                      </div>
                      <p className="text-sm md:text-base leading-relaxed text-ink font-serif font-bold italic">
                        {game.about}
                      </p>
                    </section>

                    {/* Rounds Section */}
                    {game.rounds && game.rounds.length > 0 && (
                      <section>
                        <div className="flex items-center gap-2 mb-4">
                          <Layers className="w-4 h-4 text-accent" />
                          <h3 className="text-xs font-black uppercase tracking-widest text-ink/60">Rounds</h3>
                        </div>
                        <div className="space-y-4">
                          {game.rounds.map((round, rIdx) => (
                            <div key={rIdx} className="bg-accent/5 p-4 rounded-xl border-l-4 border-accent shadow-sm">
                              <h4 className="text-sm font-black text-ink mb-1 uppercase tracking-tight">{round.title}</h4>
                              <p className="text-xs md:text-sm text-ink font-bold leading-relaxed italic">{round.content}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Rules Section */}
                    {game.rules && game.rules.length > 0 && (
                      <section>
                        <div className="flex items-center gap-2 mb-3">
                          <ShieldCheck className="w-4 h-4 text-accent" />
                          <h3 className="text-xs font-black uppercase tracking-widest text-ink/60">Rules & Regulations</h3>
                        </div>
                        <ul className="space-y-3">
                          {game.rules.map((rule, ruleIdx) => (
                            <li key={ruleIdx} className="flex gap-3 text-sm text-ink font-bold italic leading-snug">
                              <span className="text-accent font-black shrink-0">•</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-12 pt-4 border-t border-ink/5 flex justify-between items-center opacity-30">
                    <Trophy className="w-3 h-3" />
                    <span className="text-[10px] font-mono">TM-2026</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Back Cover */}
            <div className="page bg-[#0f172a] text-white p-8 flex flex-col items-center justify-center text-center shadow-inner">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto p-2">
                  <img
                    src={buddhaLogo}
                    alt="Buddha Logo"
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tighter">End of Section</h3>
                <p className="opacity-50 text-xs uppercase tracking-widest">Technomantra 2026</p>
                <button 
                  onClick={() => bookRef.current?.pageFlip?.().flip(0)}
                  className="mt-8 px-6 py-2 border border-white/20 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-ink transition-all"
                >
                  Back to Cover
                </button>
              </div>
            </div>
          </HTMLFlipBook>
        </div>

        {/* Desktop Right Arrow */}
        <button
          onClick={() => bookRef.current?.pageFlip?.().flipNext()}
          className="hidden md:flex absolute -right-20 z-10 p-5 bg-paper rounded-full shadow-xl hover:bg-accent hover:text-white transition-all disabled:opacity-20 border border-ink/5"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Navigation Bar - Fixed at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-paper/95 backdrop-blur-lg border-t border-ink/10 px-6 py-4 flex justify-between items-center z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button
          onClick={goPrev}
          className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all disabled:opacity-30 disabled:bg-ink/10 disabled:text-ink/40"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black uppercase tracking-tighter text-ink/40">Page</span>
          <span className="text-sm font-mono font-bold text-accent">{currentPage + 1}</span>
        </div>

        <button
          onClick={() => bookRef.current?.pageFlip?.().flipNext()}
          className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all disabled:opacity-30"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.1] z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </div>
    </div>
  );
}