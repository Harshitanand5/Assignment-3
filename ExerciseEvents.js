/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

function attach(x,y,z)
{
  let elm =document.createElement("h4");
let name=document.createTextNode(x);
elm.appendChild(name);
let usr=document.getElementById(y);
let user=document.getElementById(z)
usr.insertBefore(elm,user);

}
attach("Username","usr","username");
attach("Password","pass","password");
attach("Confirm Password","cpass","confirmPassword");
/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
function required(x)
{
  let user=document.getElementById(x).required=true;

}
required("username");
required("password");
required("confirmPassword");

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/



btn.addEventListener("click",()=>{
  let x= document.getElementsByName("Password")[0].value;
  let y= document.getElementsByName("cPassword")[0].value;
  if(x==y){
    alert("successful user registration");
  }
  else {alert("Both password are not same")}
});




/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/
let button = document.querySelector('button');
button.disabled=true;
let x=document.getElementById('username');
let y=document.getElementById('password');
let z=document.getElementById('confirmPassword');
z.addEventListener('keyup',()=>{
  if( z.length!=0)
  {
    button.disabled=false;
  }
  
    
  
});



/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
/// i have attached its answer in 3 check from there
