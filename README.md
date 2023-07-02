# Calculate Price with GST

This program calculates the price of a product including Goods and Services Tax (GST). It provides the flexibility to input the price and GST percentage, with a default GST rate of 21% if not specified.

## How to Use

1. The program prompts the user to enter the price of the product.

2. It then prompts the user to enter the GST (Goods and Services Tax) percentage. If no value is provided, it uses the default GST rate of 21%.

3. The program calculates the price including GST using the `calculatePriceWithGST` function.

4. The result is displayed in the console and also updated in two HTML elements with IDs `myDiv1` and `myDiv2`.

## Function Explanation

The `calculatePriceWithGST` function takes two parameters: `price` and `gst`. It calculates the price including GST based on the provided values.

The `gst` parameter has a default value of 21 if not specified. This allows for a simpler usage when only the price needs to be provided.

The function uses the formula `price + (price * gst / 100)` to calculate the price with GST. It multiplies the price by the GST percentage divided by 100 and adds it to the original price.

## Example

Suppose we want to calculate the price with GST for a product that costs $100 and has a GST rate of 18%.

1. The program prompts for the price, and we enter `100`.

2. It prompts for the GST, and we enter `18`.

3. The program calculates the price with GST as follows:
   ```
   price = 100
   gst = 18
   priceWithGST = 100 + (100 * 18 / 100) = 118
   ```

4. The result is displayed in the console as:
   ```
   Price without GST: 100
   Price with GST: 118
   ```

   It is also updated in the HTML elements with IDs `myDiv1` and `myDiv2`.

Feel free to modify the inputs and experiment with different price and GST values!

## Deployed Application

You can access the deployed application for this program [here](https://calculatepricegst.netlify.app/). Visit the link to try it out without having to run the code locally.
