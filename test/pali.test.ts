import { ePalindromo } from '../src/pali'; // ajuste o caminho conforme necessário

describe('Teste da função ePalindromo', () => {
    test('Deve retornar true para um palíndromo simples como "arara"', () => {
        expect(ePalindromo('arara')).toBe(true);
    });

    test('Deve retornar false para uma palavra não palíndromo como "casa"', () => {
        expect(ePalindromo('casa')).toBe(false);
    });

    test('Deve retornar true para um palíndromo com letras maiúsculas e minúsculas como "Arara"', () => {
        expect(ePalindromo('Arara')).toBe(true);
    });

    test('Deve retornar true para um palíndromo com espaços e pontuações como "A man, a plan, a canal, Panama"', () => {
        expect(ePalindromo('A man, a plan, a canal, Panama')).toBe(true);
    });

    test('Deve retornar false para uma string vazia', () => {
        expect(ePalindromo('')).toBe(false);
    });

    test('Deve retornar true para um palíndromo numérico como "12321"', () => {
        expect(ePalindromo('12321')).toBe(true);
    });

    test('Deve retornar false para uma sequência numérica não palíndromo como "12345"', () => {
        expect(ePalindromo('12345')).toBe(false);
    });
});
