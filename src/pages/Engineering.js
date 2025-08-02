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
    },
    {
      title: 'Engineering Toolbox',
      description: 'Comprehensive resource for mechanical engineering calculations and data.',
      url: 'https://www.engineeringtoolbox.com/'
    },
    {
      title: 'ANSYS Learning Hub',
      description: 'Free simulation software tutorials for mechanical analysis.',
      url: 'https://www.ansys.com/academic/learning-resources'
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
    },
    {
      title: 'CircuitLab',
      description: 'Online circuit simulator and schematic editor.',
      url: 'https://www.circuitlab.com/'
    },
    {
      title: 'Khan Academy - Electrical Engineering',
      description: 'Free courses on circuits, electronics, and electrical principles.',
      url: 'https://www.khanacademy.org/science/electrical-engineering'
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
    },
    {
      title: 'Bridge Design Manual',
      description: 'Comprehensive guide to bridge engineering and design.',
      url: 'https://www.fhwa.dot.gov/bridge/lrfd/'
    },
    {
      title: 'Geotechnical Engineering',
      description: 'Soil mechanics and foundation engineering resources.',
      url: 'https://www.geoengineer.org/'
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
    },
    {
      title: 'VHDL Tutorial',
      description: 'Learn hardware description language for digital design.',
      url: 'https://www.nandland.com/vhdl/tutorials/tutorial-introduction-to-vhdl.html'
    },
    {
      title: 'FPGA Development',
      description: 'Field-Programmable Gate Array design and programming.',
      url: 'https://www.intel.com/content/www/us/en/programmable/support/training/overview.html'
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
    },
    {
      title: 'ChemE Car Competition',
      description: 'Student design competition for chemical engineering students.',
      url: 'https://www.aiche.org/community/students/chem-e-car-competition'
    },
    {
      title: 'Process Design Fundamentals',
      description: 'Chemical process design principles and methodologies.',
      url: 'https://ocw.mit.edu/courses/10-492-integrated-chemical-engineering-topics-i-process-control-by-design-fall-2004/'
    }
  ];

  const aerospaceResources = [
    {
      title: 'NASA Educational Resources',
      description: 'Free aerospace engineering courses and materials from NASA.',
      url: 'https://www.nasa.gov/audience/foreducators/postsecondary/features/F_Aerospace_Engineering.html'
    },
    {
      title: 'Introduction to Aerospace Engineering',
      description: 'MIT OpenCourseWare aerospace fundamentals.',
      url: 'https://ocw.mit.edu/courses/16-00-introduction-to-aerospace-engineering-and-design-spring-2003/'
    },
    {
      title: 'AIAA Student Resources',
      description: 'American Institute of Aeronautics and Astronautics materials.',
      url: 'https://www.aiaa.org/secondary.aspx?id=2147'
    },
    {
      title: 'Aircraft Design Online',
      description: 'Comprehensive guide to aircraft design principles.',
      url: 'https://www.aircraftdesign.com/'
    },
    {
      title: 'Rocket Propulsion Elements',
      description: 'Fundamentals of rocket and spacecraft propulsion.',
      url: 'https://www.wiley.com/en-us/Rocket+Propulsion+Elements%2C+9th+Edition-p-9781118753668'
    },
    {
      title: 'CFD Online',
      description: 'Computational fluid dynamics resources for aerospace applications.',
      url: 'https://www.cfd-online.com/'
    }
  ];

  const industrialResources = [
    {
      title: 'Lean Manufacturing Principles',
      description: 'Guide to lean production and waste elimination.',
      url: 'https://www.lean.org/whatslean/'
    },
    {
      title: 'Six Sigma Resources',
      description: 'Quality improvement methodologies and tools.',
      url: 'https://www.isixsigma.com/'
    },
    {
      title: 'Operations Research',
      description: 'Mathematical optimization and decision analysis.',
      url: 'https://www.informs.org/Explore/Operations-Research-Analytics'
    },
    {
      title: 'Supply Chain Management',
      description: 'Modern supply chain design and optimization.',
      url: 'https://www.apics.org/apics-for-individuals/apics-magazine-home'
    },
    {
      title: 'Ergonomics and Human Factors',
      description: 'Workplace design for safety and efficiency.',
      url: 'https://www.hfes.org/web/Default.aspx'
    },
    {
      title: 'Production Planning Systems',
      description: 'Manufacturing resource planning and scheduling.',
      url: 'https://ocw.mit.edu/courses/15-760b-operations-management-spring-2004/'
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
    <div className="engineering-page">
      <Section title="Engineering Resources">
        <p className="section-description">
          Comprehensive resources for engineering students across all major disciplines. 
          From fundamental principles to advanced applications, find the tools you need 
          to excel in your engineering studies and future career.
        </p>
      </Section>

      <Section title="Mechanical Engineering" cards={mechanicalResources.map(resource => ({
        id: resource.title,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: resource.title,
        description: resource.description,
        isClickable: true,
        external: true,
        onClick: () => window.open(resource.url, '_blank')
      }))} />

      <Section title="Electrical Engineering" cards={electricalResources.map(resource => ({
        id: resource.title,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: resource.title,
        description: resource.description,
        isClickable: true,
        external: true,
        onClick: () => window.open(resource.url, '_blank')
      }))} />

      <Section title="Civil Engineering" cards={civilResources.map(resource => ({
        id: resource.title,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: resource.title,
        description: resource.description,
        isClickable: true,
        external: true,
        onClick: () => window.open(resource.url, '_blank')
      }))} />

      <Section title="Computer Engineering" cards={computerEngineeringResources.map(resource => ({
        id: resource.title,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: resource.title,
        description: resource.description,
        isClickable: true,
        external: true,
        onClick: () => window.open(resource.url, '_blank')
      }))} />

      <Section title="Chemical Engineering" cards={chemicalResources.map(resource => ({
        id: resource.title,
        image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: resource.title,
        description: resource.description,
        isClickable: true,
        external: true,
        onClick: () => window.open(resource.url, '_blank')
      }))} />

      <Section title="Aerospace Engineering" cards={aerospaceResources.map(resource => ({
        id: resource.title,
        image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: resource.title,
        description: resource.description,
        isClickable: true,
        external: true,
        onClick: () => window.open(resource.url, '_blank')
      }))} />

      <Section title="Industrial Engineering" cards={industrialResources.map(resource => ({
        id: resource.title,
        image: 'https://images.unsplash.com/photo-1565008447742-97d5ac26469e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: resource.title,
        description: resource.description,
        isClickable: true,
        external: true,
        onClick: () => window.open(resource.url, '_blank')
      }))} />

      <Section title="Professional Development" cards={generalResources.map(resource => ({
        id: resource.title,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        title: resource.title,
        description: resource.description,
        isClickable: true,
        external: true,
        onClick: () => window.open(resource.url, '_blank')
      }))} />
    </div>
  );
};

export default Engineering;
