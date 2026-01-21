import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="About ResourceDeck"
                description="Empowering the next generation of scholars with curated, premium educational resources."
            />

            <div className="container mx-auto px-6 py-12">
                <div className="max-w-3xl mx-auto space-y-8 text-lg text-slate-600 leading-relaxed">
                    <p>
                        ResourceDeck is a premium educational resource hub designed to help students and professionals
                        master complex subjects in Computer Science, Physics, Mathematics, and Engineering.
                    </p>
                    <p>
                        Our mission is to democratize access to high-quality learning materials by organizing
                        the best resources from across the web into a structured, easy-to-navigate platform.
                    </p>

                    <div className="pt-8">
                        <Link to="/">
                            <Button variant="primary">Explore Library</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
