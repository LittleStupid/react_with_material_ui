import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {store} from './redux/index'
import {toggleDrawer} from './redux/actions'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

export default class FloatingActionButtonExampleSimple extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggle = () => {
    // console.log(store.getState())
    store.dispatch(toggleDrawer())
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          style={style}
          onTouchTap={this.handleToggle}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
