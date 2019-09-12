new Vue({
    el:'#vue-app',
    data: {
        name: '',
        age: '',
        wiki: 'https://es.wikipedia.org/wiki/Wikipedia:Portada',
        websiteTag: '<a href="https://es.wikipedia.org/wiki/Wikipedia:Portada">Wikipedia</a>',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        number: 20,
        available: true,
        error: false,
        success: false,
        characters:['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 35},
            {name: 'Ken', age:55},
        ]
    },
    methods: {
        greet: function(time){
            return 'Good' + ' ' + time + ' ' + this.name; 
        },

        add: function(inc){
            this.age += inc;
        },
        substract: function(dec){
            this.age -= dec;
        },

        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function(){
            alert('You clicked me.')
        },
    },
    computed: {
        addToA: function(){
            return this.a + this.number;
        },

        addToB: function(){
            return this.b + this.number;
        },

        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    }
});