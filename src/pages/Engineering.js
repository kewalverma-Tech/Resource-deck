import React from 'react';
import Card from '../components/Card';
import Section from '../components/Section';

const Engineering = () => {
  const mechanicalResources = [
    {
      title: 'MIT OpenCourseWare - Mechanical Engineering',
      description: 'Free courses on mechanics, thermodynamics, fluid mechanics, and design.',
      url: 'https://ocw.mit.edu/courses/mechanical-engineering/'
    },
    {
      title: 'Fundamentals of Fluid Mechanics',
      description: 'Comprehensive textbook on fluid mechanics principles and applications.',
      url: 'https://www.wiley.com/en-us/Munson%27s+Fluid+Mechanics%2C+8th+Edition-p-9781119080701'
    },
    {
      title: 'SolidWorks Tutorials',
      description: 'Learn 3D CAD design and engineering simulation software.',
      url: 'https://www.solidworks.com/sw/support/self-paced-learning.htm'
    },
    {
      title: 'ASME Standards',
      description: 'Professional engineering standards and codes for mechanical engineers.',
      url: 'https://www.asme.org/codes-standards'
    }
  ];

  const electricalResources = [
    {
      title: 'All About Circuits',
      description: 'Free online electrical engineering textbooks and tutorials.',
      url: 'https://www.allaboutcircuits.com/'
    },
    {
      title: 'MIT Circuit Analysis',
      description: 'Introduction to electrical engineering and computer science.',
      url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/'
    },
    {
      title: 'IEEE Xplore Digital Library',
      description: 'Research papers and standards in electrical and electronics engineering.',
      url: 'https://ieeexplore.ieee.org/'
    },
    {
      title: 'Electronics Tutorials',
      description: 'Comprehensive tutorials on electronics and electrical circuits.',
      url: 'https://www.electronics-tutorials.ws/'
    }
  ];

  const civilResources = [
    {
      title: 'Structural Engineering Basics',
      description: 'Introduction to structural analysis and design principles.',
      url: 'https://www.structuralbasics.com/'
    },
    {
      title: 'ASCE Library',
      description: 'American Society of Civil Engineers technical resources.',
      url: 'https://ascelibrary.org/'
    },
    {
      title: 'AutoCAD Learning Center',
      description: 'Learn technical drawing and design software for civil engineering.',
      url: 'https://www.autodesk.com/education/edu-software/overview'
    },
    {
      title: 'Concrete Design Handbook',
      description: 'Guide to reinforced concrete design and construction.',
      url: 'https://www.cement.org/learn/concrete-technology'
    }
  ];

  const computerEngineeringResources = [
    {
      title: 'Computer Organization and Design',
      description: 'Patterson & Hennessy - The hardware/software interface.',
      url: 'https://www.amazon.com/Computer-Organization-Design-MIPS-Architecture/dp/0124077269'
    },
    {
      title: 'Digital Design and Computer Architecture',
      description: 'ARM edition covering digital logic and computer architecture.',
      url: 'https://www.amazon.com/Digital-Design-Computer-Architecture-Harris/dp/0128000562'
    },
    {
      title: 'ARM Developer Documentation',
      description: 'Official documentation for ARM processors and architectures.',
      url: 'https://developer.arm.com/documentation'
    },
    {
      title: 'Embedded Systems Programming',
      description: 'Resources for embedded software and hardware development.',
      url: 'https://www.embedded.com/'
    }
  ];

  const chemicalResources = [
    {
      title: 'AIChE - Chemical Engineering Resources',
      description: 'American Institute of Chemical Engineers educational materials.',
      url: 'https://www.aiche.org/resources/publications'
    },
    {
      title: 'Perry\'s Chemical Engineers\' Handbook',
      description: 'The definitive reference for chemical engineering principles.',
      url: 'https://www.accessengineeringlibrary.com/content/book/9780071834087'
    },
    {
      title: 'COMSOL Multiphysics',
      description: 'Simulation software for chemical engineering processes.',
      url: 'https://www.comsol.com/chemical-engineering-module'
    },
    {
      title: 'Process Safety Management',
      description: 'Guidelines for safe chemical process design and operation.',
      url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.119'
    }
  ];

  const generalResources = [
    {
      title: 'Engineering Ethics Case Studies',
      description: 'Real-world ethical dilemmas in engineering practice.',
      url: 'https://www.nspe.org/resources/ethics/code-ethics'
    },
    {
      title: 'Project Management for Engineers',
      description: 'Essential project management skills for engineering projects.',
      url: 'https://www.pmi.org/learning/library/project-management-engineers-6118'
    },
    {
      title: 'Engineering Communication',
      description: 'Technical writing and presentation skills for engineers.',
      url: 'https://ocw.mit.edu/courses/21w-732-1-introduction-to-technical-communication-for-engineers-fall-2006/'
    },
    {
      title: 'Professional Engineering Licensure',
      description: 'Guide to becoming a licensed Professional Engineer (PE).',
      url: 'https://ncees.org/engineering/'
    }
  ];

  return (
    <div>
      <Section title="Engineering Resources">
        <p className="section-description">
          Comprehensive resources for engineering students across all major disciplines. 
          From fundamental principles to advanced applications, find the tools you need 
          to excel in your engineering studies and future career.
        </p>
      </Section>

      <Section title="Mechanical Engineering">
        <div className="cards-grid">
          {mechanicalResources.map((resource, index) => (
            <Card 
              key={index}
              title={resource.title}
              description={resource.description}
              buttonText="Access Resource"
              onClick={() => window.open(resource.url, '_blank')}
            />
          ))}
        </div>
      </Section>

      <Section title="Electrical Engineering">
        <div className="cards-grid">
          {electricalResources.map((resource, index) => (
            <Card 
              key={index}
              title={resource.title}
              description={resource.description}
              buttonText="Access Resource"
              onClick={() => window.open(resource.url, '_blank')}
            />
          ))}
        </div>
      </Section>

      <Section title="Civil Engineering">
        <div className="cards-grid">
          {civilResources.map((resource, index) => (
            <Card 
              key={index}
              title={resource.title}
              description={resource.description}
              buttonText="Access Resource"
              onClick={() => window.open(resource.url, '_blank')}
            />
          ))}
        </div>
      </Section>

      <Section title="Computer Engineering">
        <div className="cards-grid">
          {computerEngineeringResources.map((resource, index) => (
            <Card 
              key={index}
              title={resource.title}
              description={resource.description}
              buttonText="Access Resource"
              onClick={() => window.open(resource.url, '_blank')}
            />
          ))}
        </div>
      </Section>

      <Section title="Chemical Engineering">
        <div className="cards-grid">
          {chemicalResources.map((resource, index) => (
            <Card 
              key={index}
              title={resource.title}
              description={resource.description}
              buttonText="Access Resource"
              onClick={() => window.open(resource.url, '_blank')}
            />
          ))}
        </div>
      </Section>

      <Section title="Professional Development">
        <div className="cards-grid">
          {generalResources.map((resource, index) => (
            <Card 
              key={index}
              title={resource.title}
              description={resource.description}
              buttonText="Access Resource"
              onClick={() => window.open(resource.url, '_blank')}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Engineering;
