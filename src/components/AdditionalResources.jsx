import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AdditionalResources = ({ title = "Additional Resources", categories }) => {
    return (
        <section className="py-16 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-10 text-center">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, i) => (
                        <div key={i} className="space-y-4 p-6 rounded-2xl bg-surface-50 border border-surface-200">
                            <h3 className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                                {category.icon}
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm group">
                                        <CheckCircle2 size={16} className="text-slate-400 mt-0.5 group-hover:text-blue-500 transition-colors" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdditionalResources;
