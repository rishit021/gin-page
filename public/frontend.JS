document.addEventListener("DOMContentLoaded", () => {
  // login and register pages elements
  let login = document.getElementById("login"),
    form = document.getElementById("form"),
    loginform = document.getElementById("loginform"),
    mainform = document.getElementById("mainform"),
    register = document.getElementById("register")

  let name, mail, number, username, password, repassword, hide;

  name = document.getElementById("name");
  mail = document.getElementById("mail");
  number = document.getElementById("number");
  username = document.getElementById("setusername");
  password = document.getElementById("setpassword");
  repassword = document.getElementById("repassword");
  hide = document.getElementById('hide');


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

  const submit = document.getElementById("submit");

  repassword.addEventListener("change", () => {
    if (password.value === repassword.value) {
      submit.toggleAttribute("disabled");
      submit.style.opacity = '1';
    }
  });

  let user;

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    user = {
      fullName: name.value,
      Email : mail.value,
      Number : number.value,
      userName : username.value,
      password: password.value,
    };

    fetch("/sucsess", {
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
        form.innerHTML = `
          <div class="setfont" ><h2>Your Accout are Created</h2></div>
            <div class="display" >
              <div class="setfont" >
                <div> Full Name : ${res.name}</div>
                <div> E-mail : ${res.mail}</div>
                <div> number : ${res.number}</div>
                <div> username : ${res.username}</div>
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
      });
  });
});
