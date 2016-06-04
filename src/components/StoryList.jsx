import React from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({
  upVote: function() {
    console.log('UPVOTE!!!')
  },
  render: function() {
    var _this = this
    var storyNodes = this.props.items.map(function(item) {
      return
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