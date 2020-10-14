import CosImage from './src/CosImage.vue'

export {
    CosImage,
}

export default {
    install(Vue) {
        Vue.component('cos-image', CosImage)
    }
}