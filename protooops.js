var Person = function (firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  };
  
  Person.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.firstName + " " + this.lastName);
  };
  
  var person1 = new Person("Alice","Roy");
  var person2 = new Person("Bob","Smith");
  
  
  person1.sayHello(); 
  person2.sayHello(); 