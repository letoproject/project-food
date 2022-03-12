function modal() {
  // Modal window

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modalWindow = document.querySelector(".modal");

  function openModal() {
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalWindow.addEventListener("click", (event) => {
    if (
      event.target === modalWindow ||
      event.target.getAttribute("data-close") == ""
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modalWindow.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

module.exports = modal;