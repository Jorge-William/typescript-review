// basic function annotation
// This function takes two numbers and returns their sum 
function soma1(valor1: number, valor2: number): number {
  const result = valor1 + valor2;
  return (
    result
  )
}

console.log(soma(10, 20)); // 30

// function with optional parameter
function saudacao(nome: string, saudacao?: string): string {
  if (saudacao) {
    return `${saudacao}, ${nome}!`;
  } else {
    return `Olá, ${nome}!`;
  }
}

// Function with default parameter
function saudacaoComPadrao(nome: string, saudacao: string = 'Olá'): string {
  return `${saudacao}, ${nome}!`;
}

// Function with rest parameters
// This function takes a variable number of string arguments and returns a single string
function juntarNomes(...nomes: string[]): string {
  return nomes.join(', ');
}

// Function with callback
// This function takes a callback function as an argument and applies it to each element of the array
function aplicarCallback<T>(array: T[], callback: (item: T) => void): void {
  array.forEach(callback);
}
