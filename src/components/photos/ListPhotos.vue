<template>
    <div>
        <table id="customers">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Thumbnail</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="photo in data.items" :key="photo.id">
                    <td>{{  photo.id}}</td>
                    <td>{{ photo.title }}</td>
                    <td><a-image :width="200"
                        :src="photo.thumbnailUrl"
                      /></td>
                </tr>               
            </tbody>
        </table>
        <!-- <div>{{ data}}</div> -->
    </div>
</template>

<script>
import { Image } from 'ant-design-vue'
import { ref } from 'vue';
export default {    
    name: 'ListPhotos',
    components: {
        Image
    },
    props: {
        data: ref([]),
        apiUrl: String
    }
}
</script>

<style lang="scss">
    
    #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        td,
        th {
            border: 1px solid #ddd;
            padding: 8px;
        }
        th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #1677ff;
            color: white;
            text-align: center;
        }
        tr:nth-child(even){background-color: #f2f2f2;}
        tr:hover {background-color: #ddd;}
      }
</style>