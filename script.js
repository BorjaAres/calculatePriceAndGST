function calculatePriceWithGST(price, gst) {
  // If gst parameter is not provided, set it to 21 (default value)
  gst = gst || 21;
  
  let priceWithGST = price + (price * gst / 100);
  return priceWithGST;
}

// Prompt the user to enter the price
let price = Number(prompt("Enter the price"));

// Prompt the user to enter the GST (Goods and Services Tax)
let gst = Number(prompt("Enter the GST"));

let result;

if (gst > 0) {
  result = calculatePriceWithGST(price, gst);
} else {
  result = calculatePriceWithGST(price);
}

console.log("Price without GST: " + price);
console.log("Price with GST: " + result);

document.getElementById("myDiv1").innerHTML = "Price without GST: " + price;
document.getElementById("myDiv2").innerHTML = "Price with GST: " + result;
