let isEmpty=(array) => array===undefined || array.length==0;

exports.min = (array) => isEmpty(array) ? 0 : Math.min(...array);

exports.max = (array) => isEmpty(array) ? 0 : Math.max(...array);

exports.avg = (array) => isEmpty(array) ? 0 : array.reduce((a,b)=>a+b)/array.length;


