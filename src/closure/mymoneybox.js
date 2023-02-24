/*function moneyBox (coins){
    let saveCoins = 0;
    saveCoins += coins;

    console.log(`moneBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);*/


function moneyBox (){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log (`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20);



function createPetList() {
    let mascotas = [];
    function agregar_mascotas(mascota) {
      if (mascota) {
        mascotas.push(mascota);
      } 
        return mascotas;
      
    }
    return agregar_mascotas;
  }

const myPetList = createPetList();

console.log(myPetList("michi"));

console.log(myPetList("firulais"));

console.log(myPetList());
