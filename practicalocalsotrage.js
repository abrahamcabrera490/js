'use strict'

var frm =document.querySelector("#frmp");


frm.addEventListener('submit', function(){
 console.log("Se ejecuto Function");
 
    var p = document.querySelector("#pelicula").value;
    if(p.length >=1)
    {
    localStorage.setItem(p,p);
}
else{
    alert("No mandaste valor");
}
});


var ul = document.querySelector("#p-list");
for(var i in localStorage){
    var li = document.createElement("li");
  if(typeof localStorage[i] == 'string'){
    li.append(localStorage[i]);
ul.append(li);

}
}