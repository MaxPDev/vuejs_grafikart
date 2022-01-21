/**
 * v-bind, v-model : directives.
 * On peut créer les siennes
 */

Vue.directive('salut', {
    bind: function(el, binding, vnode) {
        console.log(el, binding);
        el.value = binding.value;
        console.log('bind');
    },

    update: function (el, binding, vnode, oldvnode) {
        console.log('update')
    }

    // unbind, component_updated etc...
})

/**
 * si on ne veut pas faire de distinction
 * entre le bind et update
 * pour modifier le champ en temps réél,
 * on peut passer le bind en fonction
 * Pour le mm résultat, on peut écrire :
 */

//  Vue.directive('salut',function(el, binding) {
//         el.valuee = binding.value;
//         console.log('bind')
//     }
// )

// on peut stocker les directive :

// let salut = function(el, binding) {
//             el.valuee = binding.value;
//             console.log('bind')
//         }



let vm = new Vue({
    el: '#app',

    //si on a stocké directive dans une variable :
    // directives: {
    //     salut
    // },

    data: {

        message: 'Message important',

    },

    methods: {

        demo_sup() {
            console.log('niveau supérieur, buble')
        },

        de() {
            console.log("normal click")
        },

        demo: function () {
            console.log('demo prevent')
        },


        demo2: function () {
            console.log('demo stop')
        },

        demo3: function() {
            console.log('demo prevent stop')
        },

        demo4() {
            console.log('demo capture')
        },

        demo5() {
            console.log('demo self')
        },

    }
    
    
})


