import React from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({
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