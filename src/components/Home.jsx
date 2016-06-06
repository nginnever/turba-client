import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="home">
        <p>test</p>
      </div>
    )
  }
})