const app = Vue.createApp({
    data: function(){
        return{
            product : 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 100,
            details: ['50% cotton','30% wool','20% polyester'],
            variants : [
                { id: 2234, color:'green', image:'./assets/images/socks_green.jpg'},
                { id: 2235, color:'blue', image:'./assets/images/socks_blue.jpg'}
            ],
            sizes:['M','G','P'],
            cart:0
        }
    },
    methods:{
        updateImage(variantImage){
            this.image = variantImage
        },
        addToCart(){
            this.cart +=1
        },
        deleteToCart(){
            if(this.cart > 0)
                this.cart -=1
        }
    },
})
app.config.performance = true;
app.config.devtools = true;
//app.mount("#app");