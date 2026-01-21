import React from 'react';
import PageHeader from '../components/PageHeader';
import ResourceGrid from '../components/ResourceGrid';
import AdditionalResources from '../components/AdditionalResources';
import { Cpu, Settings, Ruler, Book, PenTool, Globe } from 'lucide-react';

const Engineering = () => {
    const electricalCards = [
        {
            title: 'All About Circuits',
            description: 'A comprehensive community and resource for electrical engineering education.',
            image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.allaboutcircuits.com/',
            topics: ['Circuit Theory', 'Microcontrollers', 'PCB Design']
        },
        {
            title: 'IEEE Xplore',
            description: 'Massive library of technical literature in electrical engineering and computer science.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://ieeexplore.ieee.org/',
            topics: ['Research Papers', 'Standards', 'Conferences']
        },
        {
            title: 'EEWeb',
            description: 'Electrical engineering community with tools, forums, and articles.',
            image: 'https://images.unsplash.com/photo-1555664424-778a696335b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.eeweb.com/',
            topics: ['Power Electronics', 'Embeded Systems', 'Toolbox']
        },
        {
            title: 'SparkFun',
            description: 'Electronics tutorials, product guides, and massive open source community.',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://learn.sparkfun.com/',
            topics: ['Arduino Guide', 'Sensors', 'DIY Projects']
        }
    ];

    const mechanicalCards = [
        {
            title: 'MatWeb',
            description: 'Online materials information resource with properties data for thousands of materials.',
            image: 'https://images.unsplash.com/photo-1537462713205-e5126e841943?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'http://www.matweb.com/',
            topics: ['Material Props', 'Polymers', 'Metals & Alloys']
        },
        {
            title: 'GrabCAD',
            description: 'Community of mechanical engineers sharing CAD models and design challenges.',
            image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://grabcad.com/',
            topics: ['3D Models', 'CAD Library', 'Rendering']
        },
        {
            title: 'ASME',
            description: 'American Society of Mechanical Engineers - standards, conferences, and publications.',
            image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.asme.org/',
            topics: ['Codes & Standards', 'Certification', 'Learning']
        },
        {
            title: 'Engineering Toolbox',
            description: 'Resources, tools, and basic information for engineering and design.',
            image: 'https://images.unsplash.com/photo-1581093588402-4857463f2115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.engineeringtoolbox.com/',
            topics: ['Unit Converter', 'Mechanics', 'Thermodynamics']
        }
    ];

    const civilCards = [
        {
            title: 'ASCE',
            description: 'American Society of Civil Engineers - leading source for standards and codes.',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.asce.org/',
            topics: ['Civil Standards', 'Infrastructure', 'Sustainability']
        },
        {
            title: 'Structville',
            description: 'Insights and resources on structural engineering and civil construction.',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://structville.com/',
            topics: ['Structural Analysis', 'Concrete Design', 'Geotech']
        },
        {
            title: 'ICE Virtual Library',
            description: 'Institution of Civil Engineers digital library.',
            image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.icevirtuallibrary.com/',
            topics: ['Journals', 'Case Studies', 'Best Practices']
        },
        {
            title: 'Civil Eng Dictionary',
            description: 'Interactive dictionary illustrating civil engineering terms and concepts.',
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.aboutcivil.org/',
            topics: ['Terminology', 'Construction', 'Surveying']
        }
    ];

    const additionalCategories = [
        {
            title: 'Design Software',
            icon: <PenTool size={20} />,
            items: [
                'AutoCAD & SolidWorks',
                'MATLAB & Simulink',
                'Altium Designer',
                'Revit Architecture'
            ]
        },
        {
            title: 'Core Subjects',
            icon: <Book size={20} />,
            items: [
                'Thermodynamics & Heat Transfer',
                'Circuit Theory & Electronics',
                'Fluid Mechanics',
                'Structural Analysis'
            ]
        },
        {
            title: 'Online Labs',
            icon: <Globe size={20} />,
            items: [
                'TinkerCAD (Circuits)',
                'Falstad Circuit Simulator',
                'Autodesk Viewer',
                'SimScale'
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            <PageHeader
                title="Engineering"
                description="Essential resources for Electrical, Mechanical, and Civil Engineering disciplines, from design tools to technical standards."
            />

            <ResourceGrid title="Electrical & Electronics" resources={electricalCards} />
            <ResourceGrid title="Mechanical & Design" resources={mechanicalCards} />
            <ResourceGrid title="Civil & Structural" resources={civilCards} />

            <AdditionalResources categories={additionalCategories} />
        </div>
    );
};

export default Engineering;
