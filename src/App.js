import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import { createPopper } from "@popperjs/core";
import "jquery";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import AllRoutes from "./component/Routes/Routes";

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
