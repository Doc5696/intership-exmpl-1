import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <>
        <input onChange={e => this.props.handleChange(e)} value={this.props.value} />
        <button onClick={() => this.props.handleSubmit()}>
          Submit
        </button>
      </>
    )
  }
}

export default Form;