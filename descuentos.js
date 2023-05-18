const inputPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#coupon')
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
  const coupon = inputCoupon.value;
  

  if (!price || !coupon) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }
  if (coupon > 100) {
    pResult.innerText = 'Aja, ya quisieras no te vamos a dar dinero, PAGA!'
    return;
  }

  for (let coupons in descuentos) {
    if (coupon == coupons) {
      const newPrice = (price * (100 - descuentos[coupons])) / 100;

      pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
  
    }
  }

    
}