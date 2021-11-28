function login() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    if (userName.length > 0 && password.length > 0) {
        (async () => {
            const rawResponse = await fetch('http://todoapi.mjclouds.com/v1/user/login', {
                method: 'POST',
                body: {
                    "user_name": userName,
                    "password": password,
                }
            });
            const content = await rawResponse.json();

            console.log(content);
            if (content.code == 2000) {
                window.location.href = "index.html";
            } else {
                alert('用户名不存在或者密码输入错误');
            }
        })();
    } else if (userName.length == 0) {
        alert("用户名不能为空")
    } else if (password.length == 0) {
        alert("密码不能为空")
    }
}