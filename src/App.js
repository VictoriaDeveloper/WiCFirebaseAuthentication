import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import SignIn from "./page/SignIn"
import SignUp from "./page/SignUp"
import Home from "./page/Home"

function App() {

  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
               <Route path="/" element={<Home />} />
               <Route path="/signup" element={<SignUp/>}/>
               <Route path="/login" element={<SignIn/>}/>
               <Route path="*" element={<h2>Error 404: Page not found</h2>} />
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
