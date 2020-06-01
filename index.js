class Machine {
  constructor(watt) {
    this.watt = watt;
  }

  takeCoin(coin) {
    if (coin == 100 && 2 * 50) {
      this.water = coin;
    } else { console.log() };
  }

  start() {
    if (this.water) {
      console.log('Սպասեք խնդրում եմ');
      this.power = true;
      this.timerId = setTimeout(this.stop, 5000);
      return;
    }
    console.log('գցեք կոպեկ');
  }

  stop = () => {
    if (this.power) {
      this.power = false;
      console.log('խնդրեմ ՝ ձեր սուրճը :)');
      clearTimeout = (this.timerId);
      return;
    }
    console.log('միացված չէ');
  }
};

const coffeemachine = new Machine()
