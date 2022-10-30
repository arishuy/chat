// import React from "react";
// import { useState } from "react";


// const AuthContext = React.createContext({
//     // currentUser:{},
//     token: null,
//     isLoggedIn: false,
//     login: (token) => {},
//     logout: (currentUser) => {}
// });
// export const AuthContextProvider = (props) => {
// // const [currentUser, setCurrentUser] = useState({})
// const [token, setToken] = useState(null)

//     const userIsLoggedIn = !!token;

//     const loginHandler = (token ) => {
//         // setCurrentUser(currentUser);
//         setToken(token);
//     }

//     const logoutHandler = () => {
//         setCurrentUser(null);
//         setToken(null);
//     }
//     const contextValue = {
//         token: token,
//         isLoggedIn: userIsLoggedIn,
//         login: loginHandler,
//         logout: logoutHandler
//     };
//     return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
// }
// export default AuthContext;
