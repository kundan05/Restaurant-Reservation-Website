function registration()
	{
        var uname= document.getElementById('username').value;
		var email= document.getElementById('email').value;
		var pwd= document.getElementById('pwd1').value;			
		
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(uname=='')
		{
			alert('Please enter the username.');
            return false;
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
            return false;
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
            return false;
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
            return false;
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
            return false;
		}
        else if (!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
            return false;
        }
		else if(document.getElementById("pwd1").value.length < 6)
		{
			alert ('Password minimum length is 6');
            return false;
		}
		else if(document.getElementById("pwd1").value.length > 12)
		{
			alert ('Password max length is 12');
            return false;
		}
		else
		{				                            
               alert('Thank You for SignIn & You are Redirecting to LogIn Page');
               return true;

		}
	}