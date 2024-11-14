const cipherTypeSelect = document.getElementById('cipher-type');
const cesarOptions = document.getElementById('cesar-options');
const vigenereOptions = document.getElementById('vigenere-options');
const resultado = document.getElementById('resultado');

// Mostrar/ocultar opciones según el tipo de cifrado seleccionado
cipherTypeSelect.addEventListener('change', function() {
    if (this.value === 'cesar') {
        cesarOptions.style.display = 'block';
        vigenereOptions.style.display = 'none';
    } else {
        cesarOptions.style.display = 'none';
        vigenereOptions.style.display = 'block';
    }
});

// Cifrado César
function cifrarCesar(mensaje, desplazamiento) {
    let resultado = '';
    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];
        if (char.match(/[a-z]/i)) {
            const codigo = mensaje.charCodeAt(i);
            // Letras mayúsculas
            if (codigo >= 65 && codigo <= 90) {
                char = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
            }
            // Letras minúsculas
            else if (codigo >= 97 && codigo <= 122) {
                char = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
            }
        }
        resultado += char;
    }
    return resultado;
}

// Descifrado César
function descifrarCesar(mensaje, desplazamiento) {
    return cifrarCesar(mensaje, (26 - desplazamiento) % 26);
}

// Cifrado Vigenère
function cifrarVigenere(mensaje, clave) {
    let resultado = '';
    clave = clave.toLowerCase();
    let claveIndex = 0;

    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];
        if (char.match(/[a-z]/i)) {
            const codigo = mensaje.charCodeAt(i);
            const shift = clave.charCodeAt(claveIndex % clave.length) - 97;

            if (codigo >= 65 && codigo <= 90) { // Mayúsculas
                char = String.fromCharCode(((codigo - 65 + shift) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) { // Minúsculas
                char = String.fromCharCode(((codigo - 97 + shift) % 26) + 97);
            }
            claveIndex++;
        }
        resultado += char;
    }
    return resultado;
}

// Descifrado Vigenère
function descifrarVigenere(mensaje, clave) {
    let resultado = '';
    clave = clave.toLowerCase();
    let claveIndex = 0;

    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];
        if (char.match(/[a-z]/i)) {
            const codigo = mensaje.charCodeAt(i);
            const shift = 26 - (clave.charCodeAt(claveIndex % clave.length) - 97);

            if (codigo >= 65 && codigo <= 90) { // Mayúsculas
                char = String.fromCharCode(((codigo - 65 + shift) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) { // Minúsculas
                char = String.fromCharCode(((codigo - 97 + shift) % 26) + 97);
            }
            claveIndex++;
        }
        resultado += char;
    }
    return resultado;
}

// Botón de cifrado
document.getElementById('encrypt-btn').addEventListener('click', function() {
    const mensaje = document.getElementById('message').value;
    const cipherType = cipherTypeSelect.value;
    if (cipherType === 'cesar') {
        const desplazamiento = parseInt(document.getElementById('shift').value);
        resultado.textContent = cifrarCesar(mensaje, desplazamiento);
    } else {
        const clave = document.getElementById('vigenere-key').value;
        resultado.textContent = cifrarVigenere(mensaje, clave);
    }
});

// Botón de descifrado
document.getElementById('decrypt-btn').addEventListener('click', function() {
    const mensaje = document.getElementById('message').value;
    const cipherType = cipherTypeSelect.value;
    if (cipherType === 'cesar') {
        const desplazamiento = parseInt(document.getElementById('shift').value);
        resultado.textContent = descifrarCesar(mensaje, desplazamiento);
    } else {
        const clave = document.getElementById('vigenere-key').value;
        resultado.textContent = descifrarVigenere(mensaje, clave);
    }
});

var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});



