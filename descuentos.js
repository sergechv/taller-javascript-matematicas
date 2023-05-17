const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calcular')
const pResult = document.querySelector('#result')
const descuentos = {
  platzi20: 20,
  platzi30: 30,
  platzi40: 40,
  platzi50: 50,
  platzi60: 60
}

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  
  const price = Number(inputPrice.value);
  const discount = inputDiscount.value;
  
  console.log({price, discount})

  if (!price || !discount) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }
  if (discount > 100) {
    pResult.innerText = 'Aja, ya quisieras no te vamos a dar dinero, PAGA!'
    return;
  }

  for (let coupon in descuentos) {
    if (discount == coupon) {
      const newPrice = (price * (100 - descuentos[coupon])) / 100;

      pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
  
    }
  }

    
}