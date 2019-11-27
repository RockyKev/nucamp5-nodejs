module.exports = (x, y, callback) => {
  const msg =
    "Rectangle dimensions should be greater than zero: l= " +
    x +
    " and b= " +
    y;

  if (x <= 0 || y <= 0) {
    setTimeout(() => callback(new Error(msg, null)), 2000);
  } else {
    setTimeout(() => callback(null, 
        {
            perimeter = () => 2 * (x + y),
            area = () => x * y           
        }
    ), 2000);    
  }
};

