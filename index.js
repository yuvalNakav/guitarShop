function ClassicGuitar(manufactureYear, brand, price, numberOfString, used) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.numberOfString = 6;
    this.used = false;
    this.play = function(){
        alert("🎶🎶🎶");
        this.used = true;
        this.price = price * 9 / 10;
    }
    this.getManufactureYear = function(){
        alert(this.manufactureYear);
    }
    this.setPrice = function(newPrice){
        this.price= newPrice;
    }
}
function ElectricGuitar(manufactureYear, brand, price, numberOfString, used, longNeck){
    ClassicGuitar.call(this, manufactureYear, brand, price, numberOfString, used  )
    ElectricGuitar.prototype = Object.create(ClassicGuitar.prototype);
    this.longNeck = longNeck;
    this.play = function(){
        alert("🎸🎸🎸");
    }

}

function BassGuitar(manufactureYear, brand, price, numberOfString, used) {
    ClassicGuitar.call(this, manufactureYear, brand, price, used);
    this.numberOfString = 4;
    
    this.playSolo = function(){
        let playArray = ["💥", "🤘", "🎵", "📢", "💢", "🕺"]
        function shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;
          
            while (0 !== currentIndex) {
          
              
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
            alert(array);
          }
          shuffle(playArray);
          console.log(playArray);
        this.used = true;
        this.price = price * 9 / 10;
    }
    this.play = this.playSolo;
    
};