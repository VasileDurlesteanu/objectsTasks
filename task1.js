// Hello, object

let user = {
  name: "Jhon",
  surname: "Smith",
};

user.name = "Pete";

delete user.name;


//Solution

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;