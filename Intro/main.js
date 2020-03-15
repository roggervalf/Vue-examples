//Add an onSale property to the data, and use it to conditionally render a span that says “On Sale!”

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    inStock: true,
    onSale: true
  } 
})
