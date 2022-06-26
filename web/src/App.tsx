import { Widget } from "./components/Widget";
import {APIcovid} from "./components/APIcovid";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";


export const ThemeContext = createContext(null);

export function App(){

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}> 
        <Widget />
        <div className="switch">
          <label > {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme ==="dark"} />
        </div>
        <APIcovid />
      </div>
    </ThemeContext.Provider>
  )
}
