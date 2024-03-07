

import React, { useState, useEffect } from 'react';

const FrontPage = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    {
      text: 'First content with the longest text to demonstrate the increased length of the text on the front page.',
      subText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
      duration: 5000 // Duration in milliseconds
    },
    {
      text: 'Second content with the longest text to demonstrate the increased length of the text on the front page.',
      subText: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
      duration: 5000
    },
    {
      text: 'Third content with the longest text to demonstrate the increased length of the text on the front page. ',
      subText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      duration: 5000
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, contents[contentIndex].duration);

    return () => clearInterval(interval);
  }, [contentIndex, contents]);

  const textColor = '#ffff'; // Example: Red color
  const subTextColor = 'dark';
  // const videoOpacity = 0.8; // Example: 50% black overlay

  return (
    <div style={{ position: 'relative' }}>
      <video autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
        <source src="./99.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 style={{ color: textColor }}>{contents[contentIndex].text}</h1>
        <p style={{ color: '#EEEDEB', fontSize: '18px' }}>{contents[contentIndex].subText}</p>
      </div>
    </div>
  );
};

export default FrontPage;
