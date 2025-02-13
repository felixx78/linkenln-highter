const observer = new MutationObserver(() => {
  const main = document.querySelector("main");
  if (!main) return;

  const jobContainer = main
    .querySelector('[tabindex="-1"]')
    .children[1].querySelector("ul");

  if (!jobContainer) return;

  observer.disconnect();

  const jobObserver = new MutationObserver(() => {
    const jobs = document.querySelectorAll(".job-card-container");

    jobs.forEach((job) => {
      const content = job.textContent;
      if (content.includes("Viewed") || content.includes("Applied")) {
        job.style.backgroundColor = "#dddfe2";
      }
    });
  });

  jobObserver.observe(jobContainer, { subtree: true, childList: true });
});

observer.observe(document.body, { childList: true, subtree: true });
