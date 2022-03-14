import Ninja from "./ninja.js";

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }

  speakWisdom() {
    this.drinkSake();
    console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.');
  }
}

export default Sensei;