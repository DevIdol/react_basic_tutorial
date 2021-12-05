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

  add = () => {
    let id = this.state.items.length + 1
    this.setState({
      items: [...this.state.items, { id, name: 'Mango', price: 1.46 }],
    })
  }

  render() {
    const items = this.state.items.map((item) => {
      return <Item name={item.name} price={item.price} />
    })
    return (
      <div>
        <h1>Welcome To Basic React</h1>
        <ul>{items}</ul>
        <button type="submit" onClick={this.add}>
          Add
        </button>
      </div>
    )
  }
}

export default App
