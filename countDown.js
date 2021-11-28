function begin() {
    var phoneNum = document.getElementById("phone").value;
    console.log(phoneNum);
    if (phoneNum.length == 11) {
        fetch('http://todoapi.mjclouds.com/v1/user/register/code/' + phoneNum)
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
        var timeleft = 180;
        var downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("btn").innerHTML = "重新发送";
                document.getElementById("btn").disabled = false;
            } else {
                document.getElementById("btn").innerHTML = timeleft + "s后重新发送";
                document.getElementById("btn").disabled = true;
            }
            timeleft -= 1;
        }, 1000);
    } else {
        alert("手机号格式不规范");
    }
}