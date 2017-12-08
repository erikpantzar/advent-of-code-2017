const build = (steps) => {
  const spiral = []
	let position = { x: 0, y: 0 }  
  
  for(let i=0; i < steps; i++) {
    spiral.push(doStep('s', position, 3))
  }
	return spiral
}

function doStep(direction = 'e', position, size = 1) {
  switch(direction) {
    case 'e':
      return Object.assign({}, position, {
        x: position.x + size
      })
    case 'n':
      return Object.assign({}, position, {
        y: position.y + size
      }) 
    case 'w':
      return Object.assign({}, position, {
        x: position.x - size
      })
    case 's':
      return Object.assign({}, position, {
        y: position.y - size
      })
    default:
      return position
      break;
  }
}


const spiral = build(15)
console.log(spiral)