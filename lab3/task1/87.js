let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650

  function sumSalaries(obj){
    let sum = 0;
    for (let salyara of Object.values(obj)){
        sum += salyara;
    }
    return sum;
  }