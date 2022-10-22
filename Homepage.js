function Homepage() {


    var firstname= parseInt(document.getElementById('firstname').value)
    var secondname= parseInt(document.getElementById('secondname').value)
    x= firstname + secondname;
    
    console.log(x)
   document.getElementById('result').innerHTML=x;
}
function Homepage1() {


    var firstname= parseInt(document.getElementById('firstname').value)
    var secondname= parseInt(document.getElementById('secondname').value)
   
    y= firstname - secondname;
   
  
       
    console.log(y)
   document.getElementById('result').innerHTML=y;
}


