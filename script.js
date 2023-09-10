$( function(){

    function validation(){
        var name =document.getElementById("name").value;
        var pass =document.getElementById("mail").value;
    

       if(name == ""){
        document.getElementById('myName').innerHTML="Please Enter Your Name";

        return false;
      }

      if(mail == ""){
        document.getElementById('myMail').innerHTML="Please Enter Your Email";
        return false;
      }

    }
}

);