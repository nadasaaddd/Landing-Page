window.addEventListener("load", function () {
  //----------------------nav builder-----------------------------

  // get navbar elements
  const navbar = document.getElementById("navbar__list");
  //get all sections
  const sections = document.querySelectorAll("section");
  // track of navbar items for active state (later)
  const navItems = [];
  // loop for each section
  sections.forEach((section) => {
    //declare varialbles
    const id = section.id;
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    //add class to anchor
    link.classList.add("menu__link");
    //add content to achor
    link.textContent = section.getAttribute("data-nav");
    //build navbar
    listItem.appendChild(link);
    navbar.appendChild(listItem);
    //scrolling to the selected section
    link.href = `#${id}`;
    // Add link element to navItems array for active state tracking (later)
    navItems.push({ link, section });
  });

  //-------------------------active state--------------------------
  //create scrolling event
  window.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      //loop on rect dimensions
      if (rect.top <= 150 && rect.bottom >= 150) {
        //add active class - section
        section.classList.add("your-active-class");
        // Add active class - nav item
        navItems[index].link.classList.add("active");
      } else {
        //Remove active class from section
        section.classList.remove("your-active-class");
        // Remove active class from nav item
        navItems[index].link.classList.remove("active");
      }
    });
  });
  //-------------------------Navbar display on scrolling--------------------------

  let timeoutId;
  window.addEventListener("scroll", () => {
    //clear timeout
    clearTimeout(timeoutId);
    navbar.classList.remove("hidden");
    //hide function
    timeoutId = setTimeout(() => navbar.classList.add("hidden"), 2000);
  });

  //-------------------------scroll to top btn--------------------------

  const ToTopBtn = document.getElementById("scrollToTopBtn");
  //add show class
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      ToTopBtn.classList.add("show");
    } else {
      ToTopBtn.classList.remove("show");
    }
  });
  //btn action
  ToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
