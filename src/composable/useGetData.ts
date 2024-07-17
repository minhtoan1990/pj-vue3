import apiClient from "@/services/api";
import { reactive, onMounted, computed, ref, watch, watchEffect } from 'vue';

function useGetData(apiURL: string) {
    const data = reactive({
        items: [],
        loading: true,
        error: null,
    });
    // const dataRef = ref([]);

    const fetchData = async () => {
        try {
            const response = await apiClient.get(apiClient.defaults.baseURL + apiURL);

            if (!response.statusText) {
                throw new Error('Network response was not ok');
            }

            return data.items = response.data;

        } catch (error) {
            data.error = error.message;
        } finally {
            data.loading = false;
        }
    };

    onMounted(() => {
        fetchData()
    });

    // watchEffect(fetchData);

    return {
        data,
        fetchData
    }
};

export default useGetData;
