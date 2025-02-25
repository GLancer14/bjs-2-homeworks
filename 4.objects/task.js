function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const students = [
  new Student("Peter", "male", 23),
  new Student("John", "male", 21),
  new Student("Mary", "female", 20),
  new Student("Ann", "female", 21),
];

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  }

  return this.marks.reduce((acc, item, index, arr) => (index !== arr.length - 1) ? (item + acc) : ((item + acc) / arr.length));
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
