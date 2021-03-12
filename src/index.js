
exports.min = function min (array) {
  let minimum = 0;
  for (let i=0;i<array.length;i++)
  {
	  if (typeof(array[i])!='number') return 0;
	  if (array[i]<minimum) minimum=array[i];
  }
  return minimum;
}

exports.max = function max (array) {
  let maximum=0;
  for (let i=0;i<array.length;i++)
  {
	  if (typeof(array[i])!='number') return 0;
	  if (array[i]>maximum) maximum=array[i];
  }
  return maximum;
}

exports.avg = function avg (array) {
  let average = 1;
  for (let i=0;i<array.length;i++)
  {
	  if (typeof(array[i])!='number') return 0;
	  average*=array[i]/array.length;
  }
  return average;
}
