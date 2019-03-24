//import Vue from 'vue'
//import VueRouter from 'vue-router'
import { store } from './store'

import Home from './views/Home.vue'
//import SingleProduct from './views/SingleProduct.vue'
//import StoreView from './views/StoreView.vue'
//import UploadProductForm from './components/forms/UploadProductForm'
//import SearchResult from './views/SearchResult.vue'

import AuthGuard from './auth-guard'

const PathRouter = resolve => {
    require.ensure(['./views/Path/PathRouter.vue'], () => {
        resolve(require('./views/Path/PathRouter.vue'));
    });
};
const Path = resolve => {
    require.ensure(['./views/Path/Path.vue'], () => {
        resolve(require('./views/Path/Path.vue'));
    });
};


const SingleProduct = resolve => {
    require.ensure(['./views/SingleProduct.vue'], () => {
        resolve(require('./views/SingleProduct.vue'));
    });
};

/* ====================================================
                STOREVIEW
==================================================== */
const StoreViewPath = resolve => {
    require.ensure(['./views/StoreviewChildren/StoreviewPath.vue'], () => {
        resolve(require('./views/StoreviewChildren/StoreviewPath.vue'));
    });
};
const StoreView = resolve => {
    require.ensure(['./views/StoreView.vue'], () => {
        resolve(require('./views/StoreView.vue'));
    });
};
const StoreViewProductsList = resolve => {
    require.ensure(['./views/StoreviewChildren/StoreviewProductsList.vue'], () => {
        resolve(require('./views/StoreviewChildren/StoreviewProductsList.vue'));
    });
};


const UploadProductForm = resolve => {
    require.ensure(['./components/forms/ProductUploadForm.vue'], () => {
        resolve(require('./components/forms/ProductUploadForm.vue'));
    });
};
const WhatToUpload = resolve => {
    require.ensure(['./components/forms/WhatToUpload.vue'], () => {
        resolve(require('./components/forms/WhatToUpload.vue'));
    });
};
const ProductUpload = resolve => {
    require.ensure(['./components/ProductUpload.vue'], () => {
        resolve(require('./components/ProductUpload.vue'));
    });
};
const WhereUploade = resolve => {
    require.ensure(['./components/WhereUploade.vue'], () => {
        resolve(require('./components/WhereUploade.vue'));
    });
};


const SearchResult = resolve => {
    require.ensure(['./views/SearchResult.vue'], () => {
        resolve(require('./views/SearchResult.vue'));
    });
};
const CreateStoreview = resolve => {
    require.ensure(['./components/forms/StoreviewForm.vue'], () => {
        resolve(require('./components/forms/StoreviewForm.vue'));
    });
};
const UserUpdateForm = resolve => {
    require.ensure(['./components/forms/userUpdateForm/UserUpdateForm.vue'], () => {
        resolve(require('./components/forms/userUpdateForm/UserUpdateForm.vue'));
    });
};
const CreateCategory = resolve => {
    require.ensure(['./components/Categories/Categories.vue'], () => {
        resolve(require('./components/Categories/Categories.vue'));
    });
};
const WhereSelected = resolve => {
    require.ensure(['./components/WhereSelected.vue'], () => {
        resolve(require('./components/WhereSelected.vue'));
    });
};
/* =================================================================
                    Product FORMS
================================================================= */

const productForm = resolve => {
    require.ensure(['./components/forms/ProductForm.vue'], () => {
        resolve(require('./components/forms/ProductForm.vue'));
    });
};
const InventoryForm = resolve => {
    require.ensure(['./components/forms/InventoryForm.vue'], () => {
        resolve(require('./components/forms/InventoryForm.vue'));
    });
};
const ServiceAndBusinessForm = resolve => {
    require.ensure(['./components/forms/ServiceForm.vue'], () => {
        resolve(require('./components/forms/ServiceForm.vue'));
    });
};
const UsedItemForm = resolve => {
    require.ensure(['./components/forms/UsedItemForm.vue'], () => {
        resolve(require('./components/forms/UsedItemForm.vue'));
    });
};
const EducationForm = resolve => {
    require.ensure(['./components/forms/EducationForm.vue'], () => {
        resolve(require('./components/forms/EducationForm.vue'));
    });
};
const PropertyForm = resolve => {
    require.ensure(['./components/forms/PropertyForm.vue'], () => {
        resolve(require('./components/forms/PropertyForm.vue'));
    });
};

/* =================================================================
                    Product FORMS
================================================================= */

const ProductEditForm = resolve => {
    require.ensure(['./components/forms/ProductEditForm.vue'], () => {
        resolve(require('./components/forms/ProductEditForm.vue'));
    });
};

/* ================================================================
                KEYWORDS
================================================================ */
const KeywordComp = resolve => {
    require.ensure(['./components/keywords/Keywords.vue'], () => {
        resolve(require('./components/keywords/Keywords.vue'));
    });
};
/* ================================================================
                DASHBOARD
================================================================ */
const Dashboard = resolve => {
    require.ensure(['./views/Dashboard/Dashboard.vue'], () => {
        resolve(require('./views/Dashboard/Dashboard.vue'));
    });
};
/* ================================================================
                MATERIAL
================================================================ */
const MaterialComp = resolve => {
    require.ensure(['./views/Dashboard/MaterialComp.vue'], () => {
        resolve(require('./views/Dashboard/MaterialComp.vue'));
    });
};
/* ================================================================
                COLOR
================================================================ */
const ColorComp = resolve => {
    require.ensure(['./views/Dashboard/ColorComp.vue'], () => {
        resolve(require('./views/Dashboard/ColorComp.vue'));
    });
};
/* ================================================================
                CATEGORY
================================================================ */
const CategorySearch = resolve => {
    require.ensure(['./views/category/CategorySearch.vue'], () => {
        resolve(require('./views/category/CategorySearch.vue'));
    });
};
const AllCategories = resolve => {
    require.ensure(['./views/category/AllCategory.vue'], () => {
        resolve(require('./views/category/AllCategory.vue'));
    });
};
/* ================================================================
Not FOund
================================================================ */

const NotFound = resolve => {
    require.ensure(['./Error Page/PageNotFound.vue'], () => {
        resolve(require('./Error Page/PageNotFound.vue'));
    });
};

const routes = [
     {
        path: '/',
        name: 'home',
        //redirect: { name: 'path'},
        component: Home,
        props: true,
    },

    /* =====================================================================================
                DASHBOARD
    ===================================================================================== */

    {
        path: '/dashboard',
        component: Dashboard,
        props: true,
        children: [

            {
                path: '',
                name: 'createcategories',
                component: CreateCategory,
                props: true
            },

            {
                path: 'keywordscomp',
                name: 'keywordscomp',
                component: KeywordComp,
                props: true,
            },
            {
                path: 'materials',
                name: 'materialscomp',
                component: MaterialComp,
                props: true,
            },
            {
                path: 'colors',
                name: 'colorscomp',
                component: ColorComp,
                props: true,
            },
        ]
    },

    /* =====================================================================================
                SEARCH ROUTE
    ===================================================================================== */

    {
        path: '/srch/:webholder?',
        //redirect: {name:'path'},
        component: PathRouter,
        props: true,
        children: [

            {
                path: '',
                name: 'path',
                component: Path,
                props: true,

            },
            {
                path: 'searchresult/:qq?',
                name: 'searchresult',
                component: SearchResult,
                props: true
            },
            /* {
                //path: '/view/:id',
                path: 'view/:prd_id',
                name: 'singleproduct',
                component: SingleProduct,
                props: true
            }, */
        ]
    },

    /* =======================================================================
                SINGLE PRODUCT
    ======================================================================= */
    {
        //path: '/view/:id',
        path: '/view/:prd_id/:slug?',
        name: 'singleproduct',
        component: SingleProduct,
        props: true
    },
    /* {
        path: '/createcategories',
        name: 'createcategories',
        component: CreateCategory,
        props: true
    }, */

    {
        path: '/createstoreview',
        name: 'createstoreview',
        component: CreateStoreview,
        props: true,
    },

    /* ======================================================================
                    STOREVIEW
    ====================================================================== */

    {
        path: '/storeview/:u_name-:id',
        //name: 'createstoreview',
        component: StoreViewPath,
        props: true,
        children: [
            {
                path: '',
                name: 'storeview',
                component: StoreView,
                props: true,

            },
            {
                path: 'productslist',
                name: 'productslist',
                component: StoreViewProductsList,
                props: true,

            },
            {
                path: 'producteditform',
                name: 'producteditform',
                component: ProductEditForm,
                props: true,

            },
        ]
    },

    /* ===============================================================================
                PRODUCT UPLOAD
    =============================================================================== */
    {
        path: '/uploadproduct',
        //name: 'uploadproduct',
        component: UploadProductForm,
        props: true,
        children: [
            {
                path: '',
                name: 'whattoupload',
                component: WhatToUpload,
                props: true,

            },
            {
                path: 'whereselected',
                // path: 'choosetouploade',
                //name: 'productupload',
                component: ProductUpload,
                props: true,
                children: [
                    // {
                    //     path: '',
                    //     name: 'choosetouploade',
                    //     component: WhereUploade,
                    //     props: true
                    // },
                    {
                        path: '',
                        name: 'whereselected',
                        component: WhereSelected,
                        props: true
                    },
                    {
                        path: 'inventoryform',
                        name: 'inventoryform',
                        component: InventoryForm,
                        props: true
                    },
                    {
                        path: 'productform',
                        name: 'productform',
                        component: productForm,
                        props: true
                    },
                ]

            },
            {
                path: 'serviceandbusinessform',
                name: 'serviceandbusinessform',
                component: ServiceAndBusinessForm,
                props: true,

            },
            {
                path: 'useditemform',
                name: 'useditemform',
                component: UsedItemForm,
                props: true,

            },
            {
                path: 'educationform',
                name: 'educationform',
                component: EducationForm,
                props: true,

            },
            {
                path: 'propertyform',
                name: 'propertyform',
                component: PropertyForm,
                props: true,

            },
        ]
    },

    /* ========================================================================================
                CATEGORY
    ======================================================================================== */

   {
        path: '/categorysearch',
        name: 'categorysearch',
        component: CategorySearch,
        props: true,
    },
   {
        path: '/allcategories',
        name: 'allcategories',
        component: AllCategories,
        props: true,
    },

   {
        path: '/userupdateform',
        name: 'userupdateform',
        component: UserUpdateForm,
        props: true,
    },
   /* {
        path: '/keywordscomp',
        name: 'keywordscomp',
        component: KeywordComp,
        props: true,
    }, */

    {
        path: '/404',
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    },

];

export default routes;


//--------------------------------------------
