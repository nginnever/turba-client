import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],
  handleSubmit: function(event) {
    console.log(event)
  },
  render: function() {
    return (
      <div>
         <form action="" onSubmit={this.handleSubmit}>
          <input /><br />
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form> 
      </div>
    )
  }
})