import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const MyTitleBar = () => (
  <AppBar
    title="Title"
    iconElementRight={<FlatButton
      target="_blank"
      icon={<FileCloudDownload />}
    />}
  />
);

export default MyTitleBar;
