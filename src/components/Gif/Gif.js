import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshGif } from "../../AC/gifAC";
import PropTypes from "prop-types";

class Gif extends Component {
  constructor(props) {
    super();
  }

  static propTypes = {
    refreshGif: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.props.image} alt="" />
        </div>

        <button onClick={this.props.refreshGif}>Refresh</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  image: store.gif.image
});

const mapDispatchToProps = dispatch => ({
  refreshGif: () => dispatch(refreshGif())
});

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
