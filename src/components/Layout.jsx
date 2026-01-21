import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-midnight text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 transition-colors duration-300">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
