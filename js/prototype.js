'use strict';
var Human = function(options) {
    this.name = options.name || 'zoe';
    this.age = options.age || 12;
    this.gender = options.gender || 'femail';
    this.growth = options.growth || 150;
    this.weigth = options.weigth || 40;
};

var Worker = function(options) {
    this.profession = options.profession || 'librarian';
    this.salary = options.salary || 300;
    for (var key in options) {
        this[key] = options[key];
    }
};

Worker.prototype = new Human({});
Worker.prototype.work = function() {
    alert('I\'m work');
};

var Student = function(options) {
    this.institution = options.institution || 'nu lp';
    this.stipend = options.stipend || 200;
    for (var key in options) {
        this[key] = options[key];
    }
};

Student.prototype = new Human({});
Student.prototype.watchTV = function() {
    alert('I\'m watch TV');
};

var vlada = new Worker({
    name: 'vlada'
    profession: 'nurse'
});
var olga = new Worker({
    name: 'olga',
    salary: 500
});
var zoe = new Student({
    age: 20
});
var jack = new Student({
    name: 'jack',
    gender: 'male',
    age: 26
});

var show = function() {
    for (var i = 0; i < arguments.length; i++) {
        console.log('---------' + arguments[i].name + ':');
        for (var key in arguments[i]) {
            console.log(key + ': ' + arguments[i][key]);
        }
    }
};

show(vlada, olga, zoe, jack);
