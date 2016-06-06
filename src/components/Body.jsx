import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SubList from './SubList'
import SubListItem from './SubListItem'
import Home from './Home'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
  	let body
  	switch(this.props.content.url) {
	  	case 'subView':
	  	  body = <SubList items={this.props.items} setSelectedBody={this.props.setSelectedBody} />
	  	  break
	  	case 'home':
	  	  body = <Home />
	  	  break
	  	case 'test':
	  	  body = <SubListItem />
	  	  break
  	}

    return (
      <div>
        {body}
      </div>
    )
  }
})