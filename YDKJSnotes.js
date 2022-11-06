function classroom(teacher) {
    return function study() {
        console.log(
            `${ teacher } says to study ${ this.topic }`
        );
    };
}
var assignment = classroom("Kyle");
var homework = {
    topic: "JS",
    assignment: assignment
};

homework.assignment();

var homework = {
    topic: "JS"
};

var otherHomework = Object.create(homework);
Object.prototype.test = "hey"

otherHomework.topic;   // "JS"

console.log(otherHomework.test)

function Person(first, last, age, gender, interests) {
    this.name = {first, last}
    this.age = age
    this.gender = gender
    this.interests = interests
}

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};

person1.farewell()
