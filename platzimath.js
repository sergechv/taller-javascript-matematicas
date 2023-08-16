function calcularPromedio(lista) {
  const sumaLista = lista.reduce((acc, current) => acc + current);

  const promedio = sumaLista / lista.length;
  console.log(promedio);
}


function isEven(arr) { // checks if an array is even or odd
  return (arr.length % 2 === 0);
}