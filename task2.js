// use stratege
class Attack{
    football(detiels){
        return "att"
    }
}


class Defence{
    football(detiels){
        return"def"
    }
}


class Meduim{
    football(detiels){
        return "med"
    }
}


class Gameplan{
    setstratgy(plan){
        this.plan = plan;
    }
    football(detiels){
        return this.plan.football(detiels)}
}


var attack  =  new Attack();
var defence = new Defence ();
var meduim = new Meduim ();
var gameplan = new Gameplan ();
var player = {
    hisName : "mohamed salah",
    hisAge :  29 
}
gameplan.setstratgy(attack)
console.log(gameplan.football(player))

gameplan.setstratgy(defence)
console.log(gameplan.football(player))

gameplan.setstratgy(meduim)
console.log(gameplan.football(player))
