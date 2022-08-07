
//named functions
function addnum(a,b)
{
      console.log("function addnum is called");
return a+b;
}
addnum(2,3);
var a=addnum(3,4);
console.log(a);

//anonimous functions
//no name
var add=function(a,b){
      console.log("anonimous function is called");
      return a+b;};
add(4,5);

setTimeout(function(a,b){console.log("timeout function is called")},10000);

//constructor
//its called when when an object is created using new keyword
var x=new Function("a","b","return a+b;")
var c=x(4,5);
console.log(c);

//self invoking function
(function(a)
{
      console.log("self invoking function");
      console.log(a*a);
})(10);

var add=(function(){
      var counter=0;
      return function(){return counter++;}
})();

//object creation
function createperson(){
var person={};
person.name="vishwas";
person.desig="student";
person.age="19";
return person;
}
console.log(createperson());
console.log(typeof (createperson().person));

var one1=new Object() ;
console.log(typeof one1);

function createperson2(){
      var person={};
      person['name']="vishwas";
      person['desig']="student";
      person['age']="19";
      return person;
      }
      console.log(createperson2().name);

// class person {
//       constructor() {
//             this.name = console.Writeline("enter your name");
//             console.writeline("user name is"+console.readline(this.name));
//             this.age = 19;
//       }
// }console.log(new person().name);

console.WriteLine("enter your name");
