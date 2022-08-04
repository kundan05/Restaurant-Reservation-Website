function signin()
	{
		var uname = document.getElementById('username').value;
		var pwd = document.getElementById('pwd1').value;
		var filter = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		if(uname =='' || pwd == '')
		{
			alert("Please enter username or password");
			return false;
		}
		else if(!filter.test(pwd))
		{
			alert("Invalid password");
			return false;
		}
		else
		{
	alert('Thank You for LogIn & You are Redirecting to Menu page');
			true;
		}
	}