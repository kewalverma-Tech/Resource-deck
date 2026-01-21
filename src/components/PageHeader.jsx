import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, description }) => {
    return (
        <section className="relative py-24 overflow-hidden bg-surface-50 border-b border-surface-200">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] -z-10 opacity-50"></div>

            <div className="container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900"
                >
                    <span className="text-gradient">{title}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    {description}
                </motion.p>
            </div>
        </section>
    );
};

export default PageHeader;
