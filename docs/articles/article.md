<script setup>
import data from '../../data.json'

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const article = data.find((item) => item.id == id);

</script>

---
Penulis: {{ article.Author }}
Diperbarui: {{ article.Updated }}

# {{ article.title }}

> {{article.content}}

<!-- lebih lanjut -->
##  {{ article.isi }}
{{ article.excerpt }}
