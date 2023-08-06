import jwtdecoder from "jwt-decode";

export const decodeToken = (token) => {
  return token ? jwtdecoder(token) : null;
};
