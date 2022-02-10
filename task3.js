// use builder
class Car{
    constructor(type ,price , color, isNewCar ){
        this.type  = type ;
        this.price     = price ;
        this.color= color ;
        this.isNewCar= isNewCar ;
    }
        toString(){
             return console.log(JSON.stringify(this))
    }
}
 class Truk{
    constructor(type ,price , color, isNewtruck ){
        this.type  = type ;
            this.price     = price ;
            this.color= color ;
            this.isNewtruck= isNewtruck ;
        }
    toString(){
        return console.log(JSON.stringify(this))
        }
    }

    class CarBuilder{
        constructor(type ,price , color, isNewCar){
            this.car = Car;
            return this
        }
        typeCar (type , price){
            this.car.type = type;
            this.car.price = price;
            return this
        }
        iscolor (color){
            this.car.color =color;
            return this
        }
        newcar (isNewCar){
            this.car.isNewCar = true ;
            return this
        }
        buildcar(){
            console.log(this.car)
            return this.car
        }
    }

class truckBuilder {
     constructor(type ,price , color, isNewCar ){
         this.truk = new Truk
     }
   typetruck (type , price){
    this.Truk.type = type;
    this.truck.price = price;
    return this
}
    iscolortruck (color){
    this.truck.color =color;
    return this
}
   newtruck (isNewtruck ){
      this.truk.isNewtruck = true ;
    return this
}
    buildtruck(){
    console.log(this.truck)
    return this.truck
}
}


const Car1 = new CarBuilder().typeCar("bmw" , 100).iscolor("yellow").newcar()
const truck1 = new truckBuilder().typetruck("toyota" , 150).iscolortruck("green").newtruck()







// class Directorbuilder {

//     constructor(typeOfCar , newcar , typeOfTruck , newtruck)
//     {
//         this.car = new director ()
//     //     this.typeOfCar = typeOfCar ;
//     //     this.newcar     = newcar ;
//     //     this.typeOfTruck= typeOfTruck ;
//     //     this.newtruck   = newtruck ;
//     // }
        
    // }


//     Car1(typeOfCar, newcar){
//         this.car.typeOfCar  = typeOfCar ;
//         this.car.newcar     = newcar ;
//         return this ;
//     }

//     Truck(typeOfTruck,newtruck){
//         this.car.typeOfTruck= typeOfTruck ;
//         this.car.newtruck   = newtruck;
//         return this ;
//     }

//     buildDirector(){
//         console.log(this.car)
//         return this.car
//     }
// }

//   const test = new Directorbuilder().Car1("kia" , "bmw").Truck("toyota" , "ferarry").buildDirector()
//   test.toString()