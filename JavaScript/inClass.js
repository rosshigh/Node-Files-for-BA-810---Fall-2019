function checkHoisting() {
    console.log(foo); // ReferenceError
    let foo = "Foo";
    console.log(foo); // Foo
  }
  
  checkHoisting();
  
  