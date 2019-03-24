import { store } from '../js/store'

export default (to, from, next) => {

    if (store.getters.getUserInfo != null)  {

        next()

    } else {

        next('/');
    }
}
