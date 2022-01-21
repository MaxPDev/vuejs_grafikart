let vm = new Vue({
    el: '#app',

    data: {
        seconds: 0
    },

    mounted() {

        //old js :
        // let self = this
        // setInterval(function() {
        //     this.secondes++
        // })

        // ES6 :

        // le $ sert à différencier les variable
        // issu de la logique du code, des data de vueJS
        this.$interval = setInterval(() => {

            console.log('Time')
            // si vm.destroy(), le console log conttinue quand même

            // Lorsqu'on créer des écoute de scroll ou autre
            // il faut pense à ça, sinon ça ralenti l'appli

            // Du coup on le met dans une var $, et on le clear dans destroyed()

            this.seconds++
        }, 1000)

    },

    //..pour ça:
    destroyed() {
        clearInterval(this.$interval)
    },

    // Dans le cas d'une instance, pas nécessaire. Mais lors des composant, oui.
    // sion bind avec mounted, supprimer dans destroyed

    methods: {
        //
    }
})


// Propriété watché : data
// Si on rajoute propriété plus tard, pas watché

// Pas accès au tableau avec index
// pas possible de créer des propriété dans un objet (ne détectera pas le changement)

// lifecycle : bien comprendre.