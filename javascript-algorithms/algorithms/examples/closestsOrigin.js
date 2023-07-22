// https://leetcode.com/problems/k-closest-points-to-origin/

const points = [[-5,4],[-6,-5],[4,6]], k = 2

const kClosest = (points, k) => {
    const distances = [];
    const getDistance = (x, y) => {
        return Math.round(Math.sqrt((x * x) + (y * y)))
    }

    //create a map 
    for (let point of points) {
        distances.push([point, getDistance(point[0], point[1])]);
    }
    //sort
    const findCloser = () => {
        distances.sort((a,b)=>{
            return a[1] - b[1];
        })
         console.log(distances);
        let ans = [];
        for(let i = 0; i < k; i++){
         ans.push(distances[i][0]);
        }
        return ans
    }
    return findCloser();
}
console.log(kClosest(points, k));