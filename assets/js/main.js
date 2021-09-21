
let register = document.getElementById("auth-form__container");
let isAuthent = false;
function authentication(){
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var Confirmpassword= document.getElementById("Confirmpassword").value;
    if(username ===""||password ===""||Confirmpassword===""){
        isAuthent =true;
        alert("Vui lòng đăng nhập Email và xác nhận mật khẩu của bạn để hoàn tất đăng ký.") 
    }else{
        document.getElementById("auth-form__container").style.display = "none";
    }
    console.log(username,password)
}

let isShowLoginForm = false;
/* const modal = document.getElementById('.modal') */
function showRes(){
    isShowLoginForm = !isShowLoginForm;
    if(isShowLoginForm){
        document.getElementById("modal").style.display = "flex";
        document.getElementById("modallogin").style.display = "none";
    } else {
        document.getElementById("modal").style.display = "none";
    }
   
}
/** Login */
let login = document.getElementById("form-login");
let isLogin = false;
function loginauthentication(){
    var usernamelogin= document.getElementById("usernamelogin").value;
    var passwordlogin= document.getElementById("passwordlogin").value;

    if(usernamelogin =="admin"&&passwordlogin =="admin"){
        isLogin = true;
        document.getElementById("form-login").style.display = "none";
      
    } else if(usernamelogin ===""||passwordlogin ===""){
        alert("Vui lòng nhập tài khoản mật khẩu")        
    } else{
        alert("Sai tài khoản hoặc mật khẩu.") 
    }
    console.log(usernamelogin,passwordlogin)
}

let isShowLogin = false;
function ShowFormLogin(){
    isShowLogin = !isShowLogin;
    if(isShowLogin){
        document.getElementById("modallogin").style.display = "flex";
        document.getElementById("modal").style.display = "none";
    } else{
        document.getElementById("modallogin").style.display = "none";
    }
   
}
