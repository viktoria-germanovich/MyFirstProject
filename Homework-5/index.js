function Plant(name, description, species, age) {
  name = name;
  description = description;
  species = species;
  age = age;
  
  this.getName = function () {
    return name;
  }

  this.setName = function (value) {
    this.name = value;
  }

  this.getDescription = function () {
    return description;
  }

  this.setDescription = function (value) {
    this.description = value;
  }

  this.getSpecies = function () {
    return species;
  }

  this.setSpecies = function (value) {
    this.species = value;
  }

  this.getAge = function () {
    return age;
  }
  this.setAge = function (value) {
    this.age = value;
  }


  this.getPlantInfo = function () {
    return 'Name:' + this.getName() + '\n' + 'Description:' + this.getDescription() + '\n' + 'Species:' + this.getSpecies() + '\n' + 'Age:' + this.getAge() + '\n';
  }
}


function Fern(name, description, species, age, leaf_shape) {
  Plant.call(this, name, description, species, age);
  leaf_shape = leaf_shape;

  this.getLeaf_shape = function () {
    return leaf_shape;
  }

  this.setLeaf_shape = function (value) {
    this.leaf_shape = value;
  }
  this.getFernInfo = function () {
    return this.getPlantInfo() + 'Shape of List:' + this.getLeaf_shape() + '\n';
  }
}

function Spruce(name, description, species, age, cones_size) {
  Plant.call(this, name, description, species, age);
  cones_size = cones_size;

  this.getConesSize = function () {
    return cones_size;
  }

  this.setConesSize = function (value) {
    this.cones_shape = value;
  }
  this.getSpruceInfo = function () {
    return this.getPlantInfo() + 'Size of Cones:' + this.getConesSize() + '\n';
  }
}
function showInfo(){
  alert("Created");
}


var fern = new Fern('Paporotnik', 'blabla', 'Ferns', 12, 'Krugl');
console.log(fern.getFernInfo());
var spruce = new Spruce('Elochka', 'blabla', 'Сonifers', 12, '10cm');
console.log(spruce.getSpruceInfo());


