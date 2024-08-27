import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./component/HomePage";
import CustLoginRegister from "./component/login/CustLoginRegister";
import EmployeeLogin from "./component/login/EmployeeLogin";
import NavOther from "./component/NavOther"
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Packages from "./component/Packages";
import CustomerWelcome from "./component/Customer/CustomerWelcome";
import BookEvent from "./component/Customer/BookEvent";
import EditEvent from "./component/Customer/EditEvent";
import EmployeeRegister from "./component/login/EmployeeRegister";
import SelectVenue from "./component/Employee/SelectVenue";
import SelectCaterer from "./component/Employee/SelectCaterer";
import SelectMedia from "./component/Customer/SelectMedia";
import SelectMenu from "./component/Customer/SelectMenu";
import ViewEvent from "./component/Customer/ViewEvent";
import EmployeeWelcome from "./component/Employee/EmployeeWelcome";

import ViewEventUpdate from "./component/Customer/viewEventUpdate"
// import ViewEventUpdate from "./component/Customer/viewEventUpdate";
import EditEventUp from "./component/Customer/EditEvent";
import ManagerWelcome from './component/Employee/ManagerWelcome';
import ViewEventManager from "./component/Employee/viewEventManager";
// import ViewEventManager from './component/Employee/viewEventManager';
import ViewEmployee from './component/Employee/ViewEmployee';
import AvailbleServices from './component/Employee/AvailableServices';
import SelectStudio from './component/Employee/SelectStudio';
import AssignCaterer from './component/Employee/AssignCaterer';
import AssignStudio from './component/Employee/AssignStudio';
import AssignEmployee from './component/Employee/AssignEmployee';
import ViewAssignEmployee from './component/Employee/ViewAssignEmployee';
import AssignTask from './component/Employee/AssignTask';
import { ProtectedRoute } from './component/common/ProtectedRoute';
import PageNotFound from './component/common/PageNotFound';
import NavSignOut from './component/login/NavSignOut';
import ForgotPassword from './component/login/ForgotPassword';
import AddMenu from './component/Employee/AddMenu';
import AddVenue from './component/Employee/AddVenue';
import AddStudio from './component/Employee/AddStudio';
import AddCaters from './component/Employee/AddCaters';
import AdminWelcome from "./component/Employee/AdminWelcome";
import BookingSuccessful from './component/Customer/BookingSuccessful';
import ViewCustomer from './component/Employee/ViewCustomer';
import ViewProfile from './component/login/ViewProfile';


function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route  exact path="/">
            <HomePage />
            <Services />
            <Packages />
            <About />
            <Contact />
          </Route>
          <Route exact path="/profile">
            <NavSignOut />
            <ViewProfile />
          </Route>
          
          <Route exact path="/services">
            <NavOther />
            <Services />
          </Route>
          <Route exact path="/packages">
            <NavOther />
            <Packages />
          </Route>
          <Route exact path="/about">
            <NavOther />
            <About />
          </Route>
          <Route exact path="/contact">
            <NavOther />
            <Contact />
          </Route>

          <Route exact path="/customer">
          <NavOther />
            <CustLoginRegister/>
          </Route>
          <Route exact path="/forgotpassword">
          <NavOther />
            <ForgotPassword/>
          </Route>
          
          {/* <Route exact path="/customer/welcome">
            <NavSignOut />
            <CustomerWelcome />
          </Route> */}

          <ProtectedRoute exact path='/customer/welcome' component={()=>{return(<><NavSignOut/><CustomerWelcome/></>)}}/>
          <ProtectedRoute exact path="/customer/bookevent" component={()=>{return(<><NavSignOut /><BookEvent /></>)}}/>
          <ProtectedRoute exact path="/customer/bookingsuccessful" component={()=>{return(<><NavSignOut /><BookingSuccessful /></>)}}/>
          <ProtectedRoute exact path="/customer/editevent" component={()=>{return(<><NavSignOut /><EditEvent /></>)}}/>
          <ProtectedRoute exact path="/manager/viewvenue"component={()=>{return(<><NavSignOut /><SelectVenue /></>)}}/>
          <ProtectedRoute exact path="/manager/viewcaterer"component={()=>{return(<><NavSignOut /><SelectCaterer /></>)}}/>
          <ProtectedRoute exact path="/customer/bookevent/selectmedia"component={()=>{return(<><NavSignOut /><SelectMedia /></>)}}/>
          <ProtectedRoute exact path="/customer/bookevent/selectmenu"component={()=>{return(<><NavSignOut /><SelectMenu /></>)}}/>
          <ProtectedRoute exact path="/customer/viewevent"component={()=>{return(<><NavSignOut /><ViewEvent /></>)}}/>
          <ProtectedRoute exact path="/customer/vieweventupdate"component={()=>{return(<><NavSignOut /><ViewEventUpdate/></>)}}/>
          {/* <Route exact path="/updateevent/:id"component={()=>{return(<><NavSignOut /><EditEventUp/></>)}}/>       */}
          

          <Route exact path="/employee">
            <NavOther />
            <EmployeeLogin />
          </Route>
          <ProtectedRoute exact path="/manager/viewemployees"component={()=>{return(<><NavSignOut /><ViewEmployee /></>)}}/>
          <ProtectedRoute exact path="/manager/viewstudio"component={()=>{return(<><NavSignOut /><SelectStudio /></>)}}/>
          <ProtectedRoute exact path="/manager/viewallservices"component={()=>{return(<><NavSignOut /><AvailbleServices/></>)}}/>
          <ProtectedRoute exact path="/regemployee"component={()=>{return(<><NavSignOut /><EmployeeRegister /></>)}}/>
          <ProtectedRoute exact path="/employee/welcome"component={()=>{return(<><NavSignOut /><EmployeeWelcome /></>)}}/>
          <ProtectedRoute exact path="/updateevent/:id"component={()=>{return(<><NavSignOut /><EditEventUp/></>)}}/>
          <ProtectedRoute exact path="/manager/welcome"component={()=>{return(<><NavSignOut /><ManagerWelcome /></>)}}/>
          <ProtectedRoute exact path="/manager/viewevent"component={()=>{return(<><NavSignOut /><ViewEventManager /></>)}}/>
          <ProtectedRoute exact path="/assigncaters/:id"component={()=>{return(<><NavSignOut /><AssignCaterer/></>)}}/>
          <ProtectedRoute exact path="/assignstudio/:id"component={()=>{return(<><NavSignOut /><AssignStudio/></>)}}/>
          <ProtectedRoute exact path="/assignemployee/:id"component={()=>{return(<><NavSignOut /><AssignEmployee/></>)}}/>
          <ProtectedRoute exact path="/viewassignemployee/:id"component={()=>{return(<><NavSignOut /><ViewAssignEmployee/></>)}}/>
          <ProtectedRoute exact path="/assigntask/:id"component={()=>{return(<> <NavSignOut /><AssignTask/></>)}}/>
          

          <Route exact path="/admin">
            <NavOther />
            <EmployeeLogin />
          </Route>
          <ProtectedRoute exact path="/admin/viewemployees"component={()=>{return(<><NavSignOut /><ViewEmployee /></>)}}/>
          <ProtectedRoute exact path="/admin/viewcustomers"component={()=>{return(<><NavSignOut /><ViewCustomer /></>)}}/>
          <ProtectedRoute exact path="/admin/viewallservices"component={()=>{return(<><NavSignOut /><AvailbleServices/></>)}}/>
          <ProtectedRoute exact path="/regemployee"component={()=>{return(<><NavSignOut /><EmployeeRegister /></>)}}/>
          <ProtectedRoute exact path="/employee/welcome"component={()=>{return(<><NavSignOut /><EmployeeWelcome /></>)}}/>
          <ProtectedRoute exact path="/updateevent/:id"component={()=>{return(<><NavSignOut /><EditEventUp/></>)}}/>
          
          <ProtectedRoute exact path="/admin/viewstudio"component={()=>{return(<><NavSignOut /><SelectStudio /></>)}}/>
          <ProtectedRoute exact path="/admin/viewvenue"component={()=>{return(<><NavSignOut /><SelectVenue /></>)}}/>
          <ProtectedRoute exact path="/admin/viewcaterer"component={()=>{return(<><NavSignOut /><SelectCaterer /></>)}}/>
          <ProtectedRoute exact path="/admin/viewevent"component={()=>{return(<><NavSignOut /><ViewEventManager /></>)}}/>
          <ProtectedRoute exact path="/assigncaters/:id"component={()=>{return(<><NavSignOut /><AssignCaterer/></>)}}/>
          <ProtectedRoute exact path="/assignstudio/:id"component={()=>{return(<><NavSignOut /><AssignStudio/></>)}}/>
          <ProtectedRoute exact path="/assignemployee/:id"component={()=>{return(<><NavSignOut /><AssignEmployee/></>)}}/>
          <ProtectedRoute exact path="/viewassignemployee/:id"component={()=>{return(<><NavSignOut /><ViewAssignEmployee/></>)}}/>
          <ProtectedRoute exact path="/assigntask/:id"component={()=>{return(<> <NavSignOut /><AssignTask/></>)}}/>
          <ProtectedRoute exact path="/admin/welcome"component={()=>{return(<> <NavSignOut /><AdminWelcome/></>)}}/>
          <ProtectedRoute exact path="/admin/addmenu"component={()=>{return(<> <NavSignOut /><AddMenu/></>)}}/>
          <ProtectedRoute exact path="/admin/addvenue"component={()=>{return(<> <NavSignOut /><AddVenue/></>)}}/>
          <ProtectedRoute exact path="/admin/addstudio"component={()=>{return(<> <NavSignOut /><AddStudio/></>)}}/>
          <ProtectedRoute exact path="/admin/addcaterer"component={()=>{return(<> <NavSignOut /><AddCaters/></>)}}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
        {/* <NavOther/> */}
      </BrowserRouter >
    </div>
   
  );
}

export default App;
