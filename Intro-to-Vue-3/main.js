const app = Vue.createApp({
    data: function(){
        return{
            cart:[],
            premium : false
        }
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        },
        removeById(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        }
    },

    computed:{
    }
})
app.config.performance = true;
app.config.devtools = true;
//app.mount("#app");