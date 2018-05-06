import React, { Component } from "react";
import { Input } from "../../components/Input/Input";
import { Counter } from "../../components/Counter/Сounter";
import Gif from "../../components/Gif/Gif";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import styled from "styled-components";

const ContainerDiv = styled.div`display: flex;`;

const StyledDiv = styled.div`
  display: flex;
  margin: 50px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ContainerDiv>
          <div>
            <h2>Main menu</h2>
            <div>
              <NavLink activeStyle={{ color: "red" }} to={"/input"}>
                Input
              </NavLink>
            </div>
            <div>
              <NavLink activeStyle={{ color: "red" }} to={"/counter"}>
                Counter
              </NavLink>
            </div>
            <div>
              <NavLink activeStyle={{ color: "red" }} to={"/gif"}>
                Gif
              </NavLink>
            </div>
          </div>
          <Switch>
            <StyledDiv>
              <Route path="/input" component={Input} />
              <Route path="/counter" component={Counter} />
              <Route path="/gif" component={Gif} />
            </StyledDiv>
          </Switch>
        </ContainerDiv>
      </Router>
    );
  }
}

export default App;
