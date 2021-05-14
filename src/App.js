import React from 'react';
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {

  state = {
    newMessage: '',
    messagesList: []
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      newMessage: e.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      messagesList: [...this.state.messagesList, this.state.newMessage],
      newMessage: ''
    })
  }

  render() {
    return (
      <>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.newMessage}
        />
        <List data={this.state.messagesList} />
      </>
    )
  }
}

export default App;