import { connect } from "react-redux";
import Listing from "../components/Listing";
import { removeListing, fetchCoordinates } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    loggedIn: state.loggedIn,
    coords: state.coords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index)),
    fetchCoordinates: (address) => dispatch(fetchCoordinates(address)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
