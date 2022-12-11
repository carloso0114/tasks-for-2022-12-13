function safe_mine_field(mine_field) {
  if (mine_field.length === 0) {
    return []
  } 
  const mine = 'M';
  const tree = 'T';
  let copyArray = [...mine_field]
  function addCharges (array, x, y) {
    const charge = 'C';
     for (let i = y; i >= 0; i--) {
      if (array[x][i] === tree) {
        break
      } else if (array[x][i] === '.') {
        array[x][i] = charge
      }
    }
    for (let i = y; i < array[x].length; i++) {
      if (array[x][i] === tree) {
        break
      } else if (array[x][i] === '.') {
        array[x][i] = charge
      }
    }
    for (let j = x; j >= 0; j--) {
      if (array[j][y] === tree) {
        break
      } else if (array[j][y] !== mine) {
        array[j][y] = charge
      }
    }
    for (let j = x; j < array.length; j++) {
      if (array[j][y] === tree) {
        break
      } else if (array[j][y] !== mine) {
        array[j][y] = charge
      }
    }
  }
  mine_field.forEach((element1, index1) => {
    element1.forEach((element2, index2) => {
      if (element2 === mine) {
        addCharges(copyArray, index1 ,index2)
      }
    })
  });
  const result = []
  copyArray.forEach((element1, index1) => {
    element1.forEach((element2, index2) => {
      if (element2 === '.') {
        result.push([index1 ,index2])
      }
    })
  });
  return result
}

var field = [
  ['.', '.', '.', '.', 'M'],
  ['.', 'M', '.', 'T', '.'],
  ['.', '.', 'T', '.', '.'],
  ['.', '.', 'M', '.', 'T'], 
  ['.', '.', '.', '.', '.']
];

console.log(safe_mine_field(field))