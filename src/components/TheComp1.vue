<template>
  <q-toolbar class="q-pa-md" style="background-color: white">
    <q-link style="cursor: pointer">
      <q-avatar style="width: 130px; height: 106px">
        <img
          src="https://static.ticimax.cloud/2571/uploads/editoruploads/resimlerim/100x100.jpg"
        />
      </q-avatar>
    </q-link>
    <q-link class="custom-button"
      >Kahve
      <q-menu>
        <q-list style="background-color: #cbab60; color: white">
          <q-item
            v-for="item in kahveItems"
            :key="item"
            clickable
            v-close-popup
            >{{ item }}</q-item
          >
        </q-list>
      </q-menu>
    </q-link>

    <q-link class="custom-button">Lokum Çeşitleri</q-link>

    <q-link class="custom-button">Organik Ürünler</q-link>

    <q-link class="custom-button">Çay</q-link>

    <q-link class="custom-button">Blog</q-link>

    <q-link class="custom-button">Franchise Başvuru</q-link>

    <q-link class="custom-button">KVKK</q-link>

    <q-link class="custom-button">Sipariş Takip</q-link>

    <q-input v-model="ph" placeholder="Arama" :dense="dense" />

    <q-link class="custom-button">ÜYE GİRİŞİ</q-link>

    <q-link class="custom-button">ÜYE OL</q-link>

    <q-link class="custom-button"
      >SEPETİM
      <q-menu class="sepetMenu">
        <p style="color: black; font-family: 'Verona-Regular', sans-serif">
          Sepetinizde ürün bulunmamaktadır.
        </p>
      </q-menu>
    </q-link>
  </q-toolbar>
</template>

<style>
.custom-button {
  transition: color 0.3s;
  text-transform: capitalize;
  font: 13px;
  font-weight: bolder;
  cursor: pointer;
  padding: 15px;
  font-family: 'Verona-Regular', sans-serif;
}
.custom-button:hover {
  color: #cbab60;
}
.q-item {
  font-family: 'Verona-Regular', sans-serif;
}
.q-item:hover {
  text-decoration: underline;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
const ph = ref('');
const dense = ref(false);
const kahveItems = ref([
  'Kahve Çeşitleri',
  'Dibek Kahveleri',
  'Yöresel Filtre Kahve',
  'Hazır Kahve & Setler',
]);
</script>
