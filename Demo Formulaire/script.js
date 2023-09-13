
function login(){
    //const login = document.forms['loginForm'];
    const loginForm = document.loginForm;
    if(loginForm.username.value.trim() ===""){
        console.log('Wrong name');
        return;
    }
    if(loginForm.password.length < 6){
        console.log('Wrong password');
        return;
    }
    loginForm.submit();
    console.log('Ok');
}