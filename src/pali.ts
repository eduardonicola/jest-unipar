export function ePalindromo(palavra: string): boolean {
    // Remove espaços, pontuações e transforma em letras minúsculas
    if (palavra.trim() === '') return false;
    
    const limpaString: string = palavra.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Verifica se a string é igual à sua inversa
    const reverso: string = limpaString.split('').reverse().join('');
    
    return limpaString === reverso;
}
