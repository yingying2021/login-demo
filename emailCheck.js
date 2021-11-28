
function emailCheck() {
    var email = document.getElementById("email").value;
    if (email.includes('@')) {
        document.getElementById("isEmailUsed").innerHTML = "";
        fetch('http://todoapi.mjclouds.com/v1/user/check/email/' + email)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(result.code);
                if (result.code == 2000) {

                } else {
                    document.getElementById("isEmailUsed").innerHTML = "邮箱号已经注册";
                }
            });
    } else {
        document.getElementById("isEmailUsed").innerHTML = "邮箱号不规范";
    }
}
