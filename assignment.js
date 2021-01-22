


function kilometerToMeter(kilometer){
    if (kilometer < 0){
        return "invalid input!";
    }
    var meter = kilometer * 1000;
    // console.log(meter)
    return meter;
   
}

//  var shoshurbari = kilometerToMeter(9);
//  console.log(shoshurbari);





function budgetCalculator(watch,phone,laptop){
    if (watch < 0 || phone < 0 || laptop < 0 ){
        return "Invalid input!";
    }
    var total = watch*50 + phone*100 + laptop*500;
    return total;
}
//  console.log(budgetCalculator(2,2,2));





function hotelCost(pernight){
    if (pernight < 0){
        return "invalid input!";
    }
    var cost = 0
    if (pernight <= 10) {
        cost = pernight * 100;
    }else if (pernight <= 20) {
        var firstpackage = 10* 100;
        var remaining = pernight - 10;
        var secondpackage = remaining * 80;
        cost = firstpackage + secondpackage;
    }else {
        var firstpackage = 10* 100;
        var secondpackage = 10 * 80;
        var remaining = pernight - 20;
        var thirdpackage = remaining * 50;
        cost = firstpackage + secondpackage + thirdpackage;
    }
    return cost;
}
//  var totalcost = hotelCost(25);
//  console.log(totalcost);




function megaFriend(name){
    var result = "";
    for (var i = 0; i <name.length;i++){
        var currentitem = name[i];
        if (currentitem.length > result.length){
            result = name[i];
        }
    }
    return result;
}
// var string = ["gf","bf","gfsex","bfsex","bou","nijerbou","manuserbou"];
// console.log (megaFriend(string));