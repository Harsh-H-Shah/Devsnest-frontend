var jungle = {
    animals:"lion",
    birds:"peacock",
    fastest:function (a,b){
        console.log("Cheetah is fastest");
        console.log(a-b);
    }
}

var ocean = {
    fish:"whale",
    animals:"turtle",
}
function edible (a,b){
    console.log(this.animals);
    console.log(a/b);
}

jungle.fastest.call(jungle,3,5);
edible.apply(jungle,[6,2]);

var print = edible.bind(ocean,3,8);
print();