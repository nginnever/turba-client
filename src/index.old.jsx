import React from 'react'
import ReactDOM from 'react-dom'

const NavigationItem = React.createClass({
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

const Navigation = React.createClass({
  setSelectedItem: function(item) {
    this.props.itemSelected(item);
  },
  render: function() {
    var items = this.props.items
      .sort(function(a, b) {
        // Sort by # of subscribers in descending order
        return b.data.subscribers - a.data.subscribers;
      })
      .map(function(item) {
        return (
          <NavigationItem
            item={item}
            itemSelected={this.setSelectedItem}
            key={item.data.id}
            selected={item.data.url === this.props.activeUrl} />
        );
      }, this);

    return (
      <div className="navigation">
        <div className="header">Navigation</div>
        <ul>
            {items}
        </ul>
      </div>
    );
  }
});

const StoryList = React.createClass({
  upVote: function() {
    console.log('UPVOTE!!!')
  },
  render: function() {
    var _this = this
    var storyNodes = this.props.items.map(function(item) {
      return (
        <tr key={item.data.id}>
          <td>
            <button onClick={_this.upVote} className="up" ><h2>&#8593;</h2></button>
            <p className="score">{item.data.score}</p>
            <button onClick={_this.upVote} className="down"><h2>&#8595;</h2></button>
          </td>   
            <td>
              <div className="posts">
                <p className="title">
                  <a href={item.data.url}>
                    {item.data.title}
                  </a>
                </p>
                <p className="author">
                  Posted by <b>{item.data.author}</b>
                </p>
              </div>
            </td>   
        </tr>
      )
    })
    return (
      <div>
      <table>
        <tbody>
          {storyNodes}
        </tbody>
      </table>
      </div>
    )
  }
})

 const App = React.createClass({
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
  render: function() {
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
  },
  setSelectedItem: function(item) {
    var _this = this
    console.log(item)
    // Grab data from ipfs hash for selected topic here
    
    _this.setState({
      storyItems: item.data.storyItems,
      activeNavigationUrl: item.data.url,
      title: item.data.display_name
    })
  }
})

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
