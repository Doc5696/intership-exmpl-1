import React from 'react';

class List extends React.Component {

  render() {
    return (
      <>
        {this.props.data.map((item, i) => (
          <div key={i}>
            <span style={{marginRight: '10px'}}>
              {i + 1}
            </span>
            {item}
          </div>
        ))}
      </>
    )
  }
}

export default List;