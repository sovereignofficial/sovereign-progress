// https://leetcode.com/problems/redundant-connection/

let edges = [[1, 2], [1, 3], [2, 3]]

const findRedundantConnection = (edges) => {
    let par = Array.from({ length: edges.length + 1 }, (_, i) => i)
    const find = x => x === par[x] ? par[x] : par[x] = find(par[x])
    const union = (x, y) => par[find(y)] = find(x)
    for (let [a, b] of edges)
        if (find(a) === find(b)) return [a, b]
        else union(a, b)
}