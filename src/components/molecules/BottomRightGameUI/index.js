import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import ImageButton from '../../atoms/ImageButton';
import QuickSelectWeaponMenu from '../QuickSelectWeaponMenu';
import InventoryModal from '../../organisms/InventoryModal';
import inventoryButtonImg from '../../../assets/graphics/hud/inventory_button.png';

const BottomRightGameUI = () => {
  const [inventoryOpen, setInventoryOpen] = useState(false);

  const handleInventoryButtonClick = () => {
    setInventoryOpen(true);
  };

  const handleInventoryClose = () => {
    setInventoryOpen(false);
  };

  return (
    <Box display="flex" position="absolute" right={0} bottom={0} p={1}>
      <Box mr={1}>
        <QuickSelectWeaponMenu />
      </Box>
      <ImageButton imgSrc={inventoryButtonImg} onClick={handleInventoryButtonClick} />
      <InventoryModal isOpen={inventoryOpen} onClose={handleInventoryClose} />
    </Box>
  );
};

export default BottomRightGameUI;
