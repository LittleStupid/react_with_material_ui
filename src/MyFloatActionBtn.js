import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {store} from './redux/index'
import {logout} from './redux/actions'

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

  handleToggle = () => store.dispatch(logout());

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
