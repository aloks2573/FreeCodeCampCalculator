$(document).ready(function()
                {
  //strore input to calculate later;
 var inputs=[""];
  var totalString;
  var operators1=["+","-","/","*"];
  var operators2=["."];
  var nums=[0,1,2,3,4,5,6,7,8,9];

  //numbers for validations
 
  function getValue(input){
    if(operators2.includes(inputs[inputs.length-1]===true && input==="."))
      {
        console.log("Dublicate '.' ");
      }
    else if(inputs.length===1 && operators1.includes(inputs)===false)
      {
        inputs.push(input);
      }
    
    
    
    
    else if(operators1.includes(inputs[inputs.length-1])===false)
      {
        inputs.push(input);
      }
    
    
    else if(nums.includes(Number(input)))
      {
        inputs.push(input);
      }
    
    update();
  }
  
  
  
  function update()
  {
   totalString=inputs.join("");
  
    if(totalString.length > 11){
      alert("Sorry no more input is allowed Ёпте :)");
      inputs=[""];
      update();

    }
    
    
    $("#steps").html(totalString);
    
   
    
  }
  
  
  
  function getTotal()
  {
    totalString=inputs.join("");
   
    $("#steps").text((eval(totalString)).toFixed(2));
  }
  
  function squireroot(val)
  {
    var original=Math.sqrt(val);
    var result = Math.round(original*1000)/1000;
    $('#steps').css('font-size','30px');
    $("#steps").html(eval(result))
  }
  
  function squire(i)
  {
    var original=Math.pow(i,2);
       var result = Math.round(original*1000)/1000;
    
    $("#steps").html(eval(result))
    
    
    
    
  
  }
  
  
  
  
  $("a").on("click",function()
           {
    if(this.id==="deleteall")
      {
        inputs=[""];
        update();
      }
    else if(this.id==="backone")

      {
        inputs.pop();
        update();
      }
    else if(this.id==="total")
      {
        getTotal();
      }
    else if(this.id==="√")
      {
        squireroot(totalString);
      }
    else if(this.id==="x2")
      {
        squire(totalString);
      }
     else if(this.id==="nop")
       {
         update();
       }
    else
      {
        if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
        getValue(this.id);}
           else
           {
            getValue(this.id);
           }
      }
  });
  
});