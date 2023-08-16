const inputPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular')
const pResult = document.querySelector('#result')
// const couponsObj = {
//   platzi20: 20,
//   platzi30: 30,
//   platzi40: 40,
//   platzi50: 50,
//   platzi60: 60
// }

const couponsList = [];

couponsList.push({
  name: 'platzi30',
  discount: 30
})
couponsList.push({
  name: 'platzi40',
  discount: 40
})
couponsList.push({
  name: 'platzi50',
  discount: 50
})

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;
  

  if (!price || !coupon) {
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }
  
  let discount;

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon
  }

  const couponInArray = couponsList.find(isCouponInArray)

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = "El cupon no es valido";
    return;
  }
  
  // for (let i = 0; i < couponsList.length; i++) {
  //   if (couponsList[i].name === coupon) {
  //     discount = couponsList[i].discount;
  //   } else {
  //     pResult.innerText = "El cupon no es valido";
  //     return;
  //   }
  // }

  // if (couponsObj[coupon]) {
  //   discount = couponsObj[coupon];
  // } else {
  //   pResult.innerText = "El cupon no es valido";
  //   return;
  // }

  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;

  // for (let coupons in couponsObj) {
  //   if (coupon == coupons) {
  //     const newPrice = (price * (100 - couponsObj[coupons])) / 100;

  //     pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
  
  //   }
  // }

    
}