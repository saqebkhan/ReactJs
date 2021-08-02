import React from 'react';
import Aboutus from './Router/Aboutus';
import Contactus from './Router/Contactus';
// import HeaderComponent from './Component/A_HeaderSection/HeaderComponent';
// import BodySection from './Component/B_BodySection/BodySection';
// import EMIcalculator from './EMIcalculator';
// import Piano from './Piano';
// import {Row,Col, Card} from 'react-bootstrap'
// import AudioPlayer from './AudioPlayer';
// import {Idcard} from './Idcard'
// import { EmployeeList} from './IDCADS/EmployeeList' 
// import {Practice} from './IDCADS/Practice'
// import SectionArticle from './Component/SectionArticle'
import Navigationbar from './Router/Navigationbar'
import Products from './Router/Products';
import Home from './Router/Home';
import Services from './Router/Services';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

function App() {
  return (
<div className="App">
{/* <HeaderComponent/> 
<BodySection/> */}
{/* <EMIcalculator/>
<Row><Col md={4}><Card><h1>Low</h1><Piano/></Card></Col>
<Col md={4}><Card><h1>Medium</h1><Piano/></Card></Col>
<Col md={4}><Card><h1>High</h1><Piano/></Card></Col></Row>
<br/> */}
{/* <AudioPlayer/> */}
<Router>
<Navigationbar/>
<Switch>
<div>
  <Route path="/Home">
    <Home/>
    </Route>
  <Route path="/Aboutus">
<Aboutus/>
</Route>
<Route path="/Contactus">
<Contactus/>
</Route>
<Route path="/Products">
<Products/>
</Route>
<Route path="/Services">
<Services/>
</Route>

</div>
</Switch>
</Router>

{/* <Idcard/> */}
{/* <EmployeeList/> */}
{/* <Practice/> */}
{/* <SectionArticle/> */}

</div> 
  );
};
export default App; 


