app.component('product-details',{
    prop: {
        details: {
            type: String,
            required: 'ds'
        }
    },
    template:
    /*html*/
    `<p>This is product details</p>
    <p>{{dd}}</p>`,
    computed: {
        dd() {
            return this.details
        }
    }

})