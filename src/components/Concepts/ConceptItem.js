import './ConceptItem.css';
import React from 'react';

const ConceptItem = (props) => {
  return (
    <li className="concept">
      <img src={props.imageUrl} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
};

export default ConceptItem;
