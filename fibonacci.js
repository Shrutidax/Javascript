const fibonacci = function (count) {
    if (count < 0) return "Sorry!";
    if (count === 0) return 0;
    let a = 0;
    let b = 1;
        for (let i = 1; i < count; i++) {
            const temp = b;
            console.log(a)
            b = a + b;
            a = temp; 
        }
    console.log(b)
    return b;
  };
  
  fibonacci(10)
  module.export = fibonacci;