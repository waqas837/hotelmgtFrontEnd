import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Homepage from "./Components/HomePage/Home";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/SignUp/Signup";
import Panel from "./Components/UserPanel/Panel";
import Admin from "./Components/Admin/Admin";
import Users from "./Components/Admin/Users/Users";
import ShowHotelMgrs from "./Components/Admin/AddHotelManger/ShowHotelMgrs";
import Myhotels  from "./Components/HotelPanel/Myhotels"
import SearchResults from "./Components/HomePage/SearchResults";
const font = "'Roboto', sans-serif;";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "capitalize",
    },
  },
});
function App() {
  const admin = localStorage.getItem("admin");
  const user = localStorage.getItem("user");
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Route exact path="/">
            <Navbar />
            <Homepage />
          </Route>
          <Route exact path="/signin">
            <Navbar />
            <Signin />
          </Route>
         <Route exact path="/userDashboard">
            <Navbar />
            <Panel/>
          </Route>
          <Route exact path="/searchresults">
          <Navbar/>
        <SearchResults/>
          </Route>
          <Route exact path="/signup">
            <Navbar />
            <Signup />
          </Route>
          {user ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/admin">
              <Admin />
            </Route>
          )}
          <Route exact path="/admin/myhotel">
            <Myhotels/>
           
          </Route>
          <Route exact path="/admin/users">
            {admin ? <Users /> : <Redirect to="/admin" />}
          </Route>
          <Route exact path="/admin/hotelmanagers">
            {admin ? <ShowHotelMgrs /> : <Redirect to="/admin" />}
          </Route>
      
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
//when we make a function after its process where it will be called then if you gave
//a return some code then where this function will be called return code will be printed there where we called this function
