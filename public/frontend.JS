document.addEventListener("DOMContentLoaded", () => {
  // login and register pages elements
  let login = document.getElementById("login"),
    form = document.getElementById("form"),
    loginform = document.getElementById("loginform"),
    mainform = document.getElementById("mainform"),
    register = document.getElementById("register");

  let name, mail, number, username, password, repassword, hide;

  name = document.getElementById("name");
  mail = document.getElementById("mail");
  number = document.getElementById("number");
  username = document.getElementById("setusername");
  password = document.getElementById("setpassword");
  repassword = document.getElementById("repassword");
  hide = document.getElementById("hide");

  let err = document.getElementById('err');



  // login tutton
  login.addEventListener("click", () => {
    loginform.style.display = "flex";
    mainform.style.display = "none";
    form.appendChild(loginform);
    login.style.display = "none";
    register.style.display = "inherit";
  });

  // register button
  register.addEventListener("click", () => {
    loginform.style.display = "none";
    mainform.style.display = "flex";
    form.appendChild(mainform);
    register.style.display = "none";
    login.style.display = "flex";
  });

  let passworderr = document.getElementById('passworderr');

  const submit = document.getElementById("submit");

  repassword.addEventListener("change", () => {
    if (password.value === repassword.value) {
      submit.toggleAttribute("disabled");
      submit.style.opacity = "1";
    }else{
      passworderr.style.display = "block";
      passworderr.textContent = "password dosn't match";
    }
  });

  let user;

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    err.style.display = "none";

    user = {
      fullName: name.value,
      Email: mail.value,
      Number: number.value,
      userName: username.value,
      password: password.value,
    };

    fetch("/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
          return res.json();
      })
      .then((res) => {
        if(res.success!=true){
          let newmsg = res.massage.message;
          if(newmsg == undefined){
            err.style.display = "none";
          }
          else{
          let modmsg = newmsg.split("user validation failed: ")
          err.style.display = "block";
          err.textContent = "Note : " + modmsg;
          }
          if(res.massage.keyValue.Email == user.Email){
            err.style.display = "block";
            err.textContent = 'email already exist'
          }
          else if(res.massage.keyValue.Number == user.Number){
            err.style.display = "block";
            err.textContent = 'number already exist'
          }
          else if(res.massage.keyValue.userName == user.userName){
            err.style.display = "block";
            err.textContent = 'username already exist'
          }
        }
      else{
        console.log(res);
        form.innerHTML = `
          <div class="setfont" ><h2>Your Accout are Created</h2></div>
            <div class="display" >
              <div class="setfont" >
                <div> Full Name : ${res.user.fullName}</div>
                <div> E-mail : ${res.user.Email}</div>
                <div> number : ${res.user.Number}</div>
                <div> username : ${res.user.userName}</div>
              </div>
            </div>
              <h2 
              class="setfont"
              style="
              color : rgb(205, 255, 68);
              text-align: center;
              "
              
              >Now you can logIn here</h2>
        `
        setTimeout(() => {
          form.innerHTML = `
          `
        }, 5000)
        }})
      })

    let loginuser = document.getElementById('username'),
        loginpassword = document.getElementById('password'),
        signin = document.getElementById('signin'),
        logininfo,
        loginerr = document.getElementById('loginerr');

        loginpassword.addEventListener("change", ()=>{
          signin.style.opacity = "1";
          signin.toggleAttribute("dissabled");

        })


        signin.addEventListener("click",(e)=>{

          loginerr.style.display = "none";

          logininfo = {
            userormail : loginuser.value,
            password : loginpassword.value
          };

          if (loginuser.value == '' || loginpassword.value == '') {
            loginerr.style.display = "block";
            loginerr.textContent = "empty field is not acceptable";
          }
          else{
            fetch("/Login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(logininfo),
            })
          }
        });

  });
