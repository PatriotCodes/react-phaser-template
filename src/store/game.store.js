import { observable, makeObservable } from 'mobx';

class GameStore {
  player = {};

  constructor() {
    makeObservable(this, {
      player: observable,
    });
  }
}

const gameStore = new GameStore();
export default gameStore;
