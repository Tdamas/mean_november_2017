function Ninja(name, health){
  var self = this;
  // By using var you create a private variable
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = 100;

  Ninja.prototype.sayName = function(){
    console.log("My Ninja name is " + this.name + ".");
    return this;
  }
  this.showStats = function(){
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    return this;
  }

  Ninja.prototype.drinkSake = function(){
    this.health += 10;
    console.log("My health is now " + this.health);
  }
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
ninja1.drinkSake();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
