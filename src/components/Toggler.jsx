import React from "react";

function Toggler(props) {
  return (
    <>
      <label htmlFor="toggler" className="toggler" aria-label="Toogle-switch">
        <input
          type="checkbox"
          className="toggler__switch"
          name="toogler"
          checked={props.checked}
          onChange={props.onChange}
        />
      </label>
    </>
  );
}

export default Toggler;
