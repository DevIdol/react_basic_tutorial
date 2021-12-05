import React from "react"
 const Item =   (props) => {
      const name = props.name
      const price = props.price
      return (
        <li>
          {name}, $ {price}
        </li>
      )
    }
  
    export default Item;

