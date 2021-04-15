
   
    var addUser = () => {
     //Email Id verification
     let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

  var x = document.myform.email.value;

  if (!regEmail.test(x)) {
        document.getElementById("errors").innerHTML = "Please enter a valid e-mail address"; // Indicate the error message
      }
      else{
        // Display the entries
         document.getElementById("errors").innerHTML=" ";
      var username = document.getElementById("name").value;
      var emailid = document.getElementById("email").value;
      document.getElementById("Name").innerHTML = username;
      document.getElementById("Email").innerHTML = emailid;
      }
      //  console.log("UserName:" + username + "   "  +  "EmailId:" +  emailid);
    }

    var deleteEntry = (Name, email) => {
      document.getElementById("Name").innerHTML = "";
      document.getElementById("Email").innerHTML = "";
        document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    }


  
