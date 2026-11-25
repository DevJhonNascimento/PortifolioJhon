const form = document.getElementById("formulario");
const whatsappNumber = "5591985586908";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("nome")).trim();
    const message = String(formData.get("mensagem")).trim();
    const text = `Olá, meu nome é ${name}. ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    const whatsappWindow = window.open(url, "_blank");

    if (whatsappWindow) {
        whatsappWindow.opener = null;
    } else {
        window.location.assign(url);
    }
});
