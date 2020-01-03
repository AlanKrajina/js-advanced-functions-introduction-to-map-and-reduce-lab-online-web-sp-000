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



function reduceToTotal(values,startingPoint= null){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (startingPoint === null){
  return values.reduce(reducer)
  } else {
  return values.reduce(reducer,startingPoint)
  }
}

function reduceToAllTrue(values){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return values.map(el=>el * el )
}

function reduceToAnyTrue(values){
  return values.map(el=>el * el )
}
