//When inStock is false, bind a class to the “Out of Stock” p tag that adds  text-decoration: line-through to that element.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    inStock: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0,
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    onSale: true
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
    removeFromCart() {
      this.cart -= 1
    }
  }
})
