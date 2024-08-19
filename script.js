const regName = document.getElementById("nameUser");
const regDept = document.getElementById("deptUser");
const regEmail = document.getElementById("emailUser");
const regUsername = document.getElementById("usernameUser");
const regPwd = document.getElementById("inputPassword5");
const regConfPwd = document.getElementById("inputPassword5toConfirm");
const regRole = document.getElementById("role");
const errorP = document.getElementById("error");

const logUsername = document.getElementById("exampleInputUsername1");
const logPassword = document.getElementById("exampleInputPassword1");

var users = [];

function validateRegistration() {
  const user = {
    registeredName: regName.value,
    registeredDept: regDept.value,
    registeredEmail: regEmail.value,
    registeredUsername: regUsername.value,
    registeredPwd: regPwd.value,
    registeredConfPwd: regConfPwd.value,
    registeredRole: regRole.value,
  };
  if (user.registeredRole === "NA") {
    alert("Please select a role !!");
    return false;
  }
  if (
    (user.registeredPwd === user.registeredConfPwd) &
    (user.registeredUsername === "kckallur40") &
    (user.registeredPwd === "admin123")
  ) {
    console.log(user);
    users.push(user);
    // alert("user registered successfully !!");
    return true;
  }
  alert("Passwords do not match / username incorrect !!");
  return false;
}

function validateLogin() {
  var uname = logUsername.value;
  var pwd = logPassword.value;
  if ((uname === "kckallur40") & (pwd === "admin123")) {
    // console.log(uname);
    // console.log(pwd);
    window.open("mainPage.html");
    return true;
  } else {
    alert("incorrect credentials !!");
    return false;
  }
}
