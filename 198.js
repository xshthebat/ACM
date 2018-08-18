// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 
var rob = function(nums) {
    let curMax = 0,curPrepremax = 0;
   nums.forEach((item,index)=>{
       let temp = curMax; //保存左边
       console.log("左边"+curMax,'左左边'+curPrepremax,"本值",item);
       curMax = Math.max(curMax,curPrepremax+item);  //动态规划
       //一个节点要么是从左边 有么是从领边
       curPrepremax = temp;  //下个的左左边是当前左边
   })
   return curMax;
};
console.log(rob([1,2,3,1]));

