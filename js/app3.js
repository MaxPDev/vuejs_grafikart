let vm = new Vue({
    el: '#app',

    data: {
        success: false,
        message: '',

        success_comp: false,
        message_comp: '',

        // autre exemple
        firstname: 'Jean',
        lastname: 'DeLaTour',

        // illustration des watchers
        fullname_watched: '',

        nb1: 1,
        nb2: 1,
        sum: '',
    },

    watch: {
        // détecte modification d'une variable

        fullname_watched(value) {
            console.log('watch', value);
        },

        // incr_watch() {
        //     this.nb1++;
        // },

        // sum_watch() {
        //     return this.nb1 + this.nb2;
        // },
        
        
    },
    
    methods: {
        
        cls()  {
            
            console.log('cls called');
            // est exéctuer à chaque fois, même si c'est le message
            // qui est modifié, pour qu'il sache si jamais c'est success
            // qui a été modifié
            
            // Pourqu'il n'exécute le code qu'une seul fois : computed
            
            return this.success === true ? 'success' : 'error'
        },
        
        // sum_meth() {
        //     return this.nb1 + this.nb2;
        // },

        // meth_incr() {
        //     this.nb1++
        // }
    },
    
    computed: {
        
        // met en cache que c'est success_comp qui est utilisé
        // et ne s'activera que lorsuq'il s'agira de cette variable
        // Improtant pour les perf
        cls_comp() {
            
            console.log('cls_comp called');
            
            return this.success_comp === true ? 'success' : 'error'
        },
        // getter uniquement : on peut pas redéfinir cls_comp
        
        
        fullname() {
            return this.firstname + ' ' + this.lastname
        },
        
        // On peut récupérer le comportement de modification avec les set and get
        fullname_modified: {
            //getter
            get() {
                return this.firstname + ' ' + this.lastname;
            },
            
            set(value) {
                console.log(value); // value de l'input
                
                // Récupérer value, le split et le ranger dans les valeurs dans data
                let parts = value.split(' ')
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        },
        
        // sum_comp() {
        //     return this.nb1 + this.nb2;
        // },

        // incr_comp: {

        //     set() {
        //         this.nb1++
        //     },

        //     get() {
        //         return this.sum = this.nb1 + this.nb2

        //     }
        // }
    }
    
    
})


