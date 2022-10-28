function checkly(){ 
    
      var leapyear= document.getElementById('leapyear').value
        
        console.log(leapyear)

        if((0==leapyear % 4) && (0 != leapyear % 100 ) || (0 == leapyear % 400)){

            document.getElementById('output').innerHTML="leapyear yes";
        }
        else{
            document.getElementById('output').innerHTML="leapyear no";
            
        }
}