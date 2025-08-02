import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ 
  image, 
  title, 
  description, 
  onClick, 
  link, 
  buttonText = 'View Resource',
  isClickable = true,
  external = false,
  className = '',
  ...props 
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        navigate(link);
      }
    }
  };

  const handleImageError = () => {
    setHasError(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const getAccessibilityLabel = () => {
    if (external) {
      return `Open ${title} in new tab`;
    }
    return `Navigate to ${title}`;
  };

  return (
    <div 
      ref={cardRef}
      className={`card ${isClickable ? 'card-clickable' : ''} ${className}`}
      onClick={isClickable ? handleClick : undefined}
      onKeyPress={isClickable ? handleKeyPress : undefined}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : undefined}
      aria-label={isClickable ? getAccessibilityLabel() : undefined}
      {...props}
    >
      <div className="card-image">
        {isImageLoaded && !hasError && (
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            onError={handleImageError}
          />
        )}
        {hasError && (
          <div className="card-image-placeholder">
            <span>📚</span>
          </div>
        )}
        {!isImageLoaded && !hasError && (
          <div className="card-image-skeleton">
            <div className="skeleton-loader"></div>
          </div>
        )}
        <div className="card-overlay"></div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        {isClickable && (
          <button className="card-button" onClick={!isClickable ? handleClick : undefined}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
