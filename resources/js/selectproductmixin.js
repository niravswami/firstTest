import { eventBus } from './app'

export const selectSearchRoute = {
    mounted() {
        this.routeSelected();
    },
    data() {
        return {

        }
    },
    methods: {
        routeSelected() {

            let srchOpt = sessionStorage.getItem('srchOpt');

            if(srchOpt) {

                var x = JSON.parse(srchOpt);

                console.log(x)

                return this.switchFnc(x.web);

            }

            if(this.$route.params.webholder) {

                var x = this.$route.params.webholder;

                console.log(x)

                return this.switchFnc(x);

            }

            if (this.$route.query.webserch) {

                var x = this.$route.query.pth;

                console.log(x)

                return this.switchFnc(x);

            }
            if (this.what) {

                var x = this.what;

                console.log(x)

                return this.switchFnc(x);

            }

            return this.switchFnc();


        },

        switchFnc(x) {

            switch (x) {

                case 'products':
                    //this.searchOptionSelected = {id: 'searchproducts', name: 'Products', web: 'products'};
                    eventBus.$emit('pathWebholder', {id: 'searchproducts', name: 'Products', web: 'products'});
                    this.$store.commit('mutSelectRoute', {id: 'searchproducts', name: 'Products', web: 'products'})
                    break;

                case 'serviceandbusiness':
                    //this.searchOptionSelected = {id: 'searchserviceandbusiness', name: 'Service / Business', web: 'serviceandbusiness'};
                    eventBus.$emit('pathWebholder', {id: 'searchserviceandbusiness', name: 'Service / Business', web: 'serviceandbusiness'});
                    this.$store.commit('mutSelectRoute', {id: 'searchserviceandbusiness', name: 'Service / Business', web: 'serviceandbusiness'})
                    break;

                case 'properties':
                    //this.searchOptionSelected = {id: 'searchproperties', name: 'Propeties', web: 'properties'};
                    eventBus.$emit('pathWebholder', {id: 'searchproperties', name: 'Propeties', web: 'properties'});
                    this.$store.commit('mutSelectRoute', {id: 'searchproperties', name: 'Propeties', web: 'properties'})
                    break;

                case 'useditems':
                     //this.searchOptionSelected = {id: 'searchuseditems', name: 'Used Items', web: 'useditems'};
                     eventBus.$emit('pathWebholder', {id: 'searchuseditems', name: 'Used Items', web: 'useditems'});
                     this.$store.commit('mutSelectRoute', {id: 'searchuseditems', name: 'Used Items', web: 'useditems'})
                    break;

                case 'education':
                     //this.searchOptionSelected = {id: 'searcheducation', name: 'Education', web: 'education'};
                     eventBus.$emit('pathWebholder', {id: 'searcheducation', name: 'Education', web: 'education'});
                     this.$store.commit('mutSelectRoute', {id: 'searcheducation', name: 'Education', web: 'education'})
                    break;

                default:
                    //return this.searchOptionSelected = {id: 'searchproducts', name: 'Products', web: 'products'};
                    eventBus.$emit('pathWebholder', {id: 'searchproducts', name: 'Products', web: 'products'});
                    this.$store.commit('mutSelectRoute', {id: 'searchproducts', name: 'Products', web: 'products'});
                    return;
                }

        }

    }
};
