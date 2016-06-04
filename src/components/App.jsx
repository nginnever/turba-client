import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import StoryList from './StoryList'

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
          // This should be an ipld link
          storyItems: [
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
          storyItems: [
            {
              data: {
                score: 420,
                id: 9000,
                url: 'www.wat.com',
                author: 'voxeot',
                title: 'cat yodal yoour cat'
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
      storyItems: [],
      title: "swarmit"
    })
  },
  setSelectedItem: function(item) {
    var _this = this
    //console.log(item)
    // Grab data from ipfs hash for selected topic here
    
    _this.setState({
      storyItems: item.data.storyItems,
      activeNavigationUrl: item.data.url,
      title: item.data.display_name
    })
  },
  render: function() {
    console.log(this.state.storyItems)
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Navigation
          activeUrl={this.state.activeNavigationUrl}
          items={this.state.navigationItems}
          itemSelected={this.setSelectedItem} />
        <StoryList items={this.state.storyItems} />
      </div>
    )
  }
})
