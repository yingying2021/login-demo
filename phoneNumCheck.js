
function phoneNumCheck() {
    var phoneNum = document.getElementById("phone").value;
    document.getElementById("btn").disabled = true;
    if (phoneNum.length == 11) {
        console.log('http://todoapi.mjclouds.com/v1/user/check/phone/' + phoneNum);
        document.getElementById("isRigister").innerHTML = "";
        fetch('http://todoapi.mjclouds.com/v1/user/check/phone/' + phoneNum)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                console.log(result.code);
                if (result.code == 2000) {
                    document.getElementById("btn").disabled = false;
                } else {
                    document.getElementById("isRigister").innerHTML = "手机号已经注册";
                }
            });
    } else {
        document.getElementById("isRigister").innerHTML = "手机号不规范";
    }
}
