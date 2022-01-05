import React, { useContext } from "react";
import { AppContext } from "../Context/appProvider";

const Button = (props) => {
  let theme = useContext(AppContext);
  // console.log(theme, props);

  const style = { border: "2px solid black", borderRadius: "10px" };
  // console.log(theme.appTheme);

  return (
    <>
      <div style={{ ...style, ...theme.appTheme }}>{props.label}</div>
      <button onClick={theme.setDark}>DARK</button>
      <button onClick={theme.setLight}>LIGHT</button>
    </>
  );
};
export default Button;
