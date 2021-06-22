import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path='/' exact />
//         </Switch>
//       </Router>
//     </>
//   );
// }
class App extends React.Component {
  state = {
    firstName:'',
    age:'',
    email:''
  }

  render() {
    const {firstName,age,email} = this.state
    let emailInput;
    if(age >= 14) {
      emailInput = <input name={email}/>
    }
    
    return (
    <div>
     <input name={firstName}/>
     <input name={age}/>
     {emailInput}
    </div>
    )
  }
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
