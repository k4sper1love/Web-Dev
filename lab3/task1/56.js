function readNumber(){
    while(true){
        let num = prompt("Введите число", '');
        if(isFinite(num)){
            if(num === null || num === '') continue;
            break;
         }
    }
}