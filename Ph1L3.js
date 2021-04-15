
   
    var addUser = () => {
     //Email Id verification
      var x = document.myform.email.value;
      var atposition = x.indexOf("@");
      var dotposition = x.lastIndexOf(".");
      if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
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


  
