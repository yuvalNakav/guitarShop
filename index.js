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
        price= newPrice;
        return price;
    }
}