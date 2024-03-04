
document.addEventListener("DOMContentLoaded", function () {
    const openMenuBtn = document.querySelector(".openmenu_btn");
    const closeMenuBtn = document.querySelector(".closeMenu_Button");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    console.log(btn);
});


    const headerOnLoad = document.getElementById("header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        headerOnLoad.style.transition = "background-color 0.3s ease-in-out";
        headerOnLoad.style.backgroundColor = "#333333";
      } else {
        headerOnLoad.style.transition = "background-color 0.3s ease-in-out";
        headerOnLoad.style.backgroundColor = ""; // or set it to the default color when scrolled to the top
      }
    });

  
    const userLogo = document.getElementById("user");
    const loginText = document.getElementById("loginText");
    const signupText = document.getElementById("signupText");
    userLogo.addEventListener("click",function(){
      loginText.classList.toggle("hide");
      signupText.classList.toggle("hide");
    });



    loginText.addEventListener("click", function () {
      window.location.href = "login.php";
  });
  signupText.addEventListener("click", function () {
    window.location.href = "signup.php";

  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const multiOptionBtn = document.getElementById("multiOptionBtn");

    window.scrollToTop = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    window.scrollToSection = function (selector) {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    window.closeWindow = function () {
      multiOptionBtn.classList.toggle("hide");
      backToTopBtn.style.display = "block";
    };

    const backToTopBtn = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
            multiOptionBtn.classList.add("hide");
        } else {
            backToTopBtn.style.display = "none";
        }
    });
    window.toggleOptions = function () {
        multiOptionBtn.classList.toggle("hide");
        backToTopBtn.style.display = "none";
    };

});
