var Person=function(firstname,lastname,age)
{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
};

var person1=new Person('mark','reid',35);
var person2=new Person('shane','austin',38);

console.log('person details:'+ person1.firstname + person1.lastname + ' and age is'+ person1.age);
console.log('person details:'+ person2.firstname + person2.lastname + ' and age is'+ person2.age);

