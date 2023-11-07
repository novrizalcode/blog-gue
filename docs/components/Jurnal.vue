<template>
    <div>
      <h1>{{ judul }}</h1>
      
      <div class="entry">
        <h2>{{ pengantar.judul }}</h2>
        <p>{{ pengantar.isi }}</p>
      </div>
  
      <div class="entry" v-for="bagian in bagianJurnal">
        <h2>{{ bagian.judul }}</h2>
        <p>{{ bagian.isi }}</p>
      </div>
  
      <div class="penutup">
        <p>{{ penutup }}</p>
        <p>{{ terimaKasih }}</p>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        judul: "Memecahkan Tantangan dan Mengasah Keterampilan dalam Dunia Pemrograman",
        pengantar: {
          judul: "Pengantar",
          isi: "Selamat datang kembali di blog pemrograman ini! Dalam jurnal kali ini, saya akan berbagi pengalaman, pemikiran, dan pencapaian terbaru dalam dunia pemrograman. Ini adalah catatan perjalanan pribadi saya, di mana saya berusaha memecahkan berbagai tantangan dan mengasah keterampilan saya dalam pengembangan perangkat lunak."
        },
        bagianJurnal: [
          {
            judul: "Eksplorasi Bahasa Pemrograman",
            isi: "Pada bagian pertama jurnal ini, saya akan menguraikan pengalaman saya dalam eksplorasi berbagai bahasa pemrograman. Saya akan membagikan bagaimana saya memilih bahasa pemrograman tertentu dan apa yang membuatnya menarik."
          },
          {
            judul: "Proyek-Proyek Kreatif",
            isi: "Dalam bagian kedua, saya akan membahas beberapa proyek pemrograman kreatif yang saya kerjakan. Saya akan menjelaskan proyek-proyek tersebut, termasuk ide-ide di baliknya, tantangan yang saya hadapi, dan bagaimana proyek tersebut telah meningkatkan keterampilan pemrograman saya."
          },
          {
            judul: "Belajar dari Kesalahan",
            isi: "Tantangan adalah bagian tak terpisahkan dari perjalanan pemrograman. Saya akan berbicara tentang beberapa kesalahan dan hambatan yang saya alami dalam proses belajar, dan bagaimana saya belajar dari mereka."
          },
          {
            judul: "Pencapaian Terbaru",
            isi: "Di bagian ini, saya akan berbagi beberapa pencapaian terbaru dalam pemrograman, seperti kontribusi terhadap proyek open source, pengembangan aplikasi berbasis web, atau pengalaman kerja dalam industri teknologi."
          },
          {
            judul: "Masa Depan dan Tantangan yang Akan Datang",
            isi: "Terakhir, saya akan membahas rencana masa depan dalam pemrograman dan tantangan yang akan saya hadapi. Saya akan merinci langkah-langkah yang akan saya ambil untuk terus mengembangkan keterampilan saya."
          }
        ],
        penutup: "Terima kasih telah mengikuti perjalanan pemrograman saya melalui jurnal ini. Saya berharap cerita ini memberikan wawasan dan inspirasi kepada pembaca yang tertarik dengan dunia pemrograman. Teruslah mengikuti blog ini untuk artikel dan cerita terbaru dalam dunia teknologi dan pemrograman!"
      }
    }
  }
  </script>
  