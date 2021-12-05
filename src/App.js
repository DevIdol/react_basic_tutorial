import React from 'react'

class Item extends React.Component {
  render() {
    const name = this.props.name
    const price = this.props.price
    return (
      <li>
        {name}, $ {price}
      </li>
    )
  }
}

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Apple', price: 1.6 },
      { id: 1, name: 'Orange', price: 1.4 },
    ],
  }

  nameRef = React.createRef()
  priceRef = React.createRef()
  add = () => {
    let id = this.state.items.length + 1
    let name = this.nameRef.current.value
    let price = this.priceRef.current.value
    this.setState({
      items: [...this.state.items, { id, name, price }],
    })
  }
  onBlur = () => {}

  render() {
    const items = this.state.items.map((item) => {
      return <Item key={item.id} name={item.name} price={item.price} />
    })
    return (
      <div>
        <h1>Welcome To Basic React</h1>
        <ul>{items}</ul>
        <input type="text" ref={this.nameRef} />
        <br />
        <input type="text" ref={this.priceRef} />
        <br />
        <button type="submit" onClick={this.add}>
          Add
        </button>
      </div>
    )
  }
}

export default App
