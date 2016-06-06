import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        <h1> TEST </h1>
      </div>
    )
  }
})