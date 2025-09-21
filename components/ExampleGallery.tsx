/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */
import React, { useState } from 'react';
import { categories, Subject } from '@/lib/subjects';

interface SubjectGalleryProps {
  favorites: string[];
  onSubjectClick: (title: string) => void;
  onToggleFavorite: (title: string) => void;
}

const SubjectCard = ({
  subject,
  isFavorite,
  onSubjectClick,
  onToggleFavorite,
}: {
  subject: Subject;
  isFavorite: boolean;
  onSubjectClick: (title: string) => void;
  onToggleFavorite: (title: string) => void;
}) => (
  <div
    key={subject.title}
    className="gallery-item"
    onClick={() => onSubjectClick(subject.title)}>
    <button
      className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
      onClick={(e) => {
        e.stopPropagation(); // Prevent card click when favoriting
        onToggleFavorite(subject.title);
      }}
      aria-label={`Favorite ${subject.title}`}>
      {isFavorite ? '★' : '☆'}
    </button>
    <div className="thumbnail-container">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={subject.imageUrl}
        alt={subject.title}
        className="thumbnail"
      />
    </div>
    <div className="gallery-item-title">{subject.title}</div>
  </div>
);

export default function SubjectGallery({
  favorites,
  onSubjectClick,
  onToggleFavorite,
}: SubjectGalleryProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const handleToggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryTitle)
        ? prev.filter(title => title !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  return (
    <div className="example-gallery">
      {categories.map((category) => {
        const isExpanded = expandedCategories.includes(category.categoryTitle);
        return (
          <div key={category.categoryTitle} className="category-section">
            <div className="category-header" onClick={() => handleToggleCategory(category.categoryTitle)}>
              <h3 className="category-title">{category.categoryTitle}</h3>
              <button
                className="expand-button"
                aria-expanded={isExpanded}
                aria-label={isExpanded ? `Collapse ${category.categoryTitle}` : `Expand ${category.categoryTitle}`}
              >
                <span className="material-symbols-outlined">
                  {isExpanded ? 'expand_less' : 'expand_more'}
                </span>
              </button>
            </div>
            {isExpanded && (
              <div className="gallery-grid">
                {category.subjects.map((subject) => (
                  <SubjectCard
                    key={subject.title}
                    subject={subject}
                    isFavorite={favorites.includes(subject.title)}
                    onSubjectClick={onSubjectClick}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}

      <style>{`
        .example-gallery {
          width: 100%;
        }

        .category-section {
          width: 100%;
          margin-bottom: 2.5rem; /* Space between categories */
        }
        
        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
          transition: border-color 0.2s;
        }

        .category-header:hover {
            border-bottom-color: var(--color-primary-hover);
        }

        .category-header:hover .category-title {
          color: var(--color-primary-hover);
        }

        .category-title {
          color: var(--color-primary);
          font-size: 1.75rem;
          text-align: left;
          margin: 0;
          transition: color 0.2s;
        }

        .expand-button {
          background-color: transparent;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
        }
        
        .expand-button .material-symbols-outlined {
          font-size: 2.5rem;
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}