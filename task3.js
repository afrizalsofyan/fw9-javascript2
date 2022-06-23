function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    let data
    if (nilaiAwal < nilaiAkhir){
        if(dataArray.length > 5 ){
            data = dataArray.filter((el)=>{
               return el >= nilaiAwal && el <=nilaiAkhir
            })
            data.sort((a,b)=>{
                return a-b
            })
            console.log(data)
        } else {
            console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        }
    } else {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
}

seleksiNilai(5,20, [2,25,4,14,17,30,8])
