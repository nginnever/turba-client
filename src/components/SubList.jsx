import React from 'react'
import ReactDOM from 'react-dom'
import AddSubListItem from './AddSubListItem'

export default React.createClass({
  upVote: function() {
    console.log('UPVOTE!!!')
  },
  viewPost: function(post) {
    const content = {
      url: post,
      title: 'test'
    }
    this.props.setSelectedBody(content)
  },
  render: function() {
    var _this = this
    var subNodes = this.props.items.map(function(item) {
      return (
        <tr key={item.data.id}>
          <td>
            <button onClick={_this.upVote} className="up" ><h2>&#8593;</h2></button>
            <p className="score">{item.data.score}</p>
            <button onClick={_this.upVote} className="down"><h2>&#8595;</h2></button>
          </td>   
            <td>
              <div className="posts">
                <p onClick={_this.viewPost.bind(_this, 'test')} className="title">
                  {item.data.title}
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
          {subNodes}
        </tbody>
      </table>
      <AddSubListItem />
      </div>
    )
  }
})