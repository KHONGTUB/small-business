import { connect } from "react-redux";
import Login from "../components/Login";
import { login, logout } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (logged) => dispatch(login(logged)),
    logout: (logged) => dispatch(logout(logged)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
