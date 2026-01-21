import React from 'react';
import PageHeader from '../components/PageHeader';
import ResourceGrid from '../components/ResourceGrid';
import AdditionalResources from '../components/AdditionalResources';
import { Book, Video, Monitor } from 'lucide-react';

const ComputerScience = () => {
    const programmingCards = [
        {
            title: 'GeeksforGeeks',
            description: 'Comprehensive programming tutorials, data structures, and algorithms.',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.geeksforgeeks.org/',
            topics: ['Data Structures', 'Algorithm Library', 'Interview Guide']
        },
        {
            title: 'LeetCode',
            description: 'Practice coding problems and prepare for technical interviews.',
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://leetcode.com/',
            topics: ['Daily Challenges', 'Top Interview 150', 'SQL Problems']
        },
        {
            title: 'HackerRank',
            description: 'Coding challenges and skill certification in multiple languages.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.hackerrank.com/',
            topics: ['Problem Solving', 'Skills Certification', 'Language Prep']
        },
        {
            title: 'Stack Overflow',
            description: 'The largest community for developers to learn and share knowledge.',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://stackoverflow.com/',
            topics: ['Bug Fixing', 'Technical Q&A', 'Community Support']
        }
    ];

    const webDevCards = [
        {
            title: 'MDN Web Docs',
            description: 'Mozilla\'s comprehensive web development documentation.',
            image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://developer.mozilla.org',
            topics: ['JavaScript API', 'CSS Reference', 'HTML Standards']
        },
        {
            title: 'freeCodeCamp',
            description: 'Free coding bootcamp with interactive lessons and projects.',
            image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.freecodecamp.org',
            topics: ['Frontend Cert', 'Backend Cert', 'Projects']
        },
        {
            title: 'React Documentation',
            description: 'Official React.js documentation and learning resources.',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://react.dev',
            topics: ['Components', 'Hooks', 'State Management']
        },
        {
            title: 'CSS-Tricks',
            description: 'Advanced CSS techniques, tips, and modern web design.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://css-tricks.com',
            topics: ['Flexbox Guide', 'Grid Guide', 'SVG Animations']
        }
    ];

    const aiMLCards = [
        {
            title: 'Coursera ML',
            description: 'Andrew Ng\'s famous Machine Learning course.',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.coursera.org/learn/machine-learning',
            topics: ['Supervised Learning', 'Neural Networks', 'Cost Functions']
        },
        {
            title: 'TensorFlow',
            description: 'Google\'s open-source machine learning platform.',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.tensorflow.org',
            topics: ['Deep Learning', 'Keras API', 'Model Deployment']
        },
        {
            title: 'PyTorch',
            description: 'Facebook\'s deep learning framework for research.',
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://pytorch.org',
            topics: ['Dynamic Graphs', 'TorchVision', 'Research']
        },
        {
            title: 'Kaggle',
            description: 'Data science competitions and datasets for machine learning.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            link: 'https://www.kaggle.com',
            topics: ['Competitions', 'Datasets', 'Notebooks']
        }
    ];

    const additionalCategories = [
        {
            title: 'Reference Books',
            icon: <Book size={20} />,
            items: [
                'Clean Code by Robert C. Martin',
                'Introduction to Algorithms (CLRS)',
                'Design Patterns by Gang of Four',
                'System Design Interview by Alex Xu'
            ]
        },
        {
            title: 'Online Courses',
            icon: <Video size={20} />,
            items: [
                'MIT 6.006 Introduction to Algorithms',
                'Stanford CS229 Machine Learning',
                'Berkeley CS61A Structure and Interpretation',
                'Harvard CS50 Introduction to Computer Science'
            ]
        },
        {
            title: 'Tools & Platforms',
            icon: <Monitor size={20} />,
            items: [
                'GitHub for version control',
                'Visual Studio Code',
                'Docker for containerization',
                'AWS for cloud computing'
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            <PageHeader
                title="Computer Science"
                description="Comprehensive collection of programming tutorials, algorithms, data structures, web development, and artificial intelligence resources."
            />

            <ResourceGrid title="Programming & Algorithms" resources={programmingCards} />
            <ResourceGrid title="Web Development" resources={webDevCards} />
            <ResourceGrid title="AI & Machine Learning" resources={aiMLCards} />

            <AdditionalResources categories={additionalCategories} />
        </div>
    );
};

export default ComputerScience;
