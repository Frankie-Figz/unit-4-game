function gem(value, gemText){
    this.gemValue = value;
    this.gemText = gemText;
};

var Gem = function(value, gemText) {
    this.value = value;
    this.gemText = gemText;
}

var gem1 = new gem(35, 'blue');
console.log(gem1);
console.log(gem1.gemText);
gem1.setGemValue(100);
console.log(gem1)

var gem2 = Gem(50, 'red');
console.log(gem2);
console.log(gem2);