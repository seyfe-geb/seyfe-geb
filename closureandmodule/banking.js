

window.onload= function(){

  
  let accountInfoList=[];
  var bank= (function(){

    var name;
    var balance;
    function createAccount(){
    
      name= document.getElementById("actName").value;
      balance=document.getElementById("depo").value;
      if(name=="" || balance==""){
        return null;
      }
      return{
        accname: name,
        deposit: balance
      }
    
    }
  
    return {
      account: function(){

        return createAccount();
        
      }
    }
  
  }());


  var btn= document.getElementById("newAct");
  btn.onclick= acctData;
  
  function acctData(){

    var ac= bank.account();
    if (ac==null){
      alert("Please enter account name and deposit ");
      return;}

    accountInfoList[accountInfoList.length]=ac;
    
    allAccts();

  }

  function allAccts(){
    var allAcc="";
    accountInfoList.forEach(function(item, index, array) {
      allAcc+= "Account Name: "+ item["accname"] + "   Balance: "+ item["deposit"]+"\n";
    })
  
    document.getElementById("txtAr").innerHTML= allAcc;


  } 
} 
  
  

