import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import Navigation from './Navigation'
import Body from './Body'

export const App = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return ({
      activeNavigationUrl: "",
      navigationItems: this.props.navigationItems,
      subItems: [],
      title: "turba alpha",
      content: {
        url: "home"
      }
    })
  },
  setSelectedItem: function(item) {
    var _this = this
    
    _this.setState({
      subItems: item.data.subItems,
      activeNavigationUrl: item.data.url,
      title: item.data.display_name,
      content: {
        url: "subView"
      }
    })
  },
  setSelectedBody: function(content) {
    var _this = this
    _this.setState({
      content: content
    })
  },
  render: function() {
    return (
      <div>
        <div className="logo">
          <img src={'logo.svg'} style={{height: 50}} />
        </div>
        <div className="turba">
        <h1>{this.state.title}</h1>
        </div>
        <Navigation
          activeUrl={this.state.activeNavigationUrl}
          items={this.state.navigationItems}
          itemSelected={this.setSelectedItem} />
        <Body
          content={this.state.content}
          items={this.state.subItems}
          setSelectedBody={this.setSelectedBody} />
      </div>
    )
  }
})

function mapStateToProps(state) {
  return state.toJSON()
}

export const AppContainer = connect(mapStateToProps)(App)
