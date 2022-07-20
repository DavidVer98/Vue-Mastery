const app = Vue.createApp({
    data: function(){
        return{
            cart:0,
            premium : false
        }
    },
    methods:{

    },

    computed:{
    }
})
app.config.performance = true;
app.config.devtools = true;
//app.mount("#app");