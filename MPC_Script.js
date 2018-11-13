var elem = document.getElementById("name");

function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
  this.year  = bornYear;
}

function bornYear() {
  return 2018 - this.age;
}

function printDetail() {
  elem.innerHTML = /*"Name: " +*/ p1.name // + "\nAge: " + p1.age + " (" + p1.year() + ")\nFavourite Colour: " + p1.favColor;
}

var p1 = new person(prompt("Please Enter Your Name: "), 46, "Blue");

printDetail();
