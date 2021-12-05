import React from "react";
const InputForm = (props
    ) => {
    return (
        <div>
          <input type="text" ref={props.name} />
          <br />
          <input type="text" ref={props.price} />
          <br />
          <button type="submit" onClick={props.add}>
            Add
          </button>
        </div>
      )
}

export default InputForm;