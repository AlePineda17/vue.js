var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue app 1',
    },
    methods: {
        
    },
    computed: {
        greet: function(){
            return 'Hello from app one';
        }
    },
});


var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app 2',
    },
    methods: {
        changeTitle: function(){
            one.title = "Title Changed";
        }
    },
    computed: {
        greet: function(){
            return 'Yo dudes, this is app two speaking to you :)';
        }
    },
});

two.title = "Changed from outside";

var data = {
    name: "Yoshi"
}

var components = vue.component('greeting',{
    template:'<p>Hey there, I am a re-usable component. <button v-on:click="changeName>Change the name</button></p>',
    data: function(){
        return {
            name: "Yoshi",
        }
    },
    methods:{
        changeName: function(){
            this.name = "Mario";
        }
    }
});