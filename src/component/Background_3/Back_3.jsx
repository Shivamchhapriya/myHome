// import React from 'react'
// import "./Back_3.css";
// function Back_3() {
//   return (
//       <div className="StartBox">
//             <div>
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <div className="row">
//                             <div className="col-sm-6 mb-4">
//                                 <div className='EndBox w-100 text-center pt-5 pb-5'>
//                                     <img className='mb-3' src='https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/wh-1.png?version=210'/>
//                                     <h2 className='mb-1 ms-animated'>21000+</h2>
//                                     <p className="m-0 p-0">Projects Completed</p>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6 mb-4">
//                                 <div className='EndBox w-100 text-center pt-5 pb-5'>
//                                     <img className='mb-3' src='	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/wh-2.png?version=210' />
//                                     <h2 className='mb-1 ms-animated'>1700+</h2>
//                                     <p className="m-0 p-0">Cities Coverd</p>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6 mb-4">
//                                 <div className='EndBox w-100 text-center pt-5 pb-5'>
//                                     <img className='mb-3' src='https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/wh-3.png?version=210'/>
//                                     <h2 className='mb-1 ms-animated'>60+</h2>
//                                     <p className="m-0 p-0">Partners Office in 60+ Cities</p>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6 mb-4">
//                                 <div className='EndBox w-100 text-center pt-5 pb-5'>
//                                     <img className='mb-3' src='https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/wh-4.png?version=210'/>
//                                     <h2 className='mb-1 ms-animated'>50000+</h2>
//                                     <p className="m-0 p-0">Facebook likes</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-sm-6 p-5">
//                        <h3 className='heading mb-2 text-start display-1'>Leading The Online Architectural & Home Design Revolution Since 2015.</h3>
//                        <p className='p-0 m-0 text-start'>As a brand, we strive to ensure that people fromevery strata of society find designingtheir house as easy as ordering a Pizza online!</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Back_3;


import React, { useState, useEffect } from 'react';

const images = [
  'https://www.makemyhouse.com/assets/ilpg/assets/lp/images/banner.jpg',
  'https://www.homelane.com/blog/wp-content/uploads/2022/11/single-floor-house-design.jpg',
  'https://i.ytimg.com/vi/XagcAGIW6_k/hqdefault.jpg',
  'https://stylesatlife.com/wp-content/uploads/2023/08/Old-Village-House-Design.jpg',
  'https://www.keralahouseplanner.com/wp-content/uploads/2015/07/house-below-20-lakhs.jpg',
];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
      />
    </div>
  );
};

export default App;

