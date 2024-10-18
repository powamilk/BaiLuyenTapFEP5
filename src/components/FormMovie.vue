<template>
        <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="title" class="form-label"><Title></Title></label>
            <input type="text" class="form-control" id="title" aria-describedby="title">
        </div>
        <div class="mb-3">
            <label for="genre" class="form-label">genre</label>
            <input type="text" class="form-control" id="genre">
        </div>
        <div class="mb-3 form-check">
            <input type="duration" class="form-label" id="duration">
            <label class="DateTime" for="duration">Check me out</label>
        </div>
        <div class="mb-3">
            <label for="releaseDate" class="form-label">releaseDate"</label>
            <input type="Date" class="form-control" id="releaseDate">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">description</label>
            <input type="text" class="form-control" id="description">
        </div>
        <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Add' }} Phim </button>
        </form>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['id'],
        data() {
            return{
                form: {
                    title: '',
                    genre: '',
                    duration: '',
                    releaseDate: '',
                    description:''
                },
                isEdit: false
            };
        },
        mounted(){
            if (this.id) {
                this.isEdit = true;
                this.fetchMovieItem();
            }
        },
        methods: {
            fetchMovieItem(){
                axios.get('http://localhost:3000/movie/${this.id}')
                .then(response => {
                    this.form = response.data;
                }) 
                .catch(error => {
                    console.error('Loi', error);
                });
            }
        },
        submitForm(){
            const method = this.isEdit ? 'PUT' :'POST';
            const url = this.isEdit
                ? 'http://localhost:3000/movie/${this.id}'
                : 'http://localhost:3000/movie';

                axios({
                    method: method,
                    url: url,
                    data: this.form
                })
                .then(() => {
                    this.$router.push('/');
                })
                .catch(error => {
                    console.error('Loi', error);
                })
        }

        
    }
</script>

<style lang="scss" scoped>

</style>