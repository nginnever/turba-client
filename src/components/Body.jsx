import React from 'react'
import ReactDOM from 'react-dom'
import SubList from './SubList'
import SubListItem from './SubListItem'
import Home from './Home'

export default React.createClass({
  render: function() {
  	let body
  	console.log('body comp content prop: ' + this.props.content)
  	if (this.props.content.url === 'subView') {
  		body = <SubList items={this.props.items} setSelectedBody={this.props.setSelectedBody} />
  	}
  	if (this.props.content.url === 'home') {
  		body = <Home />
  	}
  	if (this.props.content.url === 'test') {
  		body = <SubListItem />
  	}
    return (
      <div>
        {body}
      </div>
    )
  }
})