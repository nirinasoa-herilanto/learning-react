import ConceptItem from './ConceptItem';
import './Concepts.css';
import React from 'react';

const Concepts = (props) => {
  return (
    <ul id="concepts">
      {props.data.map((item) => (
        <ConceptItem
          key={item.title}
          imageUrl={item.image}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default Concepts;
