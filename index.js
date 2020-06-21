function hasIdenticalRowColumn(matrix){
 if(!isSquareMatrix(matrix)){
     return false;
 }
 let allRows=getAllRows(matrix);
 // console.log("all rows=");
 // console.log(allRows);
 let allColumns=getAllColumns(matrix);
 // console.log("all Columns=");
 // console.log(allColumns);
 for(let i=0;i<allRows.length;i++){
     for(let j=0;j<allColumns.length;j++){
         if(allElementsIdentical(allRows[i],allColumns[j])){
             return true;
         }
     }
 }
 return false;
}
function allElementsIdentical(row,col){
    for(let i=0;i<row.length;i++){
        if(row[i]!==col[i]){
            return false;
        }
    }
    return true;
}
function getAllRows(matrix){
    let result=[];
    for(let i=0;i<matrix.length;i++){
        result.push(matrix[i]);
    }
    return result;
}
function getAllColumns(matrix){
    let result=[];
    for(let i=0;i<matrix[0].length;i++){
        let temp=[];
        for(let j=0;j<matrix.length;j++){
            temp.push(matrix[j][i]);
        }
        result.push(temp);
    }
    return result;
}
function isSquareMatrix(matrix){
    if(allRowsAreOfEqualLength(matrix)){
        return matrix.length===matrix[0].length;
    }
    return false;
}
function allRowsAreOfEqualLength(matrix){
    let length=matrix[0].length;
    for(let i=1;i<matrix.length;i++){
        if(matrix[i].length!==length){
            return false;
        }
    }
    return true;
}

console.log(hasIdenticalRowColumn([
    [1, 2, 3, 4],
    [2, 4, 9, 8],
    [5, 9, 7, 7],
    [6, 8, 1, 0]
])===true);
console.log(hasIdenticalRowColumn([
    [4, 4, 9, 4],
    [2, 1, 9, 8],
    [5, 4, 7, 7],
    [6, 4, 1, 0]
])===false);
console.log(hasIdenticalRowColumn([
    [4, 4],
        [2, 1]
])===false);
console.log(hasIdenticalRowColumn([
    [4, 2],
        [2, 1]
])===true);