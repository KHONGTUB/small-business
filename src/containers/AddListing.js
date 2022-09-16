import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import {
  addListing,
  fetchCoordinates,
  deleteCoordinates,
} from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    coords: state.coords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
    fetchCoordinates: (address) => dispatch(fetchCoordinates(address)),
    deleteCoordinates: () => dispatch(deleteCoordinates()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
