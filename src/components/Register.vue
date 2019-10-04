<template>
<div>
  <h3>書籍登録</h3>
  <table>
  <tr><th>title</th><td><input v-model="registData.title" value="Java"></td></tr>
  <tr><th>author</th><td><input v-model="registData.author"></td></tr>
  <tr><th>publisher</th><td><input v-model="registData.publisher"></td></tr>
  <tr><th>publicationDate</th><td><input v-model="registData.publicationDate"></td></tr>
  <tr><th>language</th><td><input v-model="registData.language"></td></tr>
  <tr><th>isbn10</th><td><input v-model="registData.isbn10"></td></tr>
  <tr><th>isbn13</th><td><input v-model="registData.isbn13"></td></tr>
  <tr><th>page</th><td><input v-model="registData.page"></td></tr>
  <tr><th>url</th><td><input v-model="registData.url"></td></tr>
</table>
  <a href="javascript:void(0);" @click="register()">登録</a>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      results: [],
      registData: {
        title: '',
        author: '',
        publisher: '',
        publicationDate: '',
        language: '',
        isbn10: '',
        isbn13: '',
        page: '',
        url: ''
      }
    }
  },
  methods: {
    register () {
      axios.post('http://localhost:8080/book', this.registData, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then((response) => {
          this.results = response.data
          console.dir(this.results)
          window.alert('登録しました')
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
div {
    text-align: center;
}
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
a {
  text-decoration: none;
  color: #ffffff;
  margin: 0 10px;
  padding: 3px 10px;
  background: #005ab3;
}
</style>
