var maximumSwap = function(num) {
    let arr = num.toString('10').split('');
    arr = arr.map((item)=>{
        return parseInt(item);
    })
    let newarr = [...arr].sort((a,b)=>b-a);
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==newarr[i]){
            let temp =arr[i];
            arr[i] = newarr[i];
            arr[arr.lastIndexOf(newarr[i])] = temp;
            break;
        }
    }
    return arr.join('');
}
maximumSwap(2736);