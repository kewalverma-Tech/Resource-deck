import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">ResourceDeck</h3>
                        <p className="text-slate-500 leading-relaxed font-medium">
                            Empowering the next generation of scholars with curated, premium educational resources.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Computer Science</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Physics & Math</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Engineering</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-sm">
                    © {new Date().getFullYear()} ResourceDeck. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
