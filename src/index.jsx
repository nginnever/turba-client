import React from 'react';
import ReactDOM from 'react-dom';

const NavigationItem = React.createClass({
  onClick: function() {
    this.props.itemSelected(this.props.item);
  },
  render: function() {
    // console.log(this.props.item)
    return (
      <li onClick={this.onClick} className={this.props.selected ? "selected" : ""}>
        {this.props.item.data.display_name}
      </li>
    );
  }
});

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
    console.log(this)
    var storyNodes = this.props.items.map(function(item) {
      return (
        <tr key={item.data.id}>
          <td>
            <button onClick={this.upVote} className="up" ><h2>&#8593;</h2></button>
            <p className="score">{item.data.score}</p>
            <button onClick={this.upVote} className="down"><h2>&#8595;</h2></button>
          </td>
          <div className="posts">
            <td>
              <p className="title">
                <a href={item.data.url}>
                  {item.data.title}
                </a>
              </p>
              <p className="author">
                Posted by <b>{item.data.author}</b>
              </p>
            </td>
          </div>
        </tr>
      );
    });

    return (
      <div>
      <table>
        <tbody>
          {storyNodes}
        </tbody>
      </table>
      </div>
    );
  }
});

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
          url: 'www.test.com',
          score: 420,
          subscribers: 12,
          display_name: 'KITTERS',
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
          url: 'www.test.com',
          score: 420,
          subscribers: 13,
          display_name: 'MROWW'
        }
      }
    ]
    var _this = this

    _this.setState({
      navigationItems: items
    })
    // var cbname = "fn" + Date.now();
    // var script = document.createElement("script");
    // script.src = "http://www.reddit.com/reddits.json?jsonp=" + cbname;

    // window[cbname] = function(jsonData) {
    //   _this.setState({
    //     navigationItems:  jsonData.data.children
    // });
    //   delete window[cbname];
    // };

    // document.head.appendChild(script);
  },
  getInitialState: function() {
    return ({
      activeNavigationUrl: "",
      navigationItems: [],
      storyItems: [],
      title: "swarmit"
    });
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
    );
  },
  setSelectedItem: function(item) {
    var _this = this
    console.log(item.data.storyItems)
    // var cbname = "fn" + Date.now();
    // var script = document.createElement("script");
    // script.src = "http://www.reddit.com/" + item.data.url +
    //  ".json?sort=top&t=month&jsonp=" + cbname;

    // window[cbname] = function(jsonData) {
    //   _this.setState({storyItems: jsonData.data.children});
    //   delete window[cbname];
    // };
    
    _this.setState({
      storyItems: item.data.storyItems,
      activeNavigationUrl: item.data.url,
      title: item.data.display_name
    })
    //document.head.appendChild(script);

    //this.setState({
    //  activeNavigationUrl: item.data.url,
    //  storyItems: [],
    //  title: item.data.display_name
    //});
  }
});

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
