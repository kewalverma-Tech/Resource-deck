import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0",
        secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
        outline: "border-2 border-blue-100 text-blue-600 hover:border-blue-600 hover:bg-blue-50"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
