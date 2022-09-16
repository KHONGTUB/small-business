export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index,
  };
};

export const addUser = (userName) => {
  return {
    type: "ADD_USER",
    value: userName,
  };
};

export const removeUser = () => {
  return {
    type: "REMOVE_USER",
  };
};

export const login = (isLoggedIn) => {
  return {
    type: "LOGIN",
    value: isLoggedIn,
  };
};

export const logout = (isLoggedIn) => {
  return {
    type: "LOGOUT",
    value: isLoggedIn,
  };
};

export const fetchCoordinates = (address) => {
  return (dispatch) => {
    fetch(
      `https://maps.google.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_KEY
      }&address=${address.replaceAll(" ", "+")}`
    )
      .then((res) => res.json())
      .then((data) => {
        const action = {
          type: "FETCH_COORDS",
          value: data.results[0].geometry.location,
        };

        dispatch(action);
      });
  };
};

export const deleteCoordinates = () => {
  return {
    type: "DELETE_COORDS",
    value: [],
  };
};
