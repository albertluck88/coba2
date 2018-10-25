class Cart {
  constructor({ name, jumlah }) {
    this.name = name
    this.jumlah = jumlah
  }
}

const showCart = []

function addProduct(nama, jumlah) {
  if (showCart.length === 0) {
    showCart.push({ nama: nama, jumlah: jumlah })
  } else {
    for (let i = 0; i < showCart.length; i++) {
      if (showCart[i].nama === " " && showCart[i].jumlah === " ") {
        showCart.push({ nama: nama, jumlah: jumlah })
      } else if (showCart[i].nama === nama) {
        showCart[i].jumlah += jumlah
      }
    }
  }
}

function removeProduct(nama) {
  for (let i = 0; i < showCart.length; i++) {
    if (showCart[i].nama === nama) {
      showCart.splice(i, 1)
    }
  }
}

addProduct("ikan", 2)
addProduct("bebek", 2)

console.log(showCart)

// const cart = new Cart();

// cart.addProduct("White Cap", 2);

// cart.addProduct("Red Shoes", 1);
// cart.addProduct("Red Shoes", 4);
// cart.addProduct("Red Shoes", 2);

// cart.addProduct("Black Shirt", 3);
// cart.removeProduct("Black Shirt");

// cart.removeProduct("Green Jacket");

// cart.showCart();
