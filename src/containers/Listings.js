import { connect } from "react-redux";
import Listing from "../components/Listing";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(Listing);
