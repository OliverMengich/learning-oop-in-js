const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function(){
        console.log('draw');
    }
};
console.log(circle)
//===========   Factory Function  ======================================================
function createCircle(){
    return  {
        radius: 1,
        draw: function(){
            console.log('draw new circle');
        }
    };
}
const newcircle = createCircle();
newcircle.draw();

//==================== Using Constructors =============---------------------------=================
//using constructors
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
Circle.call({},1);
//const anotherCircle = new Circle(1);
const Circle1 = new Function('radius',`
this.radius = radius;
this.draw = function() {
    console.log('drawing');
}
`);
//const circle1 = new Circle1(1);

//===========================Primitive vs reference types=======================================================
let x1 = 20;
let y1 = x1;
x1=3;
// outputs x1 as 3 and y1=20;
let x2 = {value: 20}
let y2=x2;
x2={value: 3}
// outputs x2=y2=3; becauses they store a reference og the value oand not the value itself

//=====================
//=========primitive types are coppied by their values
let num=10;
function increase(num){
    num++;

}
increase(num);
console.log(num);
//=========reference types are copied by their reference
let obj = { value: 10 }
function increase1(obj) {
    obj.value++;
}
increase1(obj);
console.log(obj)

//=================================ADDING AND REMOVING PROPERTIES===================
const drawcircle = new Circle(10);
const propertyName = 'location';
drawcircle[propertyName] = {x: 1};
//delete drawcircle.location;
console.log(drawcircle);

// -===============================Enumerating properties =====
for (let key in drawcircle){
    if(typeof circle[key] !== 'function')
        console.log(key, drawcircle[key]); // returns the keys in the drawcircle
}
const drawcircleKeys = Object.keys(drawcircle);
console.log('keys of drawcircle are', drawcircleKeys);
// find if object has given property
if('radius' in drawcircle){
    console.log('circle has a radius')
}
//================================Abstractions in OOP=========================
// Hiding from consumers of our function. private properties
function Circle2(radius){
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 }
    let computeOptimumLocation = function(factor) {

    }
    // using getters and setters
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    this.draw = function() {
        computeOptimumLocation(4);
    }
    Object.defineProperty(this, 'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid Location.');
            defaultLocation = value;
        } 
    })
}
const newf = new Circle2(2);
console.log(newf);