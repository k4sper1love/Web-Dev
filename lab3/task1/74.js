function Calculator(){
    this.methods = {
        "-": (a,b) => a - b,
        "+": (a,b) => a + b
    };

    this.calculate = function(str){
        let arr = str.split(' ');
        if(!this.methods[arr[1]] || isNaN(+arr[0]) || isNaN(+arr[2])){
            return NaN;
        }
        return this.methods[arr[1]](+arr[0], +arr[2]);
    }

    this.addMethod = function(name, func){
        this.methods[name] = func;
    }
}