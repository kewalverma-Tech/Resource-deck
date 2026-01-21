import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import HeroSection from '../components/HeroSection'; // Importing the new Hero
import SmartDiscovery from '../components/SmartDiscovery';
import { Code, Atom, Cpu, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Removed empty categories: Literature, Data Science, Research
    const categories = [
        {
            title: 'Computer Science',
            icon: <Code size={32} className="text-blue-500" />,
            desc: 'Algorithms, Web Dev, AI, and more.',
            path: '/computer-science',
            count: '120+'
        },
        {
            title: 'Physics & Math',
            icon: <Atom size={32} className="text-indigo-500" />,
            desc: 'From Quantum Mechanics to Calculus.',
            path: '/physics-mathematics',
            count: '85+'
        },
        {
            title: 'Engineering',
            icon: <Cpu size={32} className="text-cyan-500" />,
            desc: 'Electrical, Mechanical, and Civil Engineering.',
            path: '/engineering',
            count: '50+'
        },
    ];

    const [bookmarks, setBookmarks] = useState(() => {
        const saved = localStorage.getItem('bookmarks');
        return saved ? JSON.parse(saved) : [];
    });
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const toggleBookmark = (title) => {
        setBookmarks(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    const displayedCategories = activeTab === 'all'
        ? categories
        : categories.filter(c => bookmarks.includes(c.title));

    return (
        <div className="min-h-screen">
            {/* New Hero Section */}
            <HeroSection />

            {/* Soft Gradient Divider (Breathing Room) */}
            <div className="h-40 w-full bg-gradient-to-b from-white to-slate-50 dark:from-midnight dark:to-slate-950/50"></div>

            {/* Categories Section */}
            <section id="categories" className="py-24 relative bg-slate-50 dark:bg-midnight border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-heading font-medium text-slate-800 dark:text-slate-100">
                            Knowledge Hub
                        </h2>
                        <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
                            Pick a subject and start whenever you're ready.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'all'
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                                }`}
                        >
                            All Subjects
                        </button>
                        <button
                            onClick={() => setActiveTab('saved')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'saved'
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                                }`}
                        >
                            <Bookmark size={14} className={activeTab === 'saved' ? 'fill-white' : ''} />
                            Saved for Later
                        </button>
                    </div>

                    {displayedCategories.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                            {displayedCategories.map((cat, i) => (
                                <div key={i} className="relative group h-full">
                                    <GlassCard
                                        className="p-8 h-full flex flex-col rounded-[2.5rem] border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl bg-white dark:bg-slate-900 transition-all duration-300"
                                        hoverEffect={false}
                                    >
                                        <div className="absolute top-6 right-6 z-20">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    toggleBookmark(cat.title);
                                                }}
                                                className={`p-2 rounded-full transition-all duration-300 ${bookmarks.includes(cat.title)
                                                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                                                        : 'bg-transparent text-slate-300 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-500'
                                                    }`}
                                                title={bookmarks.includes(cat.title) ? "Remove Bookmark" : "Bookmark this"}
                                            >
                                                <Bookmark
                                                    size={20}
                                                    className={bookmarks.includes(cat.title) ? "fill-current" : ""}
                                                />
                                            </button>
                                        </div>

                                        <Link to={cat.path} className="block h-full flex flex-col pt-4">
                                            <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 w-fit group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                                                {cat.icon}
                                            </div>
                                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-8">
                                                {cat.title}
                                            </h3>
                                            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                                                {cat.desc}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50 dark:border-slate-800">
                                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full">
                                                    {cat.count} Items
                                                </span>
                                                <span className="text-slate-300 dark:text-slate-500 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    Browse →
                                                </span>
                                            </div>
                                        </Link>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Bookmark size={24} className="text-slate-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No bookmarks yet</h3>
                            <p className="text-slate-500">
                                Save subjects here to quickly find them later.
                            </p>
                            <button
                                onClick={() => setActiveTab('all')}
                                className="mt-6 text-blue-600 font-medium hover:underline"
                            >
                                Browse all subjects
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Smart Discovery (Curiosity) Section */}
            <SmartDiscovery />
        </div>
    );
};

export default Home;
