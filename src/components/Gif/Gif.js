import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshGif } from "../../AC/gifAC";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";

class Gif extends Component {
  constructor(props) {
    super();
  }

  static propTypes = {
    refreshGif: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  render() {
    const { isLoading, image, refreshGif } = this.props;
    return (
      <div>
        {isLoading
          ? <Loader />
          : <div>
              <img src={image} alt="" />
            </div>}

        <button onClick={refreshGif}>Refresh</button>
      </div>
    );
  }
}

// const mapStateToProps = store => ({
//   image: store.gif.image
// });

// const mapDispatchToProps = dispatch => ({
//   refreshGif: () => dispatch(refreshGif())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Gif);

export default connect(
  store => ({
    image: store.gif.image,
    isLoading: store.gif.isLoading
  }),
  { refreshGif }
)(Gif);
