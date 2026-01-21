import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Sun, Moon } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dark Mode Logic
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-midnight/80 backdrop-blur-md py-4 shadow-sm border-b border-surface-200 dark:border-slate-800' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        <BookOpen size={20} />
                    </div>
                    <span className="text-2xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                        ResourceDeck
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-300 dark:hover:text-blue-400'
                            }`}
                    >
                        Home
                    </Link>
                    <a
                        href="/#categories"
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                        onClick={(e) => {
                            // If we are on home page, scroll smoothly. Else, let Link behavior handle or standard anchor.
                            if (location.pathname === '/') {
                                e.preventDefault();
                                const el = document.getElementById('categories');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Library
                    </a>
                    <Link
                        to="/about"
                        className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname === '/about' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-300 dark:hover:text-blue-400'
                            }`}
                    >
                        About
                    </Link>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md">
                        Get Started
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-900 dark:text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-midnight border-b border-surface-200 dark:border-slate-800 p-6 animate-fade-in shadow-xl">
                    <div className="flex flex-col gap-4">
                        <Link
                            to="/"
                            className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <a
                            href="/#categories"
                            className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600"
                            onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    const el = document.getElementById('categories');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Library
                        </a>
                        <Link
                            to="/about"
                            className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                            <span className="text-slate-600 dark:text-slate-400">Appearance</span>
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
