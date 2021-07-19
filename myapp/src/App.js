import logo from './logo.svg';
import './App.css';
import{CourseInfo} from "./components/CourseInfo"

function App() {
  return (
    
    <div className="App">
      <center>
      <h1>List Of Institutes</h1>
      <br></br>
      <table><tr>
    <td><CourseInfo courseName="PDAC" instituteName="PickupBiz" cityName="Pune" mobileNumber="123456789" /></td>
    <td><CourseInfo courseName="Networking" instituteName="Seed Infoteck" cityName="Nanded" mobileNumber="987654321" /></td>
    <td><CourseInfo courseName="DAC" instituteName="C-DAC" cityName="Hydrabad" mobileNumber="765849302" /></td>
    <td><CourseInfo courseName="DAC" instituteName="C-DAC" cityName="Hydrabad" mobileNumber="765849302" /></td>
    </tr>
    </table>
    <br></br>
    <br></br>
    <table><tr>
    <td><CourseInfo courseName="Civil Engg" instituteName="GECA" cityName="Aurangabad" mobileNumber="123456789" /></td>
    <td><CourseInfo courseName="Mech. Engg" instituteName="SGGS" cityName="Nanded" mobileNumber="987654321" /></td>
    <td><CourseInfo courseName="Computer Engg." instituteName="GPND" cityName="Nanded" mobileNumber="765849302" /></td>
    <td><CourseInfo courseName="Pharmasy" instituteName="MIT" cityName="Aurangabad" mobileNumber="765849302" /></td>
    </tr>
    </table>
    <br></br>
    <br></br>
    <table><tr>
    <td><CourseInfo courseName="Civil Engg" instituteName="GECA" cityName="Aurangabad" mobileNumber="123456789" /></td>
    <td><CourseInfo courseName="Mech. Engg" instituteName="SGGS" cityName="Nanded" mobileNumber="987654321" /></td>
    <td><CourseInfo courseName="Computer Engg." instituteName="GPND" cityName="Nanded" mobileNumber="765849302" /></td>
    <td><CourseInfo courseName="Pharmasy" instituteName="MIT" cityName="Aurangabad" mobileNumber="765849302" /></td>
    </tr>
    </table>
    </center>
    </div>
 );

  
}

export default App;
