class Keranjang {
  constructor(items) {
    this.items = items || []
  }

  tambahBarang(item) {
    this.items.push(item)
  }

  cekJumlahBarang() {
    return this.items.length + " buah"
  }
}
class Barang {
  constructor(item, jumlah, harga) {
    this.item = item
    this.jumlah = jumlah
    this.harga = harga
  }
}

class Hp extends Barang {
  constructor(item, jumlah, harga, merk) {
    super(item, jumlah, harga)
    this.merk = merk
  }

  updateBarang(item) {
    return (this.item = item)
  }
}

const xiaomi = new Hp("hp", 2, 10000, "xiaomi")
const sony = new Hp("hp", 2, 10000, "sony")

const keranjang = new Keranjang()

keranjang.tambahBarang(xiaomi)
keranjang.tambahBarang(sony)

console.log(keranjang)
console.log(keranjang.cekJumlahBarang())
