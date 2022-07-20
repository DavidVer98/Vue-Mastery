app.component('product-display',{
    props:{
        premium :{
            type: Boolean, 
            required: true
        }
    } ,
    template:
    /*html*/
    `        <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img  :src="image" :class="{ 'out-of-stock-img' : !inStock}" alt="">
      </div>
      <div class="product-info">
      <h3>  {{title}}</h3>
       <p v-if="onSale">{{ saleMessage }}</p>
      <p v-if="inStock">In stock</p>
      <p v-else > Out of Stock</p>
      <p>Shopping: {{ shopping }}</p>

      <product-details :details="details"></product-details>
      
      <ul>
        <li> <div v-for="sieze in sizes">{{sieze}}</div></li>
      </ul>
      <ul>
        <li  class="color-circle" 
         v-for="(variant, index) in variants" 
         :key="variant.id"
         @mouseover="updateVariant(index)"
         :style="{ backgroundColor: variant.color }">
         </li>
      </ul>
      <hr>
      </div> 
      <button class="button" 
      v-on:click="addToCart()" 
      :class="{disabledButton : !inStock}"
      :disabled ="!inStock"> Add to Cart</button>
      <button 
      class="button"
      style="background-color:rgb(182, 59, 59) ;"
      v-on:click="deleteToCart()"> Delete to Cart</button>
  </div>
</div>`,

data: function(){
    return{
        product : 'Socks',
        // image: './assets/images/socks_blue.jpg',
        selectedVariant : 0,
        inventory: 10,
        details: ['50% cotton','30% wool','20% polyester'],
        variants : [
            { id: 2234, color:'green', image:'./assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color:'blue', image:'./assets/images/socks_blue.jpg',quantity: 0}
        ],
        sizes:['M','G','P'],
        // inStock : true,
        brand: 'Vue Mastery',
        onSale : true
    }
},
methods:{
    updateVariant(index){
        this.selectedVariant = index

    },
    addToCart(){
        this.cart +=1
        this.inventory -=1
        if( this.inventory == 0)
            this.inStock = false
        else
            this.inStock = true
        
    },
    deleteToCart(){
        if(this.cart > 0)
            this.cart -=1
            this.inventory +=1
        if( this.inventory == 0)
            this.inStock = false
        else
            this.inStock = true

    }
},

computed:{
    title(){
        return this.brand + ' ' + this.product
    },
    image(){
        return this.variants[this.selectedVariant].image
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity
    },
    saleMessage() {
        if (this.onSale) {
            return this.brand + ' ' + this.product + ' is on sale.'
        }
        return ''
    },
    shopping(){
        if (this.premium)
            return "Free"
        return 2.99
                                
    }
}
})