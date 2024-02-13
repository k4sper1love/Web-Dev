function sumInput(){
    let arr = [];
    do {
        let num = prompt('numb', '');
        if(!isFinite(num) || num === '') break;
    } while(true);
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}