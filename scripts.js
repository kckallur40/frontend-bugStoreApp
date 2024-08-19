const loginUname = document.getElementById("username-inp");
const loginPwd = document.getElementById("pwd-inp");
const regName = document.getElementById("name-inp");
const regDept = document.getElementById("dept-inp");
const regEmail = document.getElementById("email-inp");
const regUname = document.getElementById("uname-inp");
const regPwd = document.getElementById("reg-pwd-inp");
const regConfPwd = document.getElementById("reg-conf-pwd-inp");
const regRole = document.getElementById("role");

function validateLogin(){
    var username = loginUname.value;
    var pwd = loginPwd.value;

    if(username === "admin" & pwd === "admin123") {
        alert('logged in successfully !!');
        window.open("mainPage.html");
        return true;
    }
    else if(username === "tester" & pwd==="tester123"){
        alert("logged in successfully !!");
        window.open("tester.html");
    }else if(username==="dev" & pwd === "dev123"){
        alert("logged in successfully !!");
        window.open("dev.html");
    }
    else{
        alert('username or password incorrect !!');
        return false;
    }
}

function validateRegistration(){

    var regPwd1 = regPwd.value;
    var regConfPwd1 = regConfPwd.value;

    if(regConfPwd1 === regPwd1){
        alert("registration successful !!");
        window.open("index.html");
        return true;
    }
    else{
        alert("passwords not matching !!");
        return false;
    }

}

function addProject(){
    window.open("addProject.html");
}