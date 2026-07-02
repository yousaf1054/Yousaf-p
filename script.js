// Details Database
const contentDb = {
  projects: {
    "expense-tracker": {
      title: "EXPENSE TRACKER",
      description:
        "A responsive, modern personal finance and budget tracking application. It tracks income and categorized expenses in real-time, providing secure data persistence and visual analytics.",
      image: "assets/expence_tracker.png",
      tags: ["HTML", "CSS", "JS", "Bootstrap", "Supabase"],
      link: "https://github.com/yousaf1054",
    },
    druggpt: {
      title: "DRUGGPT",
      description:
        "AI bio-research assistant facilitating fast molecule profiling, protein interaction queries, and chemical dataset reviews via large language models.",
      image: "assets/druggpt.png",
      tags: ["AI Assistant", "Bioinformatics", "React"],
      link: "https://github.com/yousaf1054",
    },
    "erp-module": {
      title: "INTERNAL STOCK TRANSFER (ERP)",
      description:
        "An enterprise ERP module designed to streamline internal stock transfers, inventory routing, and stock movements across warehouses.",
      image:
        "assets/erp.png",
      tags: ["Enterprise", "Database", "Admin UI"],
      link: "https://github.com/yousaf1054",
    },
  },
};

// Modal Control Functions
function openProjectModal(projectId) {
  const item = contentDb.projects[projectId];
  if (!item) return;
  document.getElementById("modalImage").src = item.image;
  document.getElementById("modalImage").alt = item.title;
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalDescription").textContent = item.description;

  const tagsContainer = document.getElementById("modalTags");
  tagsContainer.innerHTML = "";
  item.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className =
      "px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full uppercase tracking-wider";
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  const liveLink = document.getElementById("modalLiveLink");
  if (item.link) {
    liveLink.href = item.link;
    liveLink.classList.remove("hidden");
  } else {
    liveLink.classList.add("hidden");
  }

  document.getElementById("detailModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  document.getElementById("detailModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// Contact Modal Control
function openContactModal() {
  document.getElementById("contactModal").classList.remove("hidden");
  document.getElementById("modalSuccessOverlay").classList.add("hidden");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  document.getElementById("contactModal").classList.add("hidden");
  document.body.style.overflow = "";
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    menuIcon.textContent = "close";
  } else {
    mobileMenu.classList.add("hidden");
    menuIcon.textContent = "menu";
  }
}

async function handleContactSubmit(event) {
  event.preventDefault();

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const accessKey = "d4ae78b9-a3bd-41b1-b353-68cd25a80ec2";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name,
        email: email,
        phone: phone,
        message: message,
        subject: `New Portfolio Message from ${name}`,
      }),
    });

    const result = await response.json();
    if (result.success) {
      document.getElementById("modalSuccessOverlay").classList.remove("hidden");
      document.getElementById("contactForm").reset();
    } else {
      showToast(
        "Failed to send message: " + (result.message || "Unknown error"),
        "error",
      );
    }
  } catch (error) {
    showToast("Connection error. Could not send message.", "error");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

// Toast Alerts
function showToast(message, iconName = "info") {
  const toast = document.getElementById("toast");
  document.getElementById("toastMessage").textContent = message;
  document.getElementById("toastIcon").textContent = iconName;

  toast.classList.remove("translate-y-20", "opacity-0");
  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3000);
}

function triggerResumeDownload() {
  showToast("Downloading Resume...", "download");

  // Programmatically trigger the PDF download
  const link = document.createElement("a");
  link.href = "./assets/YOUSAF_P (1).pdf";
  link.download = "YOUSAF_P_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    showToast("Resume downloaded successfully!", "check_circle");
  }, 1500);
}

// Scroll reveal effects
document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for generic reveals
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  // Target all elements with .reveal class
  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  // Intersection Observer for stats counting
  const counters = document.querySelectorAll(".counter");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseFloat(counter.getAttribute("data-target"));
          const decimals = parseInt(
            counter.getAttribute("data-decimals") || "0",
          );
          const duration = 1500; // ms
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Ease out progress
            const easeProgress = progress * (2 - progress);
            const currentValue = easeProgress * target;

            if (decimals > 0) {
              counter.textContent = currentValue.toFixed(decimals);
            } else {
              counter.textContent = Math.floor(currentValue)
                .toString()
                .padStart(2, "0");
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (decimals > 0) {
                counter.textContent = target.toFixed(decimals);
              } else {
                counter.textContent = target.toString().padStart(2, "0");
              }
            }
          }
          requestAnimationFrame(updateCounter);
          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => counterObserver.observe(c));

  // Header scroll shadow and progress bar effect
  const nav = document.querySelector("nav");
  const progress = document.getElementById("scrollProgress");
  const sections = document.querySelectorAll("section, footer");
  const navLinks = document.querySelectorAll("#navLinks .nav-link");

  function updateActiveLink() {
    let currentSectionId = "home";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Trigger active link when section occupies the view area (150px offset)
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSectionId = section.getAttribute("id") || currentSectionId;
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("text-primary", "font-bold");
        link.classList.remove("text-on-surface-variant");
      } else {
        link.classList.remove("text-primary", "font-bold");
        link.classList.add("text-on-surface-variant");
      }
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("shadow-md");
    } else {
      nav.classList.remove("shadow-md");
    }

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progress) {
      progress.style.width = scrolled + "%";
    }

    updateActiveLink();
  });

  // Run initially to set active state on load
  updateActiveLink();

  // Typing Animation for Hero Section
  const typedTextSpan = document.getElementById("typedText");
  if (typedTextSpan) {
    const textToType = typedTextSpan.textContent;
    typedTextSpan.textContent = "";
    let charIndex = 0;
    let isErasing = false;

    function typeEffect() {
      if (!isErasing && charIndex < textToType.length) {
        // Typing
        typedTextSpan.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 120);
      } else if (isErasing && charIndex > 0) {
        // Erasing
        typedTextSpan.textContent = textToType.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 60); // Faster erasing speed
      } else if (!isErasing && charIndex === textToType.length) {
        // Finished typing, pause before erasing
        isErasing = true;
        setTimeout(typeEffect, 2000); // 2 second pause
      } else if (isErasing && charIndex === 0) {
        // Finished erasing, pause before re-typing
        isErasing = false;
        setTimeout(typeEffect, 500); // 0.5 second pause
      }
    }
    setTimeout(typeEffect, 400); // Delayed start
  }
});
