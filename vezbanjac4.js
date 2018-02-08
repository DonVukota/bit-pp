

function kolikoSlovaIma(rec,slovo) {

    var DuzinaReci=rec;
    var TrazenoSlovo=slovo;
    var counter = 0;
    
    for(var i=0;i<rec.length;i++){

        if(rec[i] === TrazenoSlovo){
         counter++;
        
         }
        }

    return counter;
}

var naseslovo = kolikoSlovaIma("darkouros","o");

console.log(naseslovo + 2);