/* The purpose of this project is to show how to create objects in JavaScript */

// Object "menu"
const menu = {
  _courses: { // empty arrays of each of the courses in a 3 course meal
    appetizers: [],
    mains: [],
    desserts: []
  },
  
  // Getter and setter methods
  get appetizers() {
    return this._courses.appetizers;
  },
  
  set appetizers(appetizerIn) {
    return this._courses.appetizers - appetizerIn;
  },
  
  get mains() {
    return this._courses.mains;
  },
  
  set mains(mainIn) {
    return this._courses.mains - mainIn;
  },
  
  get desserts() {
    return this._courses.desserts;
  },
  
  set desserts(dessertIn) {
    return this._courses.desserts - dessertIn;
  },
  
  get courses() {
    return {
    appetizers: this.appetizers, 
    mains: this.mains, 
    desserts: this.desserts
    }; 
  },

// Method to add a dish to a course
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },

// Method to simulate a random customer ordering a random 3 course meal
  getRandomDishFromCourse: function(courseName) {
    const dishes = this._courses[courseName];
    const dishIndex = Math.floor(Math.random() * dishes.length);
    return dishes[dishIndex];
  },

// Method to simulate a random customer ordering a random 3 course meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return`The total price for ${appetizer.name}, ${main.name}, and ${dessert.name} is $${totalPrice}`
  }
}; // End object 

// Let's test out object menu
menu.addDishToCourse('appetizers', 'Spinach and Artichoke Dip ', 13);
menu.addDishToCourse('appetizers', 'Mussels with Spicy Mayo', 6);
menu.addDishToCourse('appetizers', 'Tuna Tartare', 15);

menu.addDishToCourse('mains', 'Spaghetti with Meatballs', 20);
menu.addDishToCourse('mains', 'Pizza', 17);
menu.addDishToCourse('mains', 'Chicken Wings Meal', 15);

menu.addDishToCourse('desserts', 'Chocolate Love-a Cake', 10);
menu.addDishToCourse('desserts', 'Cannoli', 5);
menu.addDishToCourse('desserts', 'Cappuchino', 3);

// Log the meal to the console 
let meal = menu.generateRandomMeal();
console.log(meal);
