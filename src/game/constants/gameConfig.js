import Phaser from "phaser";
import PlayGame from "../index";

const baseConfig = {
  type: Phaser.AUTO,
  parent: "phaser",
  resolution: window.devicePixelRatio,
  scene: PlayGame,
  width: window.innerWidth,
  height: window.innerHeight,
};

export default baseConfig;