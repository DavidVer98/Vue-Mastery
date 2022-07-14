const app = Vue.createApp({
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
            cart:0,
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
        }
    }
})
app.config.performance = true;
app.config.devtools = true;
//app.mount("#app");