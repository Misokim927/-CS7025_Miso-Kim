// ----------------Homepage ---------------- //
// Typing Animation
document.addEventListener("DOMContentLoaded", () => {
  const homeHeroTitle = document.querySelector(".home-hero-title");
  const homeHeroSubtitle = document.querySelector(".home-hero-subtitle");

  if (homeHeroTitle) {
    new TypeIt(homeHeroTitle, { speed: 25, loop: false })
      .type(" ")
      .pause(1000)
      .go();
  }

  if (homeHeroSubtitle) {
    new TypeIt(homeHeroSubtitle, { speed: 25, startDelay: 2000, loop: false })
      .type(" ")
      .pause(1000)
      .go();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutMeParagraph = document.querySelector("#aboutMeParagraph");

  if (aboutMeParagraph) {
    new TypeIt(aboutMeParagraph, {
      speed: 40,
      startDelay: 2000,
      loop: false,
    })
      .type("")
      .pause(100)
      .go();
  }
});

// ---------------- Scroll Trigger ---------------- //
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-scroll-trigger]");

  function runRemoveTextBlocker(element) {
    const blockers = element.querySelectorAll(".text-blocker");
    blockers.forEach((blocker) => {
      blocker.classList.add("reveal");
    });
  }

  function handleScroll() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.remove("move--from-right");
        runRemoveTextBlocker(section);
      }
    });
  }

  sections.forEach((section) => {
    section.classList.add("move--from-right");
  });

  window.addEventListener("scroll", handleScroll);
});

//---------------- Project ----------------//
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-fade-up");

  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);

  scrollElements.forEach((el) => {
    el.classList.add("before-scroll");
  });
});

//----------p.sub---------------//
document.addEventListener("DOMContentLoaded", () => {
  const projectDescription = document.querySelector(".project-description");
  const projectRole = document.querySelector(".project-role");

  if (projectDescription) {
    new TypeIt(projectDescription, {
      speed: 30,
      startDelay: 10,
      loop: false,
    })
      .type("")
      .pause(500)
      .go();
  }

  if (projectRole) {
    new TypeIt(projectRole, {
      speed: 50,
      startDelay: 6000,
      loop: false,
    })
      .type("")
      .pause(500)
      .go();
  }
});

//--------------AboutMe-------------//
document.addEventListener("DOMContentLoaded", () => {
  const AboutMeDescription = document.querySelector(".description");
  if (AboutMeDescription) {
    new TypeIt(AboutMeDescription, {
      speed: 30,
      startDelay: 10,
      loop: false,
    })
      .type("")
      .pause(500)
      .go();
  }
});

//-----------Cookie-------------//
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

//--------------------------
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;

  if (currentPage.includes("homepage.html")) {
    const userVisited = getCookie("visited");

    if (!userVisited) {
      alert("Welcome to our website!");
      setCookie("visited", "true", 7);
    } else {
      console.log("Welcome back!");
    }
  }
});

window.addEventListener("beforeunload", () => {
  deleteCookie("visited");
});
