import { connect } from "react-redux";
import Listing from "../components/Listing";
import { removeListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
