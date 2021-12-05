import React from 'react'
import InputForm from './components/InputForm'
import Item from './components/Item'


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
        <InputForm add={this.add} name={this.nameRef} price={this.priceRef} />
      </div>
    )
  }
}

export default App
