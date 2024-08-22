
import { calculadora } from '../src/calc';

test('soma 10 e 5', () => {
  expect(calculadora(10, 5, 'soma')).toBe(15);
});

test('subtração 10 e 5', () => {
  expect(calculadora(10, 5, 'subtracao')).toBe(5);
});

test('multiplicação 10 e 5', () => {
  expect(calculadora(10, 5, 'multiplicacao')).toBe(50);
});

test('divisão 10 e 5', () => {
  expect(calculadora(10, 5, 'divisao')).toBe(2);
});

test('divisão por zero', () => {
  expect(() => calculadora(10, 0, 'divisao')).toThrow('Divisão por zero não permitida');
});

test('operacao inválida', () => {
  expect(() => calculadora(10, 5, 'invalid' as any)).toThrow('Operação inválida');
});
