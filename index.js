// Your code here
function mapToNegativize(values){
  return values.map(el=>el * (-1))
}

function mapToNoChange(values){
  return values.map(el=>el )
}

function mapToDouble(values){
  return values.map(el=>el * 2 )
}

function mapToSquare(values){
  return values.map(el=>el * el )
}



function reduceToTotal(values){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return values.reduce(reducer)
}

function reduceToAllTrue(values){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return values.map(el=>el * el )
}

function reduceToAnyTrue(values){
  return values.map(el=>el * el )
}
