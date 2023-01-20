class tvs{
    name = "apache"
    price = 1234234
    cc = 99
}
let data = new tvs()
// console.log(data.name)
// console.log(data.price)
// console.log(data.cc)




 class hero{
     name = "super"
    price = 1234234
    cc = 99
    item(){
        console.log("hello item" , this.name)
    }
    mts(){
        console.log("hello mts" + this.cc + "and" + this.price)
    }
    constructor(){
        console.log("hell constractor")
    }
    static ankit(){
        console.log("hello ankit")
    }
 }
 //let part = new hero()
//  console.log(part.name)
//  console.log(part.price)
//  console.log(part.cc)
//console.log(part)
// part.item()
// part.mts()
hero.ankit()