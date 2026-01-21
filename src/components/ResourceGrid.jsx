import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import { Eye, Bookmark } from 'lucide-react';

const ResourceGrid = ({ title, resources }) => {
    const [activeResource, setActiveResource] = useState(null);
    const [bookmarks, setBookmarks] = useState(() => {
        const saved = localStorage.getItem('resource_bookmarks');
        return saved ? JSON.parse(saved) : [];
    });
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        localStorage.setItem('resource_bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const toggleBookmark = (resourceTitle) => {
        setBookmarks(prev =>
            prev.includes(resourceTitle)
                ? prev.filter(t => t !== resourceTitle)
                : [...prev, resourceTitle]
        );
    };

    const displayedResources = activeTab === 'all'
        ? resources
        : resources.filter(r => bookmarks.includes(r.title));

    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                    <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white border-l-4 border-blue-500 pl-4">
                        {title}
                    </h2>

                    {/* Tabs */}
                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full w-fit">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'all'
                                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                }`}
                        >
                            All Resources
                        </button>
                        <button
                            onClick={() => setActiveTab('saved')}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'saved'
                                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                }`}
                        >
                            <Bookmark size={14} className={activeTab === 'saved' ? 'fill-current' : ''} />
                            Saved
                        </button>
                    </div>
                </div>

                {displayedResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayedResources.map((resource, i) => (
                            <div key={i} className="block h-full group relative">
                                <GlassCard className="h-full p-0 flex flex-col group-hover:border-blue-500/40 transition-colors bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                                    <div className="h-40 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/0 transition-colors z-10 pointer-events-none"></div>
                                        <img
                                            src={resource.image}
                                            alt={resource.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Bookmark Button (Top Left) */}
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                toggleBookmark(resource.title);
                                            }}
                                            className={`absolute top-3 left-3 z-30 p-2 rounded-full backdrop-blur-sm transition-all shadow-sm ${bookmarks.includes(resource.title)
                                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                    : 'bg-white/90 text-slate-400 hover:text-blue-600 hover:scale-110'
                                                }`}
                                            title={bookmarks.includes(resource.title) ? "Remove Bookmark" : "Bookmark this"}
                                        >
                                            <Bookmark size={18} className={bookmarks.includes(resource.title) ? "fill-current" : ""} />
                                        </button>

                                        {/* Quick Glance Button (Top Right) */}
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setActiveResource(activeResource === i ? null : i);
                                            }}
                                            className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white/90 backdrop-blur-sm text-slate-600 hover:text-blue-600 hover:scale-110 transition-all shadow-sm"
                                            title="Quick Glance"
                                        >
                                            <Eye size={18} />
                                        </button>

                                        {/* Quick Summary Overlay */}
                                        {activeResource === i && (
                                            <div className="absolute inset-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 flex flex-col justify-center animate-fade-in">
                                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contains:</h4>
                                                <ul className="space-y-2">
                                                    {resource.topics ? resource.topics.map((topic, idx) => (
                                                        <li key={idx} className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                            {topic}
                                                        </li>
                                                    )) : (
                                                        <li className="text-sm text-slate-500 italic">Topics coming soon...</li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5 flex-grow flex flex-col">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                                                {resource.title}
                                            </a>
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                                            {resource.description}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-slate-400">
                                            <span>Resource</span>
                                            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="group-hover:translate-x-1 transition-transform text-blue-600 dark:text-blue-400 flex items-center gap-1">
                                                Visit ↗
                                            </a>
                                        </div>
                                    </div>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
                        <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                            <Bookmark size={20} className="text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">No saved resources</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            Mark resources as saved to find them here easily.
                        </p>
                        <button
                            onClick={() => setActiveTab('all')}
                            className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                        >
                            View all resources
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResourceGrid;
