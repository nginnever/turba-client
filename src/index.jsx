import React from 'react'
import ReactDOM from 'react-dom'
//import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {List, Map} from 'immutable'
import reducer from './reducer'
import {AppContainer} from './components/App'

const items = List.of(
  Map({
    data: Map({
      id: '1338',
      title: 'KITTERS MROW',
      url: 'test2',
      score: 420,
      subscribers: 12,
      display_name: 'KITTERS',
      // This could be an ipld link
      subItems: List.of(
        Map({
          data: Map({
            score: 420,
            id: 9000,
            url: 'www.wat.com',
            author: 'voxeot',
            title: 'we'
          })
        })
      )
    })
  }),
  Map({
    data: Map({
      id: '1337',
      title: 'DRAGONS N SHIT',
      url: 'test',
      score: 420,
      subscribers: 1,
      display_name: 'MROWW',
      // This should be an ipld link
      subItems: List.of(
        Map({
          data: Map({
            score: 420,
            id: 9000,
            url: 'www.wat.com',
            author: 'voxeot',
            title: 'cat yodal yoour cat'
          })
        }),
        Map({
          data: Map({
            score: 1337,
            id: 9001,
            url: 'www.wat.com',
            author: 'voxeot',
            title: 'yodal your cat ya dingus'
          })
        })
      )
    })
  })
)

const store = createStore(reducer)
store.dispatch({
	type: 'SET_STATE',
	state: {
		navigationItems: items
	}
})

ReactDOM.render(
	<Provider store={store}>
  	<AppContainer />
  </Provider>,
  document.getElementById('app')
)