import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, BookOpen } from 'lucide-react';

const HeroSection = () => {
    const [greeting, setGreeting] = useState('');
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const dropdownRef = useRef(null);
    const searchContainerRef = useRef(null);

    // Mock Data for Dropdown
    const searchResults = [
        { title: 'Data Structures', path: '/computer-science', category: 'CS' },
        { title: 'Quantum Physics', path: '/physics-mathematics', category: 'Physics' },
        { title: 'Circuit Design', path: '/engineering', category: 'Engineering' },
        { title: 'Machine Learning', path: '/computer-science', category: 'CS' },
        { title: 'Thermodynamics', path: '/engineering', category: 'Engineering' },
    ];

    const filteredResults = searchResults.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Dynamic Greeting Logic
    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            const minute = new Date().getMinutes();
            const time = hour + minute / 60;
            let message = '';

            if (time >= 5 && time < 12) {
                message = " Good Morning! Don't worry, the books aren't going to run away. Let's just do a little bit, okay? ☕";
            } else if (time >= 12 && time < 17) {
                message = "Hey! If your brain is buffering, it's time for a snack. Come back when you're actually awake! 🍕";
            } else if (time >= 17 && time < 21.5) {
                message = "Evening! Do a quick session now, so you can ignore your books tonight without feeling guilty. 🎮";
            } else {
                message = "Yo! Still here? You're a human, not a Wi-Fi router. If you're tired, just go sleep. We'll fix it tomorrow! 💤";
            }
            setGreeting(message);
        };
        updateGreeting();
        const interval = setInterval(updateGreeting, 60000);
        return () => clearInterval(interval);
    }, []);

    // GSAP Animation for Dropdown
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('gsap').then((gsap) => {
                if (query && isFocused && filteredResults.length > 0) {
                    gsap.default.fromTo(dropdownRef.current,
                        { opacity: 0, y: -10, scaleY: 0.95 },
                        { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease: 'power2.out' }
                    );
                    gsap.default.fromTo('.search-item',
                        { opacity: 0, x: -10 },
                        { opacity: 1, x: 0, duration: 0.2, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
                    );
                }
            });
        }
    }, [query, isFocused, filteredResults.length]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-[120px] -z-10 opacity-60"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-16 pt-32">
                {/* Dynamic Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm text-sm font-medium text-blue-600 dark:text-blue-400 mb-2"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    {greeting}
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-slate-900 dark:text-white"
                >
                    Study hard, but <br />
                    <span className="text-gradient">chill harder.</span>
                </motion.h1>

                {/* Sub-text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    No pressure, no heavy goals. Just pick a topic and let's get through it together with <span className="font-semibold text-blue-600 dark:text-blue-400">ResourceDeck</span>.
                </motion.p>

                {/* Smart Search Bar */}
                <motion.div
                    ref={searchContainerRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative max-w-xl mx-auto w-full group z-50"
                >
                    {/* Search Input */}
                    <div className={`
                        relative flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-2 rounded-2xl p-2 transition-all duration-300
                        ${isFocused ? 'border-blue-500 shadow-[0_8px_30px_rgba(59,130,246,0.15)] ring-4 ring-blue-500/10' : 'border-white dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/50 hover:border-blue-300 dark:hover:border-blue-700'}
                    `}>
                        <div className="pl-4 text-slate-400">
                            <Search size={24} />
                        </div>
                        <input
                            type="text"
                            className="w-full bg-transparent px-4 py-3 text-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none font-medium"
                            placeholder="What do you want to master today? (e.g. Data...)"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                        />
                        <div className="hidden md:flex pr-4">
                            <span className="text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">⌘ K</span>
                        </div>
                    </div>

                    {/* Live Dropdown Results */}
                    {query && isFocused && filteredResults.length > 0 && (
                        <div
                            ref={dropdownRef}
                            className="absolute top-full left-0 right-0 mt-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden text-left"
                        >
                            <div className="p-2">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-2">Suggestions</div>
                                {filteredResults.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.path}
                                        className="search-item flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer group/item transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors shadow-sm">
                                                <BookOpen size={18} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-slate-900 dark:text-white">{item.title}</div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.category}</div>
                                            </div>
                                        </div>
                                        <ArrowRight size={16} className="text-slate-300 group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
