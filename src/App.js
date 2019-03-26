import React, { Component } from 'react';
import { Globalstyle } from './style'
import { IconFontStyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      //  Provider  可以把store 里面所以的数据提供给Provider标签里面的组件
      <Provider store={store}>
          <Globalstyle/>
          <IconFontStyle />
          <Header/>
      </Provider>
    );
  }
}

export default App;
