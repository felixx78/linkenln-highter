window.addEventListener("DOMContentLoaded", () => {
  const jobContainer = document
    .querySelector("main")
    .querySelector('[tabindex="-1"]')
    .children[1].querySelector("ul");

  const observer = new MutationObserver(() => {
    const jobs = document.querySelectorAll(".job-card-container");

    jobs.forEach((job) => {
      const content = job.textContent;
      if (content.includes("Viewed") || content.includes("Applied")) {
        job.style.backgroundColor = "#dddfe2";
      }
    });
  });

  observer.observe(jobContainer, { subtree: true, childList: true });
});
