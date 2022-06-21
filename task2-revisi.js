function searchName (query, limit, callback){
    const names = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ]
    
    function lowerCaseString (element){
        return element.toLowerCase()
    }
    const nameData = names.map(lowerCaseString)
    const filterName = nameData.filter(e=> e.includes(query.toLowerCase())).slice(0,limit)
    let result = []
    filterName.forEach(el => {
        const getFirstChar = el.charAt(0)
        const changeUpperChar = getFirstChar.toUpperCase()
        const finalText = `${changeUpperChar}${el.slice(1)}`
        result.push(finalText)
    })
    callback(result)
}

searchName('an',3, console.log)