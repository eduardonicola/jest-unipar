type Operacao = 'soma' | 'subtracao' | 'multiplicacao' | 'divisao';

export function calculadora(a: number, b: number, operacao: Operacao): number {
  switch (operacao) {
    case 'soma':
      return a + b;
    case 'subtracao':
      return a - b;
    case 'multiplicacao':
      return a * b;
    case 'divisao':
      if (b === 0) {
        throw new Error('Divisão por zero não permitida');
      }
      return a / b;
    default:
      throw new Error('Operação inválida');
  }
}
