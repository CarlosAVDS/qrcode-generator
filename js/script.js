const container = document.querySelector('.container')
const btn = document.querySelector('#btn-submit')
const qrImg = document.querySelector('#qr-code img')
const qrInput = document.querySelector('#qrInput')


function gerarQrCode() {
    let textInput = qrInput.value;
    if (!textInput) return;

    btn.innerHTML = 'Gerando QR Code...'

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textInput}`;

    qrImg.addEventListener('load', () => {
        container.classList.add('active')
        btn.innerHTML= 'Codigo Gerado'
    });
}

btn.addEventListener('click', () => {
    gerarQrCode()
})

qrInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    gerarQrCode();
  }
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    container.classList.remove("active");
    btn.innerText = "Gerar QR Code";
  }
});