<template>
<table>
    <tr>
        <th>Studio</th>
        <th>Hero</th>
        <th>Image</th>
        <th>Price</th>
    </tr>
    <tr v-for="item in comics" :key="item">
        <td>{{item.studio}}</td>
        <td>{{item.product}}</td>
        <td><img :src="item.image" style="height: 300px;" ></td>
        <td>R{{item.price}}</td>
    </tr>
</table>

</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'ProDucts',
    computed: {
        ...mapGetters(["comics"]),
    },
    methods: {
        ...mapActions(["fetchAllComics"])
        
    },
    created() {
        this.fetchAllComics();
    }

    
}
</script>
<style>
    table {
        width: 100%;
    }
</style>