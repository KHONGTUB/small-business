import { connect } from "react-redux";
import AddListing from "../components/AddListing";

const mapStateToProps = (state) => {
  return {
    state: state.listings,
  };
};

export default connect(mapStateToProps)(AddListing);
