const app = Vue.createApp({
    data: function(){
        return{
            product : 'Socks',
            description: 'Size G and M, cotton',
            image: './assets/images/socks_blue.jpg',
            inventory: 100
        }
    }
})

//app.mount("#app");