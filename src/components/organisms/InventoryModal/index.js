import React from 'react';
import { observer } from 'mobx-react';
import { Dialog } from '@material-ui/core';

const InventoryModal = ({ isOpen, onClose }) => {
  return <Dialog open={isOpen} onClose={onClose} fullWidth />;
};

export default observer(InventoryModal);
