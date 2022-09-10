import { connect } from "react-redux";
import Login from "../components/Login";
import { login, logout } from "../redux/actions";
import { addUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    username: state.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (logged) => dispatch(login(logged)),
    logout: (logged) => dispatch(logout(logged)),
    addUser: (username) => dispatch(addUser(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
