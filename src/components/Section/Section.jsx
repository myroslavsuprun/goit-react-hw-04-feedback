import React, { Component } from 'react';
import css from './Section.module.css';

class Section extends Component {
  static defaultProps = {
    title: '',
  };

  render() {
    const { title, children } = this.props;
    return (
      <div className={css.section}>
        {title ? <h2 className={css.section__title}>{title}</h2> : ''}
        {children}
      </div>
    );
  }
}

export default Section;
