// ==================== CARROSSEL ====================
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// ==================== MODAL DE LOGIN ====================
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ==================== MENU LATERAL / SIDEBAR ====================

const showMenu = document.getElementById("showMenu");
const sidebar = document.querySelector(".sidebar");

showMenu.addEventListener("click", () => {
  sidebar.classList.toggle("ocult-sidebar");
});

const subMenus = document.querySelectorAll(".sub-menu"),
  buttons = document.querySelectorAll(".sidebar ul button");

const onClick = (item) => {
  subMenus.forEach((menu) => (menu.style.height = "0px"));
  buttons.forEach((button) => button.classList.remove("active"));

  if (!item.nextElementSibling) {
    item.classList.add("active");
    return;
  }

  const subMenu = item.nextElementSibling,
    ul = subMenu.querySelector("ul");

  if (!subMenu.clientHeight) {
    subMenu.style.height = `${ul.clientHeight}px`;
    item.classList.add("active");
  } else {
    subMenu.style.height = "0px";
    item.classList.remove("active");
  }
};

