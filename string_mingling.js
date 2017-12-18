function stringMingling(p, q) {
    if(p.length === 1) return p.substr(0,1) + q.substr(0,1)

    return p.substr(0,1) + q.substr(0,1) + stringMingling(p.substr(1, p.length),
    q.substr(1,q.length))

}
console.log(stringMingling('Pawel', 'Shaka'))