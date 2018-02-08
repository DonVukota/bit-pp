
// function moja(a) {

//     var star = "*";
//     var prazanString = "";
//     var praznoMesto = " ";

//     for (var t = 0; t < a;a++) {

//         if (t == 1 || t == a) {

//             for (var i = 0; i < a; i++) {
//                 star += prazanString;
//             }
//         } else{
            
//             prazanString +=

//         }
//     }

//     return prazanString;

// }
// console.log(moja(5));

function brojPuta(a){
    var kolone = "";
    var star = "*";
    for(var t=0;t<a;t++){
        kolone += star ;
    }
    return kolone;
}

// "*****\n*    *\n*   *\n*    *\n*****"

console.log(brojPuta(5));

function firstAndLast(a){
    
    var zvezdica = "";
    for(var i=0;i<a;i++){
        if(i==0 || i==a-1){
            zvezdica += "*";
        } else{
            zvezdica += " ";
        }
    }
    return zvezdica;
}

console.log(firstAndLast(5));

function uros(a){
   
    i = 0;
    i++;
        if(z==0 && z==a-1){
            brojPuta(a);
        } else{
            firstAndLast(a);
        }
    
}

// console.log(uros(6));