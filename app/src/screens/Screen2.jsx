import React from "react";
import { useNavigate } from "react-router-dom";

function Screen2({
  inputValue,
  onBackButtonClick,
  setInputValue,
}) {
  const navigate = useNavigate();
  console.log(inputValue);
  const uniqueCharacters = [...inputValue];
  const handleDeleteClick = (event) => {
    console.log(event);
    const characterToDelete =
      event.target.parentNode.dataset.character;
    const regex = new RegExp(characterToDelete, "g");
    const newInputValue = inputValue.replace(regex, "");
    setInputValue(newInputValue);
    navigate("/screen2");
  };
  return (
    <div className='screen2-container'>
      <h1>Screen 2</h1>
      <button onClick={handleDeleteClick}>Back</button>
      {inputValue && (
        <>
          <p>Original String: {inputValue}</p>
          <div className='card-container'>
            {uniqueCharacters.map((char) => {
              const characterCount = inputValue.match(
                new RegExp(char, "g")
              ).length;
              const cardColor = `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`;
              return (
                <div
                  key={char}
                  data-character={char}
                  className='card'
                  style={{ backgroundColor: cardColor }}>
                  <span>{char}</span>

                  <button
                    data-character={char}
                    onClick={handleDeleteClick}
                    className='delete-button'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'>
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path d='M16.172 14.828l-2.828-2.828 2.828-2.828-1.414-1.414-2.828 2.828-2.828-2.828-1.414 1.414 2.828 2.828-2.828 2.828 1.414 1.414 2.828-2.828 2.828 2.828z' />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Screen2;
