import React from "react";
import { useState } from "react";
const HOC = (Component) => {
    return function WithAuth(props) {
      const [auth, setAuth] = useState(false);
  
      return (
        <div>
          {auth ? (
            <Component {...props} />
          ) : (
            <div>Please make sure that you are logged in properly</div>
          )}
        </div>
      );
    };
  };
export default HOC;