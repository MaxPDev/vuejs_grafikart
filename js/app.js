let vm = new Vue({
    el: '#app',

    data: {
        message: 'Salut les gens',
        messageUser: 'Vas y',
        messageVar: 'vas y',

        link: 'https://grafikart.fr',

        success: true,

        persons: [
            'Albert',
            'trucmuch',
            'marcel'
        ],

        cls: 'success',

        // style: {background: 'red'}
    },

    // ne détecte pas les propriété qui sont ajouté au fer et à mesure
    // on ne pas accéder à un index d'un tableau

    methods: {
        close() {
            this.success = false
            this.messageVar = "fermé"
        },
        style() {

            if (this.success) {
                return {background: 'yellow'}
            } else {
                return {background: 'orange'}
            }
        },
        addPerson() {
            this.persons.push(prompt("test"));
            this.persons[0] = 'Marion'; // si pas push, ne sait pas mettre à jour (n'utilise pas le setter)
            this.demo = 'Salut';
        }
    },

    beforeCreate() {
        console.log(this.$el);
    },

    mounted() {
        console.log(this.$el);
    }


})
