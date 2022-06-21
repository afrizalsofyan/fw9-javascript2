const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function searchName(q, numPick, cb){
    const data = names.filter(function(x){
        return x.toLowerCase().indexOf(q.toLowerCase()) !==-1
    })
    const result = data.slice(0, numPick)
    cb(result)
}

function callback(arr){
    console.log(arr)
}
searchName('a',5, callback)