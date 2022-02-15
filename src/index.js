
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let matNew = [];
   if (arguments.length == 0) {
    return matNew;
   }
 for (let i = 0; i < matrix.length; i ++) {
   if (i%2 === 0) {
     //for (let j = 0; j < matrix[i].length; j++){
     matNew = matNew.concat(matrix[i]);
     }
    else 
  {
    matNew = matNew.concat(matrix[i].reverse());
  }
}
  return matNew;
} 
