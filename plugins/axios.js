export default function({$axios, store}){
    $axios.onError(error => {
        if(error.response.status === 4222){
            store.dispatch('validation/setErrors', error.response.data.errors);
        }

        return Promise.reject(error);
    });

    $axios.onRequest(() => {
        store.dispatch('validation/clearErrors');
    });
}