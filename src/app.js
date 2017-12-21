import React,{Component} from 'react';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk' // middlewaer
import reducers from './reducers';
import Router from './Router';



class App extends Component{

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyAT_QCQVNH4DvfC_MBG_9xeb6xjEuHZdlA",
      authDomain: "auth-41626.firebaseapp.com",
      databaseURL: "https://auth-41626.firebaseio.com",
      projectId: "auth-41626",
      storageBucket: "auth-41626.appspot.com",
      messagingSenderId: "312255751944"
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App;
