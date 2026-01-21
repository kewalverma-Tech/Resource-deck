import React from 'react';
import PageHeader from '../components/PageHeader';
import ResourceGrid from '../components/ResourceGrid';
import AdditionalResources from '../components/AdditionalResources';
import { Book, Globe, PenTool } from 'lucide-react';

const PhysicsMathematics = () => {
    const mathematicsCards = [
        {
            title: 'Khan Academy',
            description: 'Free world-class education in mathematics from basic arithmetic to advanced calculus.',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.khanacademy.org/math',
            topics: ['Algebra & Geometry', 'Calculus Basics', 'Differential Equations']
        },
        {
            title: 'Wolfram Alpha',
            description: 'Computational intelligence for mathematical calculations and problem solving.',
            image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.wolframalpha.com',
            topics: ['Step-by-step Solutions', 'Integral Calculator', 'Plotting Functions']
        },
        {
            title: 'Brilliant',
            description: 'Interactive problem-solving platform for mathematics and science.',
            image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://brilliant.org',
            topics: ['Logic & Deduction', 'Number Theory', 'Applied Probability']
        },
        {
            title: 'MIT OpenCourseWare',
            description: 'Free MIT mathematics courses and lecture materials.',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://ocw.mit.edu/courses/mathematics/',
            topics: ['Linear Algebra', 'Multivariable Calculus', 'Real Analysis']
        }
    ];

    const physicsCards = [
        {
            title: 'The Physics Classroom',
            description: 'Comprehensive physics tutorials and interactive simulations.',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.physicsclassroom.com',
            topics: ['Newton\'s Laws', 'Work & Energy', 'Light & Optics']
        },
        {
            title: 'PhET Simulations',
            description: 'Interactive physics simulations from University of Colorado Boulder.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://phet.colorado.edu',
            topics: ['Circuit Construction', 'Gravity Orbits', 'Wave Interference']
        },
        {
            title: 'HyperPhysics',
            description: 'Extensive physics concepts exploration from Georgia State University.',
            image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html',
            topics: ['Quantum Physics', 'Relativity', 'Nuclear Physics']
        },
        {
            title: 'Feynman Lectures',
            description: 'Richard Feynman\'s famous physics lectures available online.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.feynmanlectures.caltech.edu',
            topics: ['Mechanics', 'Electomagnetism', 'Quantum Behaviour']
        }
    ];

    const additionalCategories = [
        {
            title: 'Academic Journals',
            icon: <Book size={20} />,
            items: [
                'Physical Review Letters',
                'Nature Physics',
                'Journal of Mathematical Physics',
                'American Mathematical Monthly'
            ]
        },
        {
            title: 'Research Databases',
            icon: <Globe size={20} />,
            items: [
                'arXiv.org - Physics preprints',
                'MathSciNet - Mathematics database',
                'Zentralblatt MATH',
                'Google Scholar'
            ]
        },
        {
            title: 'Mathematical Software',
            icon: <PenTool size={20} />,
            items: [
                'Mathematica',
                'MATLAB',
                'SageMath (free)',
                'GeoGebra'
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            <PageHeader
                title="Physics & Mathematics"
                description="Explore comprehensive resources for mathematics and physics learning, from basic concepts to advanced research materials."
            />

            <ResourceGrid title="Mathematics" resources={mathematicsCards} />
            <ResourceGrid title="Physics" resources={physicsCards} />

            <AdditionalResources categories={additionalCategories} />
        </div>
    );
};

export default PhysicsMathematics;
