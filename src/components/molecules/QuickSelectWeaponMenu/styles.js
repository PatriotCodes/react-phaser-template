import React from 'react';
import { withStyles, MenuItem, Menu } from '@material-ui/core';

export const StyledMenuItem = withStyles(theme => ({
  root: {
    padding: 0,
    background: 'transparent',
  },
}))(React.forwardRef((props, ref) => <MenuItem {...props} ref={ref} />));

export const StyledMenu = withStyles(theme => ({
  list: {
    padding: 0,
    background: 'transparent',
  },
  paper: {
    background: 'transparent',
  },
}))(props => <Menu {...props} />);
