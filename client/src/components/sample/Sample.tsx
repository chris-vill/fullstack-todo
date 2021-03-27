import React from 'react';
import classes from './Sample.module.sass';

const Sample = ({ extClass = "" }) => {

  return (
    <div className={ `${ classes["sample"] } ${ extClass }` }>
      React App ft. Yeoman
    </div>
  );
}

export default Sample;
