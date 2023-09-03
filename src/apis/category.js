import api from '@/axios.js'

export default {
    fetchCategoryList() {
        return api.get('/category/')
    },
    createCategory(payload) {
        return api.post('/category/create', payload)
    }
}