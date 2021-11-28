function submit() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var recode = document.getElementById("recode").value;
    var isRigister = document.getElementById("isRigister").value;
    var isEmailUsed = document.getElementById("isEmailUsed").value;
    var isPwdSame = document.getElementById("isPwdSame").value;
    if (isRigister == null && isEmailUsed == null && isPwdSame == null
        && userName.length > 0 && email.length > 0 && password.length > 0 &&
        phone.length > 0 && recode > 0) {
        (async () => {
            const rawResponse = await fetch('http://todoapi.mjclouds.com/v1/user/register', {
                method: 'POST',
                body: {
                    "user_name": userName,
                    "password": password,
                    "email": email,
                    "phone": phone,
                    "code": recode
                }
            })
            const content = await rawResponse.json();
            console.log(content);
            if (content.code == 2000) {
                window.location.href = "login.html";
            } else {
                alert(content.message);
            }

        })();
    } else {
        alert("注册信息错误");
    }

}