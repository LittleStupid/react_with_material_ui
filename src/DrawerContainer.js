import { Component } from 'react';
import { connect } from 'react-redux';

import DrawerSimpleExample from './MyDrawer';
import { toggleDrawer } from './redux/actions';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return {
    showDrawer: state.showDrawer
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerSimpleExample);
