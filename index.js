import Ninja from "./ninja.js";
import Sensei from "./sensei.js";

console.log('\nNinja\n- - -\n')

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

console.log('\nSensei\n- - -\n')

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();