<template>
    <div>
<h3>書籍詳細/変更</h3>
 <table>
 <tr><th>title</th><td><input v-model="bookDetail.title"></td></tr>
 <tr><th>author</th><td><input v-model="bookDetail.author"></td></tr>
 <tr><th>publisher</th><td><input v-model="bookDetail.publisher"></td></tr>
 <tr><th>publicationDate</th><td><input v-model="bookDetail.publicationDate"></td></tr>
 <tr><th>language</th><td><input v-model="bookDetail.language"></td></tr>
 <tr><th>isbn10</th><td><input v-model="bookDetail.isbn10"></td></tr>
 <tr><th>isbn13</th><td><input v-model="bookDetail.isbn13"></td></tr>
 <tr><th>page</th><td><input v-model="bookDetail.page"></td></tr>
 <tr><th>url</th><td><input v-model="bookDetail.url"></td></tr>
</table>
<a href="javascript:void(0);" v-on:click="update()">変更</a>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            bookDetail: ''
        }
    },
    created() {
        axios.get('http://localhost:8080/book/edit/'+ this.$route.params.id, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
          .then((response) => {
            this.bookDetail = response.data
            console.dir(this.bookDetail)
          })
    },
    methods: {
        update() {
            axios.put('http://localhost:8080/book/update/'+ this.$route.params.id,  this.bookDetail, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            })
              .then((response) => {
                this.bookDetail = response.data
                console.dir(this.bookDetail)
                window.alert('変更しました')
                this.$router.push('/')
              })
        },

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
