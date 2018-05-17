import React, { Component } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`;

class Loader extends Component {
  static propTypes = {};

  render() {
    return (
      <LoaderContainer>
        <span>Loading</span>
        <ReactLoading type={"bubbles"} color={"black"} />
      </LoaderContainer>
    );
  }
}

export default Loader;
