import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import AllRoutes from './component/Routes/Routes';
import { useEffect, useState } from 'react';
import { BallTriangle, CirclesWithBar, FallingLines, RotatingLines, RotatingTriangles } from 'react-loader-spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [11]);

  return (
    
      <div className="row justify-content-center">
        <div className={loading ? 'col-12 text-center' : 'd-none ms-5'}>
        <RotatingTriangles
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="rotating-triangles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
        <div className={loading ? 'd-none' : 'col-12'}>
          <AllRoutes />
        </div>
      </div>
    
  );
}

export default App;
