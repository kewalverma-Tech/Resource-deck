import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`
        glass-card relative overflow-hidden
        ${hoverEffect ? 'hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : ''}
        ${className}
      `}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            {children}
        </motion.div>
    );
};

export default GlassCard;
