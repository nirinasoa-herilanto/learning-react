import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput Running');
  return <MyParagraph>{props.show ? 'This is a paragraphs' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
