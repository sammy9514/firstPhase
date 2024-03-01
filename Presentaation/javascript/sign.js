const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function Validation(){
	var email = "Ogunyemiayomide700@gmail.com"
	var password = "123456"
	var Email = document.getElementById("email").value;
	var Password = document.getElementById("password").value;

if((email === Email) && (password === Password)){
 swal({
	title:`welcome back ${email}`,
	text:"Focus",
	type:"success"
 },
 function(){
	window.location = "../html/home.html"
 })
}else{
	swal({
	title:`wrong input`,
	text:"Focus",
	type:"error"
 })
}  
}