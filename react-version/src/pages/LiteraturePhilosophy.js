import React from 'react';

const LiteraturePhilosophy = () => {
  const resources = [
    {
      category: "Literature Resources",
      items: [
        {
          title: "Project Gutenberg",
          description: "Over 70,000 free eBooks of classic literature and historical texts",
          url: "https://www.gutenberg.org/",
          type: "Library"
        },
        {
          title: "MLA International Bibliography",
          description: "Comprehensive database of literary criticism and scholarly articles",
          url: "https://www.mla.org/Publications/MLA-International-Bibliography",
          type: "Database"
        },
        {
          title: "JSTOR Literature Collection",
          description: "Academic articles, books, and primary sources in literature",
          url: "https://www.jstor.org/subjects/literature",
          type: "Academic"
        },
        {
          title: "Literary Reference Center",
          description: "Full-text literary works, biographies, and critical essays",
          url: "https://www.ebsco.com/products/research-databases/literary-reference-center",
          type: "Database"
        },
        {
          title: "Academy of American Poets",
          description: "Comprehensive poetry resources, poems, and poet biographies",
          url: "https://poets.org/",
          type: "Educational"
        },
        {
          title: "The Complete Works of William Shakespeare",
          description: "MIT's complete collection of Shakespeare's works online",
          url: "http://shakespeare.mit.edu/",
          type: "Archive"
        }
      ]
    },
    {
      category: "Philosophy Resources",
      items: [
        {
          title: "Stanford Encyclopedia of Philosophy",
          description: "Peer-reviewed encyclopedia of philosophy maintained by Stanford University",
          url: "https://plato.stanford.edu/",
          type: "Encyclopedia"
        },
        {
          title: "Internet Encyclopedia of Philosophy",
          description: "Scholarly encyclopedia covering major philosophers and philosophical topics",
          url: "https://iep.utm.edu/",
          type: "Encyclopedia"
        },
        {
          title: "PhilPapers",
          description: "Comprehensive index and bibliography of philosophy research",
          url: "https://philpapers.org/",
          type: "Database"
        },
        {
          title: "Philosophy Documentation Center",
          description: "Academic philosophy journals and conference proceedings",
          url: "https://www.pdcnet.org/",
          type: "Academic"
        },
        {
          title: "Early Modern Philosophy",
          description: "Texts and resources on 17th and 18th century philosophy",
          url: "https://www.earlymodern.net/",
          type: "Archive"
        },
        {
          title: "Philosophy Compass",
          description: "Peer-reviewed survey articles covering all areas of philosophy",
          url: "https://onlinelibrary.wiley.com/journal/17479991",
          type: "Journal"
        }
      ]
    },
    {
      category: "Books & Literature Collections",
      items: [
        {
          title: "Open Library",
          description: "Internet Archive's open library with millions of books to borrow and read",
          url: "https://openlibrary.org/",
          type: "Library"
        },
        {
          title: "Google Books",
          description: "Search and preview millions of books from libraries and publishers worldwide",
          url: "https://books.google.com/",
          type: "Library"
        },
        {
          title: "HathiTrust Digital Library",
          description: "Large-scale collaborative repository of academic and research library collections",
          url: "https://www.hathitrust.org/",
          type: "Archive"
        },
        {
          title: "Bartleby.com",
          description: "Classic literature, poetry, and reference works online",
          url: "https://www.bartleby.com/",
          type: "Archive"
        },
        {
          title: "Internet Archive Books",
          description: "Millions of free books, texts, and documents",
          url: "https://archive.org/details/books",
          type: "Archive"
        },
        {
          title: "LibriVox",
          description: "Free public domain audiobooks read by volunteers",
          url: "https://librivox.org/",
          type: "Audio"
        }
      ]
    },
    {
      category: "Stories & Creative Writing",
      items: [
        {
          title: "Short Story Library",
          description: "Collection of classic and contemporary short stories",
          url: "https://www.short-stories.co.uk/",
          type: "Library"
        },
        {
          title: "The New Yorker Fiction",
          description: "Award-winning short fiction and stories from The New Yorker",
          url: "https://www.newyorker.com/fiction",
          type: "Magazine"
        },
        {
          title: "Electric Literature",
          description: "Contemporary fiction, essays, and literary culture",
          url: "https://electricliterature.com/",
          type: "Magazine"
        },
        {
          title: "Narrative Magazine",
          description: "Stories, poems, and artwork from emerging and established writers",
          url: "https://www.narrativemagazine.com/",
          type: "Magazine"
        },
        {
          title: "Clarkesworld Magazine",
          description: "Science fiction and fantasy short stories and articles",
          url: "https://clarkesworldmagazine.com/",
          type: "Magazine"
        },
        {
          title: "Writer's Digest",
          description: "Writing tips, techniques, and resources for creative writers",
          url: "https://www.writersdigest.com/",
          type: "Educational"
        }
      ]
    },
    {
      category: "Technical Writing & Documentation",
      items: [
        {
          title: "Technical Writing Courses",
          description: "Google's technical writing courses and style guides",
          url: "https://developers.google.com/tech-writing",
          type: "Educational"
        },
        {
          title: "Microsoft Writing Style Guide",
          description: "Comprehensive guide for technical and business writing",
          url: "https://docs.microsoft.com/en-us/style-guide/welcome/",
          type: "Guide"
        },
        {
          title: "Society for Technical Communication",
          description: "Professional organization for technical communicators",
          url: "https://www.stc.org/",
          type: "Organization"
        },
        {
          title: "API Documentation Best Practices",
          description: "Resources and examples for writing effective API documentation",
          url: "https://stoplight.io/api-documentation-guide/",
          type: "Guide"
        },
        {
          title: "Confluence Documentation",
          description: "Atlassian's guide to creating technical documentation",
          url: "https://www.atlassian.com/software/confluence/resources/guides/get-started",
          type: "Guide"
        },
        {
          title: "ReadTheDocs",
          description: "Platform for hosting technical documentation with version control",
          url: "https://readthedocs.org/",
          type: "Platform"
        }
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>📖 Literature & Philosophy Resources</h1>
        <p>Comprehensive collection of literary works, philosophical texts, and critical theory resources</p>
      </div>

      <div className="resources-container">
        {resources.map((section, index) => (
          <div key={index} className="resource-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="resources-grid">
              {section.items.map((resource, resourceIndex) => (
                <div key={resourceIndex} className="resource-card">
                  <div className="resource-header">
                    <h3 className="resource-title">{resource.title}</h3>
                    <span className={`resource-type type-${resource.type.toLowerCase()}`}>
                      {resource.type}
                    </span>
                  </div>
                  <p className="resource-description">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    Access Resource →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-info">
        <div className="info-card">
          <h3>📚 Book Collections</h3>
          <p>Access to millions of books, audiobooks, and digitized literary collections from around the world.</p>
        </div>
        <div className="info-card">
          <h3>📖 Creative Stories</h3>
          <p>Contemporary fiction, short stories, and creative writing resources from top literary magazines.</p>
        </div>
        <div className="info-card">
          <h3>⚙️ Technical Writing</h3>
          <p>Professional guides, style manuals, and resources for technical documentation and communication.</p>
        </div>
      </div>
    </div>
  );
};

export default LiteraturePhilosophy;
