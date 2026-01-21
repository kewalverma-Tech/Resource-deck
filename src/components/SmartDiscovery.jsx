import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, Sparkles } from 'lucide-react';

const facts = [
    "Dolphins have names for each other! 🐬",
    "In Switzerland, it’s illegal to own just one guinea pig because they get lonely. 🐹",
    "Trees actually talk to each other through their roots. 🌳",
    "Ants never sleep! They work their whole lives without a nap. 🐜",
    "Cows have best friends and get stressed when they are apart. 🐮",
    "An octopus has 3 hearts and 9 brains! 🐙",
    "Butterflies taste things with their feet. 🦋",
    "Sea otters hold hands while sleeping so they don't float away. 🦦",
    "Ketchup was once sold as medicine! 🍅",
    "Elephants are the only animals that can't jump. 🐘",
    "The most liked photo on Instagram was once just a simple egg. 🥚",
    "Your nose and ears never stop growing throughout your life. 👂",
    "Snails can sleep for 3 years straight! (Study goals? 😴)",
    "A blue whale's tongue weighs as much as a whole elephant! 🐳",
    "Glasses were invented over 700 years ago. 👓",
    "A dog's nose print is as unique as a human fingerprint. 🐶",
    "Honeybees can understand the concept of zero. Smart! 🐝",
    "There are more chickens on Earth than humans. 🐔",
    "Pure gold is non-toxic and can actually be eaten (but it's expensive! 💰)",
    "Apples float in water because they are 25% air. 🍎"
];

const SmartDiscovery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [reaction, setReaction] = useState(null);

    const handleNewFact = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * facts.length);
        } while (newIndex === currentIndex);
        setCurrentIndex(newIndex);
        setReaction(null); // Reset reaction
    };

    const handleReaction = (emoji) => {
        setReaction(emoji);
        setTimeout(() => setReaction(null), 2000); // Reset after 2s
    };

    return (
        <section className="py-24 mt-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-[2.5rem] p-12 md:p-16 relative overflow-visible border border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-[80px] -z-10 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-[80px] -z-10 opacity-50"></div>

                        <div className="text-center space-y-8">
                            <div className="space-y-2">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-wider">
                                    <Sparkles size={16} /> Brain Snack
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white">
                                    Something cool you didn't know.
                                </h2>
                            </div>

                            <div className="min-h-[120px] flex items-center justify-center">
                                <AnimatePresence mode='wait'>
                                    <motion.p
                                        key={currentIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto"
                                    >
                                        "{facts[currentIndex]}"
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-col items-center gap-6">
                                <button
                                    onClick={handleNewFact}
                                    className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg"
                                >
                                    <RotateCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                                    Surprise me again
                                </button>

                                <div className="flex flex-wrap justify-center gap-4 relative">
                                    {['🤯 Mind Blown', '😂 No way!', '🤓 TIL', '🔥 Savage'].map((emoji, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleReaction(emoji.split(' ')[0])}
                                            className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all text-sm font-medium"
                                        >
                                            {emoji}
                                        </button>
                                    ))}

                                    {/* Floating Reaction Animation */}
                                    <AnimatePresence>
                                        {reaction && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, y: -100, scale: 1.5 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute left-1/2 -translate-x-1/2 -top-10 text-4xl pointer-events-none"
                                            >
                                                {reaction}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartDiscovery;
