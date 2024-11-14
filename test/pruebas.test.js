const assert = require('assert');
const { cifrarCesar, descifrarCesar, cifrarVigenere, descifrarVigenere } = require('../src/logica');

describe('Pruebas para Cifrado César', function() {
  it('debería cifrar correctamente con desplazamiento positivo', function() {
    assert.strictEqual(cifrarCesar('ABC', 3), 'DEF');
  });

  it('debería descifrar correctamente con desplazamiento positivo', function() {
    assert.strictEqual(descifrarCesar('DEF', 3), 'ABC');
  });

  it('debería manejar letras minúsculas', function() {
    assert.strictEqual(cifrarCesar('abc', 3), 'def');
    assert.strictEqual(descifrarCesar('def', 3), 'abc');
  });

  it('debería mantener caracteres no alfabéticos', function() {
    assert.strictEqual(cifrarCesar('A-B-C', 3), 'D-E-F');
    assert.strictEqual(descifrarCesar('D-E-F', 3), 'A-B-C');
  });
});

describe('Pruebas para Cifrado Vigenère', function() {
  it('debería cifrar correctamente usando clave', function() {
    assert.strictEqual(cifrarVigenere('ABC', 'KEY'), 'KFA');
  });

  it('debería descifrar correctamente usando clave', function() {
    assert.strictEqual(descifrarVigenere('KFA', 'KEY'), 'ABC');
  });

  it('debería manejar letras minúsculas y mayúsculas', function() {
    assert.strictEqual(cifrarVigenere('abc', 'key'), 'kfa');
    assert.strictEqual(descifrarVigenere('kfa', 'key'), 'abc');
  });

  it('debería mantener caracteres no alfabéticos', function() {
    assert.strictEqual(cifrarVigenere('A-B-C', 'KEY'), 'K-F-A');
    assert.strictEqual(descifrarVigenere('K-F-A', 'KEY'), 'A-B-C');
  });
});
