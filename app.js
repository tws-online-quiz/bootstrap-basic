function sortnumber(a,b) {
    return a-b;
}
function difference(arr1,arr2) {
    arr1 = arr1.join(',');
    arr2 = arr2.join(',');
    let one = arr1.split(',');
    let two = arr2.split(',');
    let crr = [];
    let sum = 1;
    let drr = one.concat(two).sort(sortnumber);
    for(let i = 0;i<drr.length;){
        if(drr[0] === drr[1]){
            drr.splice(0,1);
            sum++;
        }else {
            crr.push([drr[0],sum]);
            drr.shift();
            sum = 1;
            i = 0;
        }
    }
    let frr = [];
    for(let j = 0;j<crr.length;j++){
        if(crr[j][1]>1){
            crr.splice(j,1);
        }
        frr.push(crr[j][0]);
    }
    return frr;
}

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));