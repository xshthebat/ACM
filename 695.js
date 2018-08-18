// 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
//返回 6
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let land = [];
    let landaera = [];
    let area;
    let areaindex = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                land.push([i, j]);
            }
        }
    }
    // console.log(grid);
    for (let i = 0; i < land.length; i++) {
        //递归调函数
        area = 0;
        // if(grid[land[i][0]][land[i][1]]){
        //     area = 1;
        // }
        find(land[i][0], land[i][1]);
    }
    function find(i, j) {
        grid[i][j] = 0; //找过就清零
        area = area+1;
        // console.log(i,j,area);
        let flag = true;
        if (0 <= i && i < grid.length && 0 <= j + 1 && j + 1 < grid[i].length) {
            if (grid[i][j + 1]) {
                flag = false;
                find(i, j + 1)
            }
        }
        if (0 <= i + 1 && i + 1 < grid.length && 0 <= j && j < grid[i].length) {
            if (grid[i + 1][j]) {
                flag = false;
                find(i + 1, j)
            }
        }
        if (0 <= i && i < grid.length && 0 <= j - 1 && j - 1 < grid[i].length) {
            if (grid[i][j - 1]) {
                flag = false;
                find(i, j - 1)
            }
        }
        if (0 <= i - 1 && i - 1 < grid.length && 0 <= j && j < grid[i].length) {
            if (grid[i - 1][j]) {
                flag = false;
                find(i - 1, j)
            }
        }
        if(flag){
            landaera.push(area);
        }
    }
    // console.log(landaera);
    if(!landaera.length){
        return 0;
    }
    return Math.max(...landaera);
};
console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]))