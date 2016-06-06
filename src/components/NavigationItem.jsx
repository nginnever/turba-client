import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],
  onClick: function() {
    this.props.itemSelected(this.props.item);
  },
  render: function() {
    return (
      <li onClick={this.onClick} className={this.props.selected ? "selected" : ""}>
        {this.props.item.data.display_name}
      </li>
    )
  }
})