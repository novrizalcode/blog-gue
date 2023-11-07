<script setup>
  import Home from './components/Home.vue'
  import ArticleCard from './components/ArticleCard.vue'

  import data from '../data.json'
</script>

<Home name="Novrizal" subtitle="Selamat datang di blog saya. Blog ini dibangun dengan Vitepress dan Vue.js. Vitepress sangat keren. Saya adalah seorang programmer dengan minat yang mendalam dalam pengembangan perangkat lunak. Saya telah bekerja dalam berbagai proyek perangkat lunak dan mengejar pengetahuan teknis untuk terus memperbaiki keterampilan saya dalam pemrograman. "/>

<div v-for="(article, index) in data" :key="index">
<ArticleCard :title="article.title"
:excerpt="article.excerpt" :image="article.
image" :author="article.Author" :href="article.
path" :date="article.Updated" :content="article?.content" />
</div>