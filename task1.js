const arr1 = [1,2]
const arr2 = [3,4,5,0]

/*1. concat ()
    method javascript yang digunakan untuk melakukan penggabungan 2 array kedalam 1 array. 
    jika terdapat array a dan b maka array b akan ditambahkan mengikuti setelah array a dituliskan sehinga
    akan menghasilkan sebuah array baru dari gabungan kedua array tersebut.
*/
// const arrConcat = arr1.concat(arr2)
// console.log(arrConcat)



/*
    2. pop()
    Method ini digunakan untuk menghapus value pada element terakhir dalam array
*/
// const popEl = arr2.pop()
// console.log(popEl)
// console.log(arr2)



/*
    3. filter()
    method ini digunakan untuk mencari suatu nilai yang terdapat pada suatu array. apabila nilai yang dimasukan
    terdapat didalam array, maka nilai tersebut akan dikembalikan lagi dalam bentuk array, tapi jika nilai
    yang dimasukan tidak terdapat pada array maka array yang dikembalikan akan kosong
*/
// const arrFilter = arrConcat.filter(function(number){
//     return number < 5
// })
// console.log(arrFilter)



/* 
    4. indexOf()
    method ini digunakan untuk melihat index dari value yang dimasukan didalam sebuah array.
*/

// const arrIndexOf = arrConcat.indexOf(0)
// console.log(arrIndexOf)



/* 
    5. join()
    method ini digunakan untuk menggabungkan element array menjadi satu kedalam bentuk string atau bukan array
*/
// const arrJoin = arrConcat.join(', ')
// console.log(arrJoin)



/* 
    6. slice()
    Method yang digunakan untuk mengambil value array pada index tertentu dan dimasukan kedalam array baru
*/
// const sliceExample = arr2.slice(1, 3)
// console.log(sliceExample)



/* 
    7. toString()
    Method yang digunakan untuk mengubah array beserta valuenya menjadi bentuk string.
*/
// const toStringExample = arr2.toString()
// console.log(toStringExample)



/* 
    8. reverse()
    method yang digunakan untuk menukar posisi value di array
*/
// const reverseExample = arr2.reverse()
// console.log(reverseExample)



/* 
    9. shift()
    method digunakan untuk menghapus element pertama pada array
*/
// const shiftExample = arr2.shift()
// console.log(shiftExample)
// console.log(arr2)



/*
    10. forEach()
    method yang digunakan untuk mengetahui dan mengeksekusi element, index yang ada pada array yang merupakan parameter dalam sebuah callback function
*/
// const newArr = []
// const forEachExample = arr2.forEach((el,index)=>{
//     console.log(`element ke ${index}: value ${el}`)
//     newArr.push(el)
// })
// newArr.push(10)
// console.log(newArr.sort((a,b)=>b-a))
