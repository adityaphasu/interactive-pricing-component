import React from "react";

function Slider(props) {
  // Prop Values
  const min = props.min;
  const max = props.max;
  const value = props.value;

  // Colors for Slider
  const colors = {
    cyan: "hsl(174, 77%, 80%)",
    gray: "hsl(224, 65%, 95%)",
  };

  // The range of values that the input can take
  const range = max - min;
  // Calculating the percentage number for slider background gradient
  const percentage = (100 / range) * (value - min);

  return (
    <div className="slider">
      <label htmlFor="slider" aria-label="slider">
        <input
          className="slider__input"
          type="range"
          name="slider"
          id="slider"
          min={min}
          max={max}
          value={value}
          onInput={props.onInput}
          style={{
            background: `linear-gradient(to right, ${colors.cyan} 0%, ${colors.cyan} ${percentage}%, ${colors.gray} ${percentage}%, ${colors.gray} 100%`,
          }}
        />
      </label>
    </div>
  );
}

export default Slider;
