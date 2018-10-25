class Barang {
    constructor(item, jumlah, harga){
        this.item = item,
        this.jumlah = jumlah,
        this.harga = harga
    }
}

class Hp extends Barang {
    constructor(item, jumlah, harga, merk){
        super(item, jumlah, harga)
         this.merk = merk
    }

    updateBarang (item){
        return this.item = item
    }
}

const keranjang= []

const xiaomi = new Hp ('hp', 2, 10000, 'xiaomi')
const sony = new Hp ('hp', 2, 10000, 'sony')

keranjang.push(xiaomi, sony)
keranjang.splice(0,1)
jumlahBarang = keranjang.length

console.log(jumlahBarang)
