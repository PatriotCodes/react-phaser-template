import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Box } from '@material-ui/core';
import gameStore from '../../../store/game.store';
import ImageButton from '../../atoms/ImageButton';
import weaponButtonImg from '../../../assets/graphics/hud/weapon_icon.png';
import ITEM_IMAGES from '../../../constants/itemImages';
import { StyledMenuItem, StyledMenu } from './styles';

const QuickSelectWeaponMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const weapons = [...gameStore.player.inventory.getAllWeapons(), gameStore.player.bareHands];
  const activeWeapon = gameStore.player.activeWeapon;

  const handleWeaponSelectorOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleWeaponSelectorClose = () => {
    setAnchorEl(null);
  };

  const handleSelectWeapon = weapon => {
    gameStore.player.setActiveWeapon(weapon);
    setAnchorEl(null);
  };

  return (
    <Box>
      <ImageButton imgSrc={weaponButtonImg} onClick={handleWeaponSelectorOpen}>
        <img src={ITEM_IMAGES[activeWeapon.key]} alt="" width="100%" height="100%" />
      </ImageButton>
      <StyledMenu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleWeaponSelectorClose}
        PaperProps={{
          style: {
            transform: 'translateY(-90%)',
          },
        }}
      >
        {weapons
          .filter(({ id }) => id !== activeWeapon.id)
          .map(weapon => (
            <StyledMenuItem key={weapon.key}>
              <ImageButton imgSrc={weaponButtonImg} onClick={() => handleSelectWeapon(weapon)}>
                <img src={ITEM_IMAGES[weapon.key]} alt={weapon.name} width="100%" height="100%" />
              </ImageButton>
            </StyledMenuItem>
          ))}
      </StyledMenu>
    </Box>
  );
};

export default observer(QuickSelectWeaponMenu);
