function Cvalid()
	{
        var uname= document.getElementById('name').value;
		var email= document.getElementById('email').value;
		// var pwd= document.getElementById('pwd1').value;			
		
		
        //email id expression code
		// var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(uname=='')
		{
			alert('Please enter the name.');
            return false;
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
            return false;
		}
		else if(email=='')
		{
			alert('Please enter your email id');
            return false;
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
            return false;
		}

        else
		{				                            
               alert('Thank You for Making A Reservation');
               return true;

		}
	}