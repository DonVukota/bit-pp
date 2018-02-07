var sum= 0;
var index=0;
var ress=0;

function args(a,b,c,d){
    for(i=0; i<arguments.length; i++){
       sum += arguments[i] 
       index = arguments.length;
   
       ress= sum/index;

    }
    return ress;

}
console.log(args(1,2,3,4))