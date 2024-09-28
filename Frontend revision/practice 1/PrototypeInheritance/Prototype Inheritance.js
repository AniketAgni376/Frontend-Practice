function makeHuman(name,age){
    this.name = name;
    this.age = age;
}
makeHuman.prototype.printMyName = function(){
    console.log(this.name); //Prototype Inheritance
}
const human1 = new makeHuman("aniket",12);
const human2 = new makeHuman("suyash",23);