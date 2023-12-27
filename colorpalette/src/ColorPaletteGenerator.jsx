// src/ColorPaletteGenerator.jsx
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';
import './ColorPaletteGenerator.css';

const ColorPaletteGenerator = () => {
  const [colors, setColors] = useState([]);

  const handleGenerateColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColors((prevColors) => [...prevColors, newColor]);
  };

  const handleRemoveColor = (index) => {
    setColors((prevColors) => {
      const updatedColors = [...prevColors];
      updatedColors.splice(index, 1);
      return updatedColors;
    });
  };

  const handleRemovePalette = () => {
    setColors([]);
  };

  const CopyColor = (color) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Color code "${color}" copied!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="color-palette-generator">
      <h1>Color Palette Generator</h1>

      <div className="palette">
        {colors.map((color, index) => (
          <div key={index} className="color-box" style={{ backgroundColor: color }}>
            <p>{color}</p>
            <CopyToClipboard text={color}>
              <button onClick={() => CopyColor(color)}>Copy</button>
            </CopyToClipboard>
            <button onClick={() => handleRemoveColor(index)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={handleGenerateColor}>Generate Palette</button>
        <button onClick={handleRemovePalette}>Remove Palette</button>
      </div>
    </div>
  );
};

export default ColorPaletteGenerator;
