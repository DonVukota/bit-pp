


function NadjiPoziciju(rec) {
    var NasaRec=rec;
    var slovo = "a";
    

    for(var i=0;i<NasaRec.length;i++){
        if(NasaRec[i]===slovo){
            
            break;
            
        }
        
    }
    
    return i;

   

}
console.log(NadjiPoziciju('milena'));