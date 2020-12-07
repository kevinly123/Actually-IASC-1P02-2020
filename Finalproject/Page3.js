var groups = {};

document.addEventListener("DOMContentLoaded", function(){
  groups.name = document.getElementById('name');
  groups.email = document.getElementById('email');
  groups.memesxd = document.getElementById('memesxd');
})

function notEmpty(value){
  if (value == null || typeof value == 'undefined') return false;

  return (value.length > 0);
}

function groupsValidation(groups, notEmpty){
  if (groups == null) return false;

  let isGroupsValid = notEmpty(groups.value)
  if (!isGroupsValid){
    groups.className = 'placeholderRed';
  } else{
    groups.className = '';
  }

  return isGroupsValid;
}

function isValid(){
  var valid = true;

  valid &= groupsValidation(groups.name, notEmpty);
  valid &= groupsValidation(groups.email, notEmpty);
  valid &= groupsValidation(groups.memesxd, notEmpty);

  return valid;
}

class User {
  constructor (name, email, memesxd)
{
this.name = name;
this.email = email;
this.memesxd = memesxd;
}
}

document.getElementById("name").placeholder = "Name";
document.getElementById("email").placeholder = "E-mail";
document.getElementById("memesxd").placeholder = "Memesxd";
document.getElementById("concerns").placeholder = "Questions/Feedback/Suggestion/Subscribe";

function send() {
  if (isValid()){
    let user1 = new User(name.value, email.value, memesxd.value);

    alert('Thanks for your response!')
  } else{
    alert("Unfortunately, your posting did not go through. Please Try Again.")
  }
}

//Source: https://www.codebrainer.com/blog/contact-form-in-javascript//
