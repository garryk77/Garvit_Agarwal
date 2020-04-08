document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById("amount").addEventListener("input",calculator);
    document.getElementById("rate").addEventListener("change",ChangeCurreny);
  
    function calculator(){
         let amount = document.getElementById("amount").value;
         let rate = document.getElementById("rate").value;
         
      if(rate == "select"){
             document.getElementById("amountinr").setAttribute("placeholder","please select currency");
      }else{
         let compute = amount * rate;
         
        document.getElementById("amountinr").value = compute;
      }
    }
    
    function ChangeCurreny(){
      let rate = document.getElementById("rate").value;
      let amount = document.getElementById("amount").value;
      
   
      let compute = rate * amount;
        document.getElementById("amountinr").value = compute.toFixed(2);
        
      
    }
    
    

    let menu = document.querySelectorAll('select');
     M.FormSelect.init(menu,{});
     
  });