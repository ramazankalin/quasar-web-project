<template>
  <div class="divclass">
    <q-btn-dropdown
      flat
      outline
      label="Filtreleri Göster"
      class="btn-dropdown"
      style="text-transform: capitalize"
      ><div class="divclass-2">
        <div class="col" style="margin-left: 20px">
          <q-link class="q-link-2">Filtreler</q-link><br />
          <q-checkbox
            color="black"
            v-model="right"
            checked-icon="square"
          /><q-link class="q-link">İndirimli Ürünler</q-link><br />
          <q-checkbox
            color="black"
            v-model="left"
            checked-icon="square"
          /><q-link class="q-link">Fırsat Ürünleri</q-link>
        </div>
        <div class="col">
          <q-link class="q-link-2">Kategoriler</q-link><br />
          <q-scroll-area style="height: 260px">
            <q-link
              v-for="category in categories"
              :key="category.id"
              class="q-link"
            >
              {{ category.name }} <br
            /></q-link>
          </q-scroll-area>
        </div>

        <div class="col">
          <q-link class="q-link-2">Marka</q-link><br />
          <q-checkbox color="black" v-model="up" checked-icon="square" /><q-link
            class="q-link"
            >Artuk Bey</q-link
          ><br />
          <q-checkbox
            color="black"
            v-model="down"
            checked-icon="square"
          /><q-link class="q-link">ARTUKBEY</q-link>
        </div>
      </div></q-btn-dropdown
    >

    <q-select filled v-model="model" :options="options" />
  </div>

  <div class="cards-container">
    <q-btn-group flat>
      <q-link
        v-for="(product, index) in products"
        :key="index"
        style="width: 280px; height: 350px"
        class="my-card"
        @mouseover="showAddToCart(index)"
        @mouseleave="() => hideAddToCart()"
        @click="addToCart(index)"
      >
        <img :src="product.image" />

        <q-card-section>
          <div>
            <p>{{ product.name }}</p>
            <span style="color: #cbab60">{{ product.price }}</span>
          </div>
          <q-btn
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-2"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
        </q-card-section>
      </q-link>
    </q-btn-group>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Ref } from 'vue';
const right = ref(false);
const left = ref(false);
const up = ref(false);
const down = ref(false);
const options: string[] = [
  'Sıralama Seçiniz',
  'Fiyata Göre (Artan)',
  'Fiyata Göre (Azalan)',
  'Ürün Adına Göre (Artan)',
  'Ürün Adına Göre (Azalan)',
];
const model: Ref<string | null> = ref(options[0]);
const categories = [
  { id: 1, name: 'Kahve' },
  { id: 2, name: 'TÜRK KAHVESİ' },
  { id: 3, name: 'KAHVE' },
  { id: 4, name: 'HAZIRSET KAHVE' },
  { id: 5, name: 'DİBEK KAHVESİ' },
  { id: 6, name: 'Çikolata Çeşitleri' },
  { id: 7, name: 'Dünya Kahveleri' },
  { id: 8, name: 'Kahve Çeşitleri' },
  { id: 9, name: 'Diğer' },
  { id: 10, name: 'Aksesuar Çeşitleri' },
  { id: 11, name: 'TEMİZLİK & HİJYEN' },
  { id: 12, name: 'TOZ İÇECEK' },
  { id: 13, name: 'KURU MEYVE' },
  { id: 14, name: 'Yılbaşı Sepetleri' },
  { id: 15, name: 'En Çok Satanlar' },
  { id: 16, name: 'Türk Kahvesi' },
  { id: 17, name: 'Menengiç Kahvesi' },
  { id: 18, name: 'Çekirdek Kahve' },
  { id: 19, name: 'Filtre Kahve' },
  { id: 20, name: 'Hazır Kahve & Setler' },
  { id: 21, name: 'Çay' },
  { id: 22, name: 'Kuruyemiş' },
  { id: 23, name: 'Badem Şekeri' },
  { id: 24, name: 'Kuru Meyveler' },
  { id: 25, name: 'Lokum' },
  { id: 26, name: 'Şekerleme' },
  { id: 27, name: 'Çikolata' },
  { id: 28, name: 'Yöresel' },
  { id: 29, name: 'Sabun' },
  { id: 30, name: 'Kolonya' },
  { id: 31, name: 'Draje Çeşitleri' },
  { id: 32, name: 'Sosla ve Şuruplar' },
  { id: 33, name: 'Çekirdek' },
  { id: 34, name: 'Leblebi' },
  { id: 35, name: 'Ceviz' },
  { id: 36, name: 'Fındık' },
  { id: 37, name: 'Badem' },
  { id: 38, name: 'Drajeler' },
  { id: 39, name: 'Diğer' },
];
let buttonHover = ref(false);
let showAddToCartButton = ref(-1);

const showAddToCart = (index: number): void => {
  showAddToCartButton.value = index;
};

const hideAddToCart = (): void => {
  showAddToCartButton.value = -1;
};

const addToCart = (index: number): void => {
  console.log('Added to cart:', products[index].name);
};

const products = reactive([
  {
    name: 'Artukbey Türk Kahvesi 100gr',
    price: '₺35,00',
    image:
      'https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/artukbey-turk-kahvesi-100gr-b82f-7.jpg',
  },
  {
    name: 'Artukbey Damla Sakızlı Türk Kahvesi 100gr',
    price: '₺40,00',
    image:
      'https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/artukbey-damla-sakizli-turk-kahvesi-10-15a-48.jpg',
  },
  {
    name: 'Special Menengiç Dibek Kahvesi 250 gr',
    price: '₺105,00',
    image:
      'https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/special-menengic-dibek-kahvesi-250gr-5c-8b6.jpg',
  },
  {
    name: 'Artukbey Special Damla Sakızlı Dibek Kahvesi 250gr',
    price: '₺105,00',
    image:
      'https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/artukbey-special-damla-sakizli-dibek-k-73-972.jpg',
  },
]);
</script>
<style>
.btn-dropdown:hover {
  color: #cbab60;
}
.q-link-2 {
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}
.q-link {
  cursor: pointer;
  text-decoration: none;
  font-size: smaller;
}
.cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.my-card {
  text-transform: capitalize;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  font-family: 'Verona-Regular', sans-serif;
  font-weight: bold;
  cursor: pointer;
}
.divclass-2 {
  width: 1170px;
  height: 315px;
  padding-top: 30px;
  padding-right: 600px;
  background-color: #fbf5ef;
  display: flex;
  font-family: 'Verona-Regular', sans-serif;
  justify-content: space-between;
}
.divclass {
  width: 1170px;
  height: 80px;
  background-color: #fbf5ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Verona-Regular', sans-serif;
  font-weight: bold;
}
.custom-button-2 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;
}

.button-text {
  margin-top: 8px;
  color: #cbab60;
}

.custom-button-2:hover {
  background-color: #cbab60;
}

.custom-button-2:hover .button-text {
  color: white;
}
</style>
