const contactForm = document.getElementById("contactForm");

document.onscroll = (e) => {
  const pageTop = document.documentElement.scrollTop;
  const pageBottom = pageTop + window.innerHeight;
  const tags = document.getElementsByClassName("tag");
  for (let index = 0; index < tags.length; index++) {
    const element = tags[index];
    if (element.offsetTop < pageBottom) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  }
};

contactForm.onsubmit = (e) => {
  e.preventDefault();
  const formFields = new FormData(contactForm);
  window.location.href = `mailto:srre.bpdubey@gmail.com?cc=atuldubey017@gmail.com,${formFields.get(
    "email"
  )}&subject=${formFields.get("name")} - Web Query&body=${formFields.get(
    "query"
  )}`;
};
