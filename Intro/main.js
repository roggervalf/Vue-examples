//Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
  } 
})
