import React from "react";
import {Registration} from "./pages/Registration";
import {BrowserRouter as Router, Switch, Route }  from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import NavigationBar from "./Nav/NavigationBar";



function App() {
  return (
     <Router>
         <Container>
             <NavigationBar/>
             <Row>
                 <Col>
                     <Switch>
                         <Route path="/" exact component={Registration}/>
                     </Switch>
                 </Col>
             </Row>
         </Container>
     </Router>
  );
}

export default App;
