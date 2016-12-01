import React from 'react';
import MyTitleBar from './MyTitleBar'
import FloatingActionButtonExampleSimple from './MyFloatActionBtn'
import DrawerSimpleExample from './MyDrawer'
import ListExampleSimple from './MyList'
import DrawerContainer from './DrawerContainer'
import { store } from './redux/index'
import { Provider } from 'react-redux'

const MyMainContainer = () => (
  <Provider store={store}>
    <div>
      <MyTitleBar />
      <FloatingActionButtonExampleSimple>
      </FloatingActionButtonExampleSimple>
      <DrawerContainer />
      <ListExampleSimple />
    </div>
  </Provider>
);

export default MyMainContainer;
