
exports.min = function min (array) {
  let minimum=array[0];
  if (array === undefined || array.length === 0) return 0;
  for (let i=1;i<array.length;i++)
  {
	  if (array[i]<minimum) minimum=array[i];
  }
  return minimum;
}

exports.max = function max (array) {
  let maximum=array[0];
   if (array === undefined || array.length === 0) return 0;
  for (let i=1;i<array.length;i++)
  {	  
	  if (array[i]>maximum) maximum=array[i];
  }
  return maximum;
}

exports.avg = function avg (array) {
  let average = 1;
if (array === undefined || array.length === 0) return 0;
  for (let i=0;i<array.length;i++)
  {
	  average*=array[i]/array.length;
  }
  return average;
}
