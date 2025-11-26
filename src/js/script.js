document.addEventListener("DOMContentLoaded", () => {
  const accordeon = document.querySelector(".accordeon");
  const detailsList = accordeon.querySelectorAll("details");

  detailsList.forEach((details) => {
    const summary = details.querySelector("summary");

    summary.addEventListener("click", (event) => {
      detailsList.forEach((other) => {
        if (other !== details) {
          other.open = false;
        }
      });
      if (details.open) {
        event.preventDefault(); 
        details.open = false; 
      }
    });
  });
});

