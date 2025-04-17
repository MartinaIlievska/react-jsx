import { useState } from "react";

const colors = ["red", "blue", "yellow", "green"];

function ColorPicker() {
  const [color, setColor] = useState("white");

  function getColor(color) {
    setColor(color);
  }

  function addNewColor() {
    const newColor = document.getElementById("addColor").value;
    const newColorString = newColor.toString();

    if(CSS.supports("color", newColorString) && !colors.includes(newColorString)){
        colors.push(newColor)
        setColor(newColor)
    }
  }
  return (
    <div>
      <div>
        <h1>Color Picker</h1>
        <input type="text" id="addColor" />
        <button onClick={addNewColor}>Add New Color</button>
      </div>
      <div>
        {colors.map((color, index) => (
          <button
            onClick={() => getColor(color)}
            key={index}
            style={{ backgroundColor: color, margin: "10px" }}
          >
            {color}
          </button>
        ))}
      </div>
      <div
        style={{
          backgroundColor: color,
          width: "300px",
          height: "150px",
          border: "1px solid black",
          margin: "20px auto",
          borderRadius: "10px",
        }}
      >
        <p>{color}</p>
      </div>
    </div>
  );
}

export default ColorPicker;
