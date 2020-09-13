import React from "react";
import {Registration} from "./pages/Registration";
import {BrowserRouter as Router, Switch, Route }  from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import NavigationBar from "./Nav/NavigationBar";
import MainPage from "./pages/MainPage";



function App() {
  return (


    <Router>
        <NavigationBar/>

         <Container className="pt-3 " >
             <Row>
                 <Col>
                     <Switch>
                         <Route path="/" exact component={MainPage}/>
                         <Route path="/registration" exact component={Registration}/>
                     </Switch>
                 </Col>
             </Row>
         </Container>
     </Router>
  );
}

export default App;
