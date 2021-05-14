console.log("Hello World")

var array = [1,2,3,4,5,6,7,8,9,10,{nome:"Vinicius",idade:22,endereco:{rua:"Av. Brasília"}}]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(array[i])
}
console.log("Nome:",array[10].nome)
console.log("Rua:",array[10].endereco.rua)