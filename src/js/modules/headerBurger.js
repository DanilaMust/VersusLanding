export function headerBurger() { 
  const menu = document.querySelector(".header__bar");
  console.log(menu);
  const menuBtn = document.querySelector(".header__burger");
  const body = document.body;
  const headerLink = document.querySelectorAll(".header__link");
  const header = document.querySelector(".header");

  if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
      console.log(1);
      menu.classList.toggle("active");
      menuBtn.classList.toggle("active");
      body.classList.toggle("lock");
      header.classList.toggle("no-padding");
    });

    // body.addEventListener("click", () => {
    //   console.log(1);
    //   menu.classList.remove("active");
    //   menuBtn.classList.remove("active");
    //   body.classList.remove("lock");
    //   header.classList.remove("no-padding");
    // });

    headerLink.forEach((link) => {
      link.addEventListener("click", () => {
        console.log('w');
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        body.classList.remove("lock");
        header.classList.remove("no-padding");
      });
    });
  }
}