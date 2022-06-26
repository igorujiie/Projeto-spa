import { Widget } from "./components/Widget";
import { APIcovid } from "./components/APIcovid";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function App() {

  return (
    <>
    <Widget />
    <APIcovid />
    </>
  )
}
