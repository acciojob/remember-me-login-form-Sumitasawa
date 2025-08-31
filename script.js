//your JS code here. If required.
const userNameinput=document.getElementById("username");
const userPasswordinput=document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");


const savedUsername=localStorage.getItem('username');
const savedUserpassword=localStorage.getItem('password');

if(savedUsername && savedUserpassword){
	existingBtn.style.display="block";
}

form.addEventListener("submit",function (e) {
	e.preventDefault();

	const username=userNameinput.value;
	const password=userPasswordinput.value;

	alert("Logged in as " + username);

	if(checkbox.checked){
		 localStorage.setItem("username", username);
	    localStorage.setItem("password", password);
	}else{
		 localStorage.removeItem("username");
    localStorage.removeItem("password");
	}


	
	 if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
		 
  } else {
    existingBtn.style.display = "none";
  }
});


existingBtn.addEventListener("click",function () {
	 const storedUser = localStorage.getItem("username");
  if (storedUser) {
    alert("Logged in as " + storedUser);
  }
})
