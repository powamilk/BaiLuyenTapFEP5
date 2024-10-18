<template>
    <div>
        <h2>Danh sach Phim</h2>
        <router-link to="/add" class="btn btn-primary mb-3">Them Phim</router-link>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Ten Phim</th>
                    <th>The Loai</th>
                    <th>Thoi GIan</th>
                    <th>Ngay Phat Hanh</th>
                    <th>Mo ta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movieItem in movieItems" :key="movieItem.id">
                    <td>{{ movieItem.id }}</td>
                    <td>{{ movieItem.title }}</td>
                    <td>{{ movieItem.genre }}</td>
                    <td>{{ movieItem.duration }}</td>
                    <td>{{ movieItem.releaseDate }}</td>
                    <td>{{ movieItem.description }}</td>
                    <td>
                    <router-link :to="`/edit/${movieItem.id}`" class="btn btn-warning btn-sm">Sua</router-link>
                    <router-link :to="`/detail/${movieItem.id}`" class="btn btn-warning btn-sm">Xem</router-link>
                    <button @click="deleteMovieItem(movieItem.id)" class="btn btn-danger btn-sm">Xoa</button>
                </td> 
                </tr>   
            </tbody>
        </table>
    </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        movieItems: []
      };
    },
    mounted: {
        fetchMovieItems() {
        axios.get('http://localhost:3000/movie')
          .then(response => {
            this.movieItems = response.data;
          })
          .catch(error => {
            console.error('Failed to fetch menu items', error);
          });
      }
    },
    methods: {
      deleteMovieItem(id) {
        if (confirm('Bạn có chắc muốn xóa món ăn này không?')) {
          axios.delete(`http://localhost:3000/movie/${id}`)
            .then(() => {
              this.fetchMovieItems();
            })
            .catch(error => {
              console.error('Failed to delete menu item', error);
            });
        }
      }
    }
  };
  </script>

<style lang="scss" scoped>

</style>