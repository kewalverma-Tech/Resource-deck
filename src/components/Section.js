import React from 'react';
import Card from './Card';

const Section = ({ 
  id, 
  title, 
  cards = [], 
  className = '',
  children,
  ...props 
}) => {
  return (
    <section id={id} className={`section ${className}`} {...props}>
      <div className="section__container">
        <h2 className="section__title">{title}</h2>
        
        {cards.length > 0 && (
          <div className="cards-container">
            {cards.map((card, index) => (
              <Card 
                key={card.id || index}
                {...card}
              />
            ))}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default Section;
