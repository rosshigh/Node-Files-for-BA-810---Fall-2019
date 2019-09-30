function Student(name, grades){
  this.name = name;
  this.grades = grades ? grades : [];

  this.addGrade = function(grade){
    this.grades.push(grade);
  }

  this.totalGrades = function(){
    let total = 0;
    this.grades.forEach(item => {
      total += item;
    });

    return total;
  }

  this.averageGrades = function(){
    if(this.grades.length > 0){
      return this.totalGrades() / this.grades.length;
    } else {
      return 0;
    }
  }
}

let student1 = new Student('Sally', [100,75]);
console.log(student1.name + "'s average is " + student1.averageGrades());
student1.addGrade(100);
console.log(student1.averageGrades());
