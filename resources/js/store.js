import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import { eventBus } from './app'

import router from './routes'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        storeProducts:[],

        userObj: null,

        notUserObj: null,

        userStoreviews: null,

        searchArr: [],

        /* =====================================
                    HOME PAGE
        =====================================*/

        homePageProds: [],

        /* =====================================
                    STOREVIEW
        =====================================*/

        storeviewInfo: {},

        /* =====================================
                    SEARCH RESULT ARRAY
        =====================================*/

        originalSearchResultArr: [],

        filterSearchResultArr: [],

        nextPageUrl: null,

        lastPageUrl: null,

        /* ====================================
            LOADING SPINNER
        ==================================== */

        loadingSpinner: false,

        /* ================================== */
        spacialRouteArr: [],

        /* =====================================
            SEARCH ROUTES
        ======================================*/
        searchOptionSelected: {},

        /* =====================================
            Region Store
        ===================================== */

        countryArr: null,
        country: null,

        stateArr:null,
        state: '',

        cityArr: null,
        city: null,

        /* ====================================
            Category
        ==================================== */

        categoriesChildren: [],

        categoriesParent: [],

        categoriesProducts: [],

        categoriesStates: [],

        categoriesCities: [],

        categoriesAreas: [],

        allCategories: [],

        allCategoriesBrand: [],

        /*  */

        totalCountOfSavedProducts: '',

    },

    /*-------------------------------------------------------------------
     *      ACTIONS
     * ------------------------------------------------------------------
     *
     *
     */

    actions: {

        /*
        * ------     User info  ----
        */

        disUserInfo: ({commit}) => {

            const token = localStorage.getItem('token');

            if (token != undefined)
            {

                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                axios.get('/user')
                .then((response) => {

                    let data = response.data

                    commit('mutUserInfo', data);
                })

                .catch((errors) => {

                    console.log(errors.response);
                    console.log(errors.response.statusText);

                    commit('mutUserInfo', { unAuth:  errors.response.statusText});

                })
            } else {

                return;
            }

        },

        /*------------------------
        * ------  User's Storeview
        */

        async disUserStoreviews ({ commit, getters })
        {
            console.log(getters.getUserInfo.id)
            let id = getters.getUserInfo.id

            axios.get('/mystores/' + id)

            .then((response) => {
                let data = response.data.data;
                if (data.length > 0)
                {
                    console.log(data.length+' '+ 'usr strviw')
                    commit('mutUserStoreviews', data);

                }
            })

            .catch((errors) => {
                console.log(errors)
            })

            /* let url = '/mystores/' + id;

            let response = await axios.get(url);

            let data = response.data.data;

            let errors =


            console.log(data) */
        },

        /* ===============================================
                    HOME PAGE
        =============================================== */

        async disHomePageProds({ commit, getters }, payload) {

            axios.get('/homeproducts', { params: payload.getPrd })
            .then((res) => {
                console.log(res);


                if(res) {

                    let incomingCats = [
                            {id: '1', v: 'Electrinics'},
                            {id: '6', v: 'Men'},
                            {id: '12', v: 'Women'}
                        ];


                    let object = res.data;

                        let categories = [];

                    incomingCats.forEach((cat, i) => {

                        for (const key in object) {

                            if (object.hasOwnProperty(key)) {
                                //const element = object[key];
                                const element = key;

                                //console.log(element)

                                    if(key == cat.v) {

                                        if(object[key] != null && object[key].length > 0) {

                                            let obj = {

                                                id: cat.id,

                                                hasPrd: true,

                                                cate: key,

                                                products: object[key]

                                            }

                                            //console.log(obj)

                                            categories.push(obj);

                                        }

                                    }

                                }
                            }
                        });

                    commit('mutHomePageProds', categories );

                }



            })
            .catch((err) => {
                console.log(err.response);
            })
            .finally(this.spinner = false);

        },

        /* ================================================ */

       async disLoadProducts({commit}) {

            let url = './api/products';

            let response = await axios.get(url);

            let data = response.data.data;

            commit('mutStoreviewProducts', data )
            /* console.log(response.data.data); */
        },

        /*------------------------
        * ------  Logout
        */

        disLogout ({commit})
        {
            axios.post('/logout')
            .then((response) => {
                console.log(response)

                localStorage.removeItem('id');
                localStorage.removeItem('token');
                localStorage.removeItem('user');

                commit('mutRemoveUser')
            })
            .catch((errors) => {
                console.log(errors)
            })
        },

        /* ==========================================
                    STOREVIEW
        =============================================*/

        disStoreviewInfo({commit}, payload)
        {
            axios.get('/storeview/' + payload)
                .then((response) => {

                    console.log(response.data.data)

                    let storeviewInfo = response.data.data;

                    commit('mutStoreviewInfo', storeviewInfo);
                })
                .catch((errors) => {
                    console.log(errors)

                    eventBus.$emit('noStore', errors.response.status)

                })
        },


        /* ==========================================
                    SEARCH BOX LIST
        =============================================*/

        disSearchArr ({ commit }, payload) {

            let products = [];

            //axios.get('/'+ payload.pth +'?q=' + payload.srch)
            axios.get(`/${payload.pth}`,{ params: payload.q} )
            .then((response) => {
                        //products = response.data;
                        products = response.data.data;
                        products = products.splice(0, 5);
                        // this.searchVisible = true;
                        commit('mutSearchArr', products)
                        console.log(response);
                    })
                    .catch((err) => {

                        console.log(err.response)
                    })
        },

        /* ==========================================
                    SEARCH RESULT PAGE PRODUCTS
        =============================================*/

        /* disSearchResult ({ commit }, payload)
        {
            commit('mutLoadingSpinner', true)

            setTimeout(() => {

                axios.get('/'+ payload.pth +'?q=' + payload.srch )
                .then((response) => {
                    console.log(response);
                    commit('mutSearchReultArr', response.data.data)
                    commit('mutNextPageUrl', response.data)
                    //console.log(JSON.stringify(response, null, 2))
                    //console.log(payload.pth + ' ' + payload.srch+ ' '+ 'disSrhRst');
                })
                .catch((err) => {

                    console.log(err)
                })
                .finally(() => (commit('mutLoadingSpinner', false)));

            }, 1000)
        }, */
        disSearchResult ({ commit }, payload)
        {
            commit('mutLoadingSpinner', true)

            console.log(payload)

            setTimeout(() => {

                axios.get(`/${payload.pth}`,{ params: payload.query} )
                .then((res) => {
                    console.log(res);
                    commit('mutSearchReultArr', res.data.products.data);
                    commit('mutNextPageUrl', res.data.products);
                    commit('mutWantedCat', {
                        // parent: res.data.parent,
                        // child: res.data.child,
                        // prod: res.data.products.data,
                        states: res.data.state,
                        cities: res.data.city,
                        areas: res.data.area,
                        //allCat: res.data.allCat,
                        brand: res.data.brands,
                    });

                    //console.log(JSON.stringify(response, null, 2))
                    //console.log(payload.pth + ' ' + payload.srch+ ' '+ 'disSrhRst');
                })
                .catch((err) => {

                    console.log(err.response)
                })
                .finally(() => (commit('mutLoadingSpinner', false)));
            }, 1000)

        },

        /* ==========================================
                    SEARCH RESULT NEXT PAGE PRODUCTS
        =============================================*/

        disSearchNextResult ({ commit, state }, payload)
        {
            if(state.nextPageUrl != null) {

                commit('mutLoadingSpinner', true)

                setTimeout(() => {

                    axios.get(payload)
                    .then((response) => {
                        commit('mutAddNextPageSearchResult', response.data.products.data)
                        commit('mutNextPageUrl', response.data.products)

                        console.log(response);
                        //console.log(JSON.stringify(response, null, 2))
                        //console.log(payload.pth + ' ' + payload.srch+ ' '+ 'disSrhRst');
                    })
                    .catch((err) => {

                        console.log(err)
                    })
                    .finally(() => (commit('mutLoadingSpinner', false)));

                }, 1000);
                return;

            } else {

                return;
            }
        },

        /* =============================================================
                Category Products
        ============================================================= */

        disWantedCategory({ commit }, payload)
        {

            commit('mutLoadingSpinner', true)

            //axios.post('/categories/getproducts', payload)
            axios.get('/categoryproducts', { params: payload.query})
                .then((res) => {
                    console.log(res);
                    console.log(res.data.products);

                    commit('mutWantedCat', {
                        parent: res.data.parent,
                        child: res.data.child,
                        prod: res.data.products.data,
                        states: res.data.state,
                        cities: res.data.city,
                        areas: res.data.area,
                        allCat: res.data.allCat,
                        brand: res.data.brands,
                    });
                    commit('mutNextPageUrl', res.data.products);
                })
                .catch((err) => {
                    console.log(err.response)
                })
                .finally(() => (commit('mutLoadingSpinner', false)));
        },

        /* =========================================================================
                    CATTEGORY SEARCH RESULT NEXT PAGE PRODUCTS
        ============================================================================*/

        disSearchCatNextResult ({ commit, state }, payload)
        {
            console.log(payload);
            // return;
            if(state.nextPageUrl != null) {

                commit('mutLoadingSpinner', true)

                setTimeout(() => {

                    axios.get(payload)
                    .then((response) => {
                        commit('mutAddNextPageSearchResult', response.data.products.data)
                        commit('mutNextPageUrl', response.data.products)

                        console.log(response);
                        //console.log(JSON.stringify(response, null, 2))
                        //console.log(payload.pth + ' ' + payload.srch+ ' '+ 'disSrhRst');
                    })
                    .catch((err) => {

                        console.log(err)
                    })
                    .finally(() => (commit('mutLoadingSpinner', false)));

                }, 1000);
                return;

            } else {

                return;
            }
        },

        /* ========================================= */

        /* ==========================================
                SPACIAL ROUTE PRODUCTS
        =============================================*/

        disSpacialRoute ({ commit }, payload)
        {
            setTimeout(() => {

                axios.get('/'+ payload)
                .then((response) => {
                        commit('mutSpacialRouteArr', response.data.data)
                        console.log(response);
                    })
                    .catch((err) => {

                        console.log(err)
                    })

                }, 1300)
        },

        /* ==========================================
                Region
        =============================================*/

        /* ===   Country   ========================= */

        disCountryFromIp ({ commit }, payload)
        {

            axios.get('/country')
                .then((response) => {
                    console.log(response.data.data);
                    console.log(payload.cnt)

                    let cntArr = response.data.data;

                    let obj = cntArr.filter(cn => {

                        if (cn.name == payload.cnt) {
                            return cn;
                        }
                    });

                    console.log(obj[0])

                    commit('mutCountryFromIp', {obj: obj[0], arr: cntArr})

                    if(payload.st) {

                        store.dispatch('disStateFromIp', {stateLink: obj[0].countrystates, filterState: payload.st, ct: payload.ct})
                    }

            })
                .catch((errors) => {
                    console.log(errors);
            });


        },

        /* ===   State   ========================= */

        disStateFromIp ({ commit }, payload)
        {

            axios.get(payload.stateLink)
                .then((response) => {
                    console.log(response.data.data);

                    let cntArr = response.data.data;

                    let obj = cntArr.filter(cn => {

                        if (cn.name == payload.filterState) {
                            return cn;
                        }
                    });

                    console.log(obj[0])

                    commit('mutStateFromIp', {obj: obj[0], arr: cntArr})

                    store.dispatch('disCityFromIp', {cityLink: obj[0].statecities, filterCity: payload.ct})

            })
                .catch((errors) => {
                    console.log(errors);
            });


        },

        /* ===   City   ========================= */

        disCityFromIp ({ commit }, payload)
        {

            axios.get(payload.cityLink)
                .then((response) => {
                    console.log(response.data.data);

                    let cntArr = response.data.data;

                    let obj = cntArr.filter(cn => {

                        if (cn.name == payload.filterCity) {
                            return cn;
                        }
                    });

                    console.log(obj[0])

                    commit('mutCityFromIp', {obj: obj[0], arr: cntArr})
            })
                .catch((errors) => {
                    console.log(errors);
            });
        },

        /* =============================================== */

        /* ===   When can't fetch ip   =================== */

        disFechCountry({ commit })
        {
            axios.get('/country')
                .then((res) => {

                    console.log(res);

                    let cntArr = res.data.data;

                    commit('mutCountryFromIp', {obj: '', arr: cntArr})

                })
                .catch((err) => {

                    console.log(err);
                })
        },

        /* ===   ===   ===   === */

        disChangeCountrySoChangeState({ commit }, payload)
        {
            axios.get(payload.countrystates)
                .then((res) => {
                    console.log(res.data.data);

                    let arr = res.data.data

                    commit('mutStateFromIp', {obj: '',  arr: arr})
                    commit('mutCityFromIp', {obj: ''})
                })
                .catch((err) => {
                    console.log(err.response);
                })
        },

        disChangeStateSoChangeCity({ commit, getters }, payload)
        {
            if(payload) {

                axios.get(payload.statecities)
                    .then((res) => {
                        console.log(res.data.data);

                        let arr = res.data.data

                        commit('mutCityFromIp', {obj: '',  arr: arr});

                    })
                    .catch((err) => {
                        console.log(err.response);
                    })
            }

        },



        disTotalCountOfSavedProducts({ commit })
        {
            axios.get('/totalsaveditems')
                .then((res) => {
                    console.log(res)

                    commit('mutTotalCountOfSavedProducts', res.data.total_saved)
                })
                .catch((err) => {
                    console.log(err.response);
                })

        },

    },

    /*-------------------------------------------------------------------
     *      MUTATIONS
     * ------------------------------------------------------------------
     *
     *
     */

    mutations: {

        /* ==========================================
                RESET ALL
        =============================================*/

        mutResetAll(state, payload)
        {
            state.searchArr = [];

            state.searchResultArr = [];
        },

        /* ==========================================
                RESET SEARCH BOX LIST
        =============================================*/
        mutResetSearchBox(state, payload)
        {
            state.searchArr = [];
        },

        /* ===========================================
                USER INFO
        =========================================== */

        mutUserInfo(state, payload)
        {
            if(payload.unAuth) {

                state.notUserObj = payload.unAuth;

            } else {

                state.userObj = payload;
                //console.log( JSON.parse(JSON.stringify(payload.storeviews)))

                state.userStoreviews = JSON.parse(JSON.stringify(payload.storeviews));
            }

        },

        /* ===========================================
                HOME PAGE
        =========================================== */
        mutHomePageProds(state, payload)
        {
            state.homePageProds = payload;
        },
        /* ===========================================
                STOREVIEW
        =========================================== */

        mutStoreviewInfo(state, payload)
        {
            state.storeviewInfo = payload;
        },

        /* ===========================================
                USER STOREVIEW
        =========================================== */

        mutUserStoreviews (state, payload)
        {
            //state.userStoreviews = payload
        },

        mutStoreviewProducts(state, payload)
        {
            //console.log(payload);
            state.storeProducts = payload;
        },
        mutRemoveUser (state)
        {
            state.userObj = null;

            state.userStoreviews = null;

            state.totalCountOfSavedProducts = '';
        },

        /* ==================================
                SEARCH BOX ARRAY
        =================================== */

        mutSearchArr (state, payload)
        {
            state.searchArr = payload
        },

        /* ==================================
                SEARCH RESULT ARRAY
        ===================================*/

        mutSearchReultArr (state, payload)
        {
            state.originalSearchResultArr = payload

            state.filterSearchResultArr = payload;

        },

        // ==========   SPINNER   =============================================

        mutLoadingSpinner (state, payload)
        {
            state.loadingSpinner = payload;
        },

        /* ==================================
            SEARCH RESULT NEXT PAGE URL
        ===================================*/

        mutNextPageUrl(state, payload)
        {
            state.nextPageUrl = payload.next_page_url;

            state.lastPageUrl = payload.last_page_url;
        },

        mutAddNextPageSearchResult(state, payload)
        {
            //let aa = state.filterSearchResultArr;

            payload.forEach(itm => {

                state.originalSearchResultArr.push(itm)
            });

           // state.filterSearchResultArr = aa
        },

        mutClearSearchResult (state) {

            state.filterSearchResultArr = [];
        },

        /* ================================== */

        mutSpacialRouteArr(state, payload)
        {
            state.spacialRouteArr = payload;
        },

        /* =======================================================
                            AREA FILTER
        ======================================================== */

        // mutAreaArr(state, payload)
        // {   let aa = payload;
        //     let bb = JSON.parse(JSON.stringify(state.originalSearchResultArr));
        //     let cc = [];

        //     if(aa.length != 0) {

        //         aa.forEach(a => {

        //             bb.filter((b) => {
        //                 if(a == b.area.name) {
        //                     cc.push(b)
        //                 }
        //                 //return prd.title.toLowerCase().match(this.search);
        //             })
        //         });

        //         return state.filterSearchResultArr = cc;
        //     }

        //    return state.filterSearchResultArr = JSON.parse(JSON.stringify(state.originalSearchResultArr));
        // },

        /* =============================================================
            SEARCH SELECT ROUTE
        ============================================================= */

        mutSelectRoute(state, payload)
        {
            state.searchOptionSelected = payload;
        },

        /* =====================================
            Region Store
        ===================================== */

        mutAllRegion(state, payload)
        {
            if(payload.cntArr) {

                state.countryArr = payload.cntArr;
            }
            if(payload.cnt) {

                state.country = payload.cnt;
            }

            if(payload.stArr) {

                state.stateArr = payload.stArr;
            }
            if(payload.st) {

                state.state = payload.st;
            }

            if(payload.ctArr) {

                state.cityArr = payload.ctArr;
            }
            if(payload.ct) {

                state.city = payload.ct;
            }

        },

        mutCountryFromIp(state, payload)
        {
            state.country = payload.obj;

            if (payload.arr) {

                state.countryArr = payload.arr;
            }

        },

        mutStateFromIp(state, payload)
        {
            state.state = payload.obj;

            if (payload.arr) {

                state.stateArr = payload.arr;
            }

        },

        mutCityFromIp(state, payload)
        {
            state.city = payload.obj;

            if (payload.arr) {

                state.cityArr = payload.arr;
            }

        },

        /* =================   CATEGORY   ============================= */

        mutWantedCat(state, payload)
        {
            if(payload.parent) {

                state.categoriesParent = payload.parent;
            }
            if(payload.child) {

                state.categoriesChildren = payload.child;
            }
            if(payload.prod) {

                state.categoriesProducts = payload.prod;

                state.originalSearchResultArr = payload.prod;

            }
            if(payload.states) {

                state.categoriesStates = payload.states;
            } else {

                state.categoriesStates = null;
            }
            if(payload.cities) {

                state.categoriesCities = payload.cities;
            } else {

                state.categoriesCities = null;
            }
            if(payload.areas) {

                state.categoriesAreas = payload.areas;
            } else {

                state.categoriesAreas =  null            }
            if(payload.allCat) {

                state.allCategories = payload.allCat;
            }
            if(payload.brand) {

                state.allCategoriesBrand = payload.brand;
            } else {

                state.allCategoriesBrand = null;
            }





        },

        /* ====================== Total saved items  ============================= */

        mutTotalCountOfSavedProducts(state, payload)
        {
            state.totalCountOfSavedProducts = payload
        },


    },

    /*-------------------------------------------------------------------
     *      GETTERS
     * ------------------------------------------------------------------
     *
     *
     */

    getters: {

    /* ===========================================
                USER
    =========================================== */

    getUserInfo: state =>
    {
        //console.log(state.userObj)

        return state.userObj;
    },
    getNotUserInfo: state =>
    {
        //console.log(state.userObj)

        return state.notUserObj;
    },

    getUserStoreviews (state)
    {
        return state.userStoreviews;
    },

    getStoreProducts(state) {
       // console.log(state.storeProducts)
            return state.storeProducts;
        },

    getSearchArr (state)
    {
        return state.searchArr;
    },

    /* ===========================================
                HOME PAHE
    =========================================== */

    getHomePageProds(state)
    {
        return state.homePageProds;
    },

    /* ===========================================
                STOREVIEW
    =========================================== */

    getStoreviewInfo(state)
    {
        return state.storeviewInfo;
    },

    /* ==================================
        SEARCH RESULT ARRAY
    ===================================*/

    getOriginalSearchResultArr (state)
    {
        return state.originalSearchResultArr;
    },

    getFilteredSearchResultArr (state)
    {
        return state.filterSearchResultArr;
    },

    loadingSpinner (state)
    {
        return state.loadingSpinner
    },

    /* ==================================
        SEARCH RESULT NEXT PAGE ARRAY
    ===================================*/

    getSearchResultNextPageUrl (state)
    {
        return state.nextPageUrl;
    },

    /* ==================================
        SEARCH ROUTE
    ===================================*/

    getSearchOptionSelected (state)
    {
        return state.searchOptionSelected;
    },

    /* ====================================== */

    getSpacialRouteArr (state)
    {
        return state.spacialRouteArr
    },

    /* =====================================
            Region Store
    ===================================== */

    getCountryArr (state)
    {
        return state.countryArr;
    },

    getCountry (state)
    {
        return state.country;
    },

    getStateArr (state)
    {
        return state.stateArr;
    },
    getState (state)
    {
        return state.state;
    },

    getCityArr (state)
    {
        return state.cityArr;
    },
    getCity (state)
    {
        return state.city;
    },

    /* ============================   Categories   ==================================== */

    getCategoryChildren(state)
    {
        return state.categoriesChildren;
    },
    getCategoryParent(state)
    {
        return state.categoriesParent;
    },
    getCategoryProducts(state)
    {
        return state.categoriesProducts;
    },
    getCategoryStates(state)
    {
        return state.categoriesStates;
    },
    getCategoryCities(state)
    {
        return state.categoriesCities;
    },
    getCategoryAreas(state)
    {
        return state.categoriesAreas;
    },
    getAllCategory(state)
    {
        return state.allCategories;
    },
    getCategoryBrand(state)
    {
        return state.allCategoriesBrand;
    },

    /* ======================  totale saved products  ================================== */

    getTotalCountOfSavedProducts(state)
    {
        return state.totalCountOfSavedProducts;
    },


    },



});
