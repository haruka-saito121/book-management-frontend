<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>title</th>
          <th>author</th>
          <th>publisher</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in bookList">
          <td>{{row.title}}</td>
          <td>{{row.author}}</td>
          <td>{{row.publisher}}</td>
          <td><router-link v-bind:to="{ name : 'Detail', params : { id: row.id }}" >詳細</router-link ></td>
          <td><a href="javascript:void(0);" v-on:click="deleteBook(row.id)">削除</a></td>
          <!-- <td><a href="javascript:void(0);" v-on:click="deleteBook()">削除</a></td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      bookList: []
    }
  },

  created(){
    axios.get('http://localhost:8080/book/index', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => {
        this.bookList = response.data
        console.dir(this.bookList)
      })
  },
  methods: {
    deleteBook (id) {
      console.log(this);
      console.log(id);
    　if (window.confirm('削除しますか')){
          axios.delete('http://localhost:8080/book/delete/' + id, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            })
            .then((response) => {
              this.results = response.data
              console.dir(this.results)
              window.alert('削除しました')
              location.reload();
            })
          location.reload();
        }
    }
  }
}
</script>
<style>
table{
  border-collapse:collapse;
  margin:0 auto;
}

th{
  color:#005ab3;
}
td{
  border-bottom:1px dashed #999;
}
th,tr:last-child td{
  border-bottom:2px solid #005ab3;
}
td,th{
  padding:10px;
}
</style>
