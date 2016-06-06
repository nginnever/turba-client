import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AddSubListItem from './AddSubListItem'

export default React.createClass({
  mixins: [PureRenderMixin],
  vote: function(vote) {
    if (vote === 'up') {
      console.log('UP VOTE!!!')
    }
    if (vote === 'down') {
      console.log('DOWN VOTE!!!')
    }
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
            <p type="button" onClick={_this.vote.bind(_this, 'up')} className="up" >&#8593;</p>
            <p className="score">{item.data.score}</p>
            <p type="button" onClick={_this.vote.bind(_this, 'down')} className="down">&#8595;</p>
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