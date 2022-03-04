const ftoc = function(fah) {
  let cel = (fah - 32)*(5/9);
  let roundcel = Math.round(cel*10)/10 ;

  return roundcel;
};

const ctof = function(cel) {
  let fah = (cel*1.8) + 32;
  let roundfah = Math.round(fah*10)/10 ;

  return roundfah;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
