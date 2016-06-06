import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import Body from './Body'

export default React.createClass({
  componentDidMount: function() {
    // Connect state to props with 'connect' redux
    // Create mapStateToProps () to get the state from redux
    // use pure render mixin
    // have component use actions in reducer to update state

    // fake data before redux ipfs stored data
    const items = [
      {
        data: {
          id: '1338',
          title: 'KITTERS MROW',
          url: 'test2',
          score: 420,
          subscribers: 12,
          display_name: 'KITTERS',
          // This could be an ipld link
          subItems: [
            {
              data: {
                score: 420,
                id: 9000,
                url: 'www.wat.com',
                author: 'voxeot',
                title: 'we'
              }
            }
          ]
        }
      },
      {
        data: {
          id: '1337',
          title: 'DRAGONS N SHIT',
          url: 'test',
          score: 420,
          subscribers: 1,
          display_name: 'MROWW',
          // This should be an ipld link
          subItems: [
            {
              data: {
                score: 420,
                id: 9000,
                url: 'www.wat.com',
                author: 'voxeot',
                title: 'cat yodal yoour cat'
              }
            },
            {
              data: {
                score: 1337,
                id: 9001,
                url: 'www.wat.com',
                author: 'voxeot',
                title: 'yodal your cat ya dingus'
              }
            }
          ]
        }
      }
    ]
    var _this = this

    _this.setState({
      navigationItems: items
    })
  },
  getInitialState: function() {
    return ({
      activeNavigationUrl: "",
      navigationItems: [],
      subItems: [],
      title: "turba alpha",
      content: {
        url: "home"
      }
    })
  },
  setSelectedItem: function(item) {
    var _this = this
    // Grab data from ipfs hash for selected topic here
    
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
