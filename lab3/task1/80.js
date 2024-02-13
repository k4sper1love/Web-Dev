function unique(arr) {
    let uniqArr = [];
    for(let elem of arr){
        if(!uniqArr.includes(elem)){
            uniqArr.push(elem);
        }
    }
    return uniqArr;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O