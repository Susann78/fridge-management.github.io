import React, { useState } from 'react';

export default function ColorPicker({ onColorChange }) {
  const [showColorPicker, setShowColorPicker] = useState(false);

  function handleColorChange(color) {
    onColorChange(color);
    setShowColorPicker(false);
  }

  return (
    <div className="color-picker">
      <button className="color-picker-button" onClick={() => setShowColorPicker(!showColorPicker)}>
        CHOOSE COLOR
      </button>
      {showColorPicker && (
        <div className="color-picker-dropdown">
          <div className="color-option ice" onClick={() => handleColorChange('ice')}></div>
          <div className="color-option pink" onClick={() => handleColorChange('pink')}></div>
          <div className="color-option orange" onClick={() => handleColorChange('orange')}></div>
          <div className="color-option red" onClick={() => handleColorChange('red')}></div>
          <div className="color-option blue" onClick={() => handleColorChange('blue')}></div>
          <div className="color-option black" onClick={() => handleColorChange('black')}></div>          
        </div>
      )}
    </div>
  );
}
