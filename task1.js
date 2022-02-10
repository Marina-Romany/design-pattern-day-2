// use observable
class store{
    constructor(){
        this.prodectsTitle = ""
        this.prodectPrice = 0
        this.interstes = []
    }

 newprodect(titel , price){
    this.prodectsTitle = titel ; 
    this.prodectPrice = price ;
}

notifyAll (){
    return this.interstes.forEach(inter => inter.update(this))
}

register(interst){
    this.interstes.push(interst)
}
}

class person{
    update(store){
        console.log(`it's a new prodect" ${store.prodectsTitle} and price is ${store.prodectPrice} `)
    }
}


const store1 = new store();
const omnia  = new person();
const engy = new person ();

store1.register(omnia)
store1.newprodect("prodect1" , 100)

store1.register(engy)
store1.newprodect("prodect2" , 150)

