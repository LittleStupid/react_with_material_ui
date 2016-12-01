import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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

  handleToggle = () => console.log('Btn Clicked');

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
