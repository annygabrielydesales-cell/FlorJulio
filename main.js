
// só pra garantir que animação começa suave
window.addEventListener("load", () => {
  document.body.classList.remove("not-loaded");
});
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
