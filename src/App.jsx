import './assets/css/reset.css'
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Library from './pages/Library';

const App = () => {
  return (
    <Router>
        <Routes>
            {/* <Route path="/" element={<Layout />}> */}

                <Route index element={ <Library />} />

            {/* </Route> */}
        </Routes>
    </Router>
  );
};

export default App;
