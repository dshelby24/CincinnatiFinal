<<<<<<< HEAD
=======
//import './App.css';
import Contact from './Contact';
import About from './About';
>>>>>>> 3e618ef6597a75d4bc726921a9631f4d837f3eae
import React from 'react';
import './App.css';
import Contact from './contact.js';
import About from './About.js';
import './server';
<<<<<<< HEAD
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'; //Include Heder
import Footer from './footer'; //Include Footer
import Home from './home.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Viewattra from './viewattra';
=======
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer'; //Include Footer
>>>>>>> 09eaa418947258803eb911f48f3d937907112609
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './navbar'; //Include Heder
// import Footer from './footer'; //Include Footer
import Home from './home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Viewattra from './Viewattra';
import Burger from './components/Burger/Burger';
>>>>>>> 3e618ef6597a75d4bc726921a9631f4d837f3eae



class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
     <Router>
      {/* <Header/> */}
      <Burger/>
        <Route exact path='/about' component={About} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/Contact' component ={Contact} />

        <Route path='/attractions' component ={Viewattra} />
        
      {/* </div> */}

      <Footer/>

        </Router>

    </div>
   )
  };
}







export default App;