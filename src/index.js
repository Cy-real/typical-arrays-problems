
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0;
  let minimum=array[0];
  for (let i=1;i<array.length;i++)
  {
	  if (array[i]<minimum) minimum=array[i];
  }
  return minimum;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;
  let maximum=array[0];
  for (let i=1;i<array.length;i++)
  {	  
	  if (array[i]>maximum) maximum=array[i];
  }
  return maximum;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0 ) return 0;  
  let average = 0;
  for (let i=0;i<array.length;i++)
  {
	  average+=array[i];
  }
  return average/array.length;
}
