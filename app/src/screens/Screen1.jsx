import React from "react";

function Screen1({ inputValue, onInputChange, onSubmit }) {
  return (
    <div>
      <h1>Screen 1</h1>
      <form onSubmit={onSubmit}>
        <label>
          Input Value:
          <input
            type='text'
            value={inputValue}
            onChange={onInputChange}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Screen1;
