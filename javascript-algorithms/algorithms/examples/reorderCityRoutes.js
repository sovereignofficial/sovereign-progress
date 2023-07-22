// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

let n = 6, connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]];

const minReorder = ( n, connections ) => {
    let r = Array(n).fill().map(_=>[[],[]]), m = 0, f = ( c, p, e = r[c].flat() ) => {
            m += r[c][0].length - r[c][0].includes(p)
            r[c][0].length = r[c][1].length = 0
            e.forEach( x => f( x, c ) )
        }
    for ( let [ a, b ] of connections ) r[a][0].push(b), r[b][1].push(a)
    return f(0) || m
}
