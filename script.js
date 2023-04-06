const contactForm = document.getElementById("contactForm");

contactForm.onsubmit = (e) => {
  e.preventDefault();
  const formFields = new FormData(contactForm);
  window.location.href = `mailto:srre.bpdubey@gmail.com?cc=atuldubey017@gmail.com,${formFields.get(
    "email"
  )}&subject=${formFields.get("name")} - Web Query&body=${formFields.get(
    "query"
  )}`;
};
