import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      alert("Please enter a non-empty value.");
    } else {
      console.log(inputValue);
      navigate("/screen2");
      // use history.push or Redirect instead
    }
  };

  const handleBackButtonClick = () => {
    setInputValue("");
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Screen1
              inputValue={inputValue}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          }
        />
        <Route
          path='/screen2'
          element={
            <Screen2
              inputValue={inputValue}
              onBackButtonClick={handleBackButtonClick}
              setInputValue={setInputValue}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
