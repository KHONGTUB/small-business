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
