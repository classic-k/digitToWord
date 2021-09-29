
/*
word1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"
          ,"nine", "ten", "eleven","twelve", "thirteen", "fourteen", "fifteen",
         "sixteen", "seventeen", "eighteen", "nineteen"]
word2 = ["zero","ten", "twenty","thirty","fourty","fifty", "sixty", "seventy", "eighty",
         "ninety"]


function convert_tens(num)

{
     let whole = num / 10

     let remainder = num - (whole * 10)

     return convert(whole) + " " + convert(remainder)


}
function convert_alt(num, units, txt)
{
    let whole = num / units
    let remainder = num - (whole * units)

    return convert(whole) +" txt "+(remainder == 0?"":(remainder >= 100? +","+convert(remainder):+"and "+convert(remainder)))

}

function convert(num)
{
  if (num > 0 && num <= 19)
   
    return word1[num]
else if(num >= 20 && num < 100)
    return convert_tens(num)
else if(num >= 100 && num < 1000)
    return convert_alt(num, 100, "hundred")

}

console.log(convert(1500))
*/

word1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"
,"nine", "ten", "eleven","twelve", "thirteen", "fourteen", "fifteen",
"sixteen", "seventeen", "eighteen", "nineteen"]
word2 = ["zero","ten", "twenty","thirty","fourty","fifty", "sixty", "seventy", "eighty",
"ninety"]


function convert_tens(num)

{
let whole = parseInt(num / 10)

let remainder = num - (whole * 10)

return word2[whole] + " " + (remainder > 0? word1[remainder]:"")


}
function convert_alt(num, units, txt)
{
let whole = parseInt(num / units)
let remainder = num - (whole * units)

if( remainder == 0)
return convert(whole) + " " + txt
if (remainder < 100)
return convert(whole) + " " + txt + " and " +convert(remainder)
if(remainder > 100)
return convert(whole) + " " + txt + " , " +convert(remainder)
// return convert(whole) + " " + txt + ( remainder === 0 ? "" : remainder > 100 ? " , " + convert(remainder) : +" and " +convert(remainder))//(remainder >= 100? +","+convert(remainder):+"and "+convert(remainder)))

}

function convert(num)
{
if (num > 0 && num <= 19)
return word1[num]

else if(num >= 20 && num < 100)
return convert_tens(num)

else if(num >= 100 && num < 1000)
return convert_alt(num, 100, "hundred")

else if(num >= 1000 && num < 1000000)
return convert_alt(num, 1000, "thousand")

else if(num >= 1000000 && num < 1000000000)
return convert_alt(num, 1000000, "million")

else if(num >= 1000000000 && num < 1000000000000)
return convert_alt(num, 1000000000, "billion")

else
return "Thrillion is out of range"

}
function handle_convert()
{
let digitInput = document.getElementById("dwi").value
digitInput = parseInt(digitInput)
if ( ! isNaN(digitInput))
{
  console.log(digitInput)
  digit = convert(digitInput)
  document.getElementById("dwi").value = digit
}


}