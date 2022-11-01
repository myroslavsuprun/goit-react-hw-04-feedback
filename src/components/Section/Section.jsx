import React from 'react';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={css.section}>
      {title ? <h2 className={css.section__title}>{title}</h2> : ''}
      {children}
    </div>
  );
}

export default Section;
