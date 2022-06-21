function  rizna (name, cb){
    setTimeout(()=>{
        cb(name)
    }, 2000)
    console.log("Rizna")
}
function outp(text){
    console.log(text)
}

console.log("Hai Couple", outp())