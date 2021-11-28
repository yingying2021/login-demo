function pwdSame() {
    var pwd = document.getElementById("password").value;
    var rePwd = document.getElementById("rePassword").value;
    if (pwd != rePwd) {
        document.getElementById("isPwdSame").innerHTML = "密码不一致";
    } else {
        document.getElementById("isPwdSame").innerHTML = "";
    }
}