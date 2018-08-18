


var totalHammingDistance = function(nums) {
    function HammingDistance(a,b){
        let ba = a.toString('2');
        let bb = b.toString('2');
        ba.length-bb.length>0?bb = "0".repeat(ba.length-bb.length)+bb:ba = "0".repeat(Math.abs(ba.length-bb.length)) +ba 
        let diff = 0;
        for(let i=0;i<ba.length;i++){
            if(ba[i]!==bb[i]){
                diff =diff+1;
            }
        }
        return diff;
    }
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            sum += HammingDistance(nums[i],nums[j]);
        }
    }
    return sum
};
console.log(totalHammingDistance([4, 14, 2]));