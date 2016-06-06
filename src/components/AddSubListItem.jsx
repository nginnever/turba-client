import React from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({
  handleSubmit: function(event) {
    console.log(event)
  },
  render: function() {
    return (
      <div>
         <form action="" onSubmit={this.handleSubmit}>
          <input /><br />
          <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form> 
      </div>
    )
  }
})