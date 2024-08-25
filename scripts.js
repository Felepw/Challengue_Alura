function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let outputText = document.getElementById('outputText');
    let astronautImage = document.querySelector('.btn-astronauta');

    if (/^[a-z\s]+$/.test(inputText)) {
        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        outputText.textContent = encryptedText;
        astronautImage.style.display = 'none';  // Esconde la imagen cuando se encripta el texto
    } else {
        outputText.textContent = 'Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.';
    }
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let outputText = document.getElementById('outputText');
    let astronautImage = document.querySelector('.btn-astronauta');

    if (/^[a-z\s]+$/.test(inputText)) {
        let decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        outputText.textContent = decryptedText;
        astronautImage.style.display = 'none';  // Esconde la imagen cuando se desencripta el texto
    } else {
        outputText.textContent = 'Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.';
    }
}

function copyText() {
    let outputText = document.getElementById('outputText');
    let astronautImage = document.querySelector('.btn-astronauta');
    navigator.clipboard.writeText(outputText.textContent)
        .then(() => {
            alert('Texto copiado al portapapeles');
            astronautImage.style.display = 'block';  // Vuelve a mostrar la imagen
            outputText.textContent = 'Ningún mensaje fue encontrado';  // Restaura el texto original
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
