import apiClient from "@/services/api";
import {reactive, onMounted, computed, ref, watch, provide, inject, InjectionKey, watchEffect} from 'vue';

const keyContext = Symbol() as InjectionKey<UseGetDat>

export function provideUseGetData (useGetData) {
    provide(keyContext , useGetData)
}

export function useGetDataContext () {
    return inject(keyContext)
}

type UseGetDat = ReturnType<typeof useGetData>

const data = reactive({
    photos: [],
    loading: true,
    error: null,
  });
// const dataRef = ref([]);

const fetchData = async () => {
    try {         
        // const response = await apiClient.get(apiURL);
        const response = await apiClient.get('https://jsonplaceholder.typicode.com/photos?_limit=50');

        if (!response.statusText) {
            throw new Error('Network response was not ok');
        }          
        
        return data.photos = response.data;
        // return dataRef.value = response.data
        
    } catch (error) {
        data.error = error.message;
        console.error('Error fetching data:', error);
    } finally {
        data.loading = false;
    }
};
onMounted(() => {
    fetchData()
}),

watchEffect(fetchData);

function useGetData(apiURL: string) {
    
    return {
        data,
        fetchData,
    }
};

export default useGetData;
