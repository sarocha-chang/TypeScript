function calDiscount (price:number ,rate:number){
    let discount = price * rate
    return discount
}

function calDiscountWithDefaultParam(price:number, rate:number = 0.5){
    let discount = price * rate
    return discount
}

console.log(calDiscountWithDefaultParam(1000))