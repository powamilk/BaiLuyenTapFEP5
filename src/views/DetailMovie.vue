<template>
    <div>
        <h1>CHi Tiet Phim</h1>
        <div>
            <p><strong>Id: </strong>{{ movieItem.id }}</p>
            <p><strong>title:</strong>{{ movieItem.title }}</p>
            <p><strong>genre: </strong>{{ movieItem.genre }}</p>
            <p><strong>duration:</strong>{{ movieItem.duration }}</p>
            <p><strong>releaseDate:</strong>{{ movieItem.releaseDate }}</p>
            <p><strong>description:</strong>{{ movieItem.description }}</p>
        </div>
        <router-link to="/" class="btn btn-primary mt3">back</router-link>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                movieItem: null
            };
        },

        mounted: {
            fetchMovieItem() {
                const id = this.$route.params.id;
                axios.get(`http://localhost:3000/movie/${id}`)
                .then(response => {
                    this.movieItem = response.data;
                }).catch(error => {
                    console.error('Loi', error);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>