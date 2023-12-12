<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Verona-Regular', sans-serif;
    "
  >
    <q-img
      style="max-width: 430px; max-height: 570px; margin-top: 100px"
      src="https://static.ticimax.cloud/cdn-cgi/image/width=570,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/artukbey-turk-kahvesi-100gr-b82f-7.jpg"
    ></q-img>
    <div
      style="
        width: 560px;
        height: 240px;
        margin-left: 100px;
        margin-top: -200px;
        font-weight: bold;
        font-size: medium;
      "
    >
      <span
        >Artukbey Türk Kahvesi 100gr<br />
        Stok Kodu:(ART00105010001)<br />
        <q-link class="link-stil-2">Marka : ARTUKBEY</q-link>
        <br />
        <p style="color: #cbab60; font-size: x-large">₺35,00</p>

        <p style="font-size: small">
          Bu ürünün yanında bunları da tavsiye ediyoruz.
        </p></span
      >
      <div>
        <router-link to="/comp2"
          ><q-img
            src="https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/artukbey-damla-sakizli-turk-kahvesi-10-15a-48.jpg"
            style="width: 80px; height: 105px"
          >
          </q-img
          ><q-img
            style="width: 80px; height: 105px"
            src="https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/special-menengic-dibek-kahvesi-250gr-5c-8b6.jpg"
          ></q-img>
        </router-link>
      </div>
      <div style="display: flex">
        <div style="border: solid 1px #cbab60; display: flex">
          <q-btn @click="updateModel(false)" label="-" flat />
          <q-input
            v-model.number="model"
            type="number"
            filled
            style="text-align: center; margin-top: 5px"
          />
          <q-btn @click="updateModel(true)" label="+" flat />
        </div>
        <div>
          <q-btn
            style="
              width: 350px;
              height: 70px;
              background-color: #cbab60;
              color: white;
              margin-left: 50px;
            "
            ><p style="text-align: center">Sepete Ekle</p></q-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.link-stil-2 {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>
<script setup lang="ts">
import { ref } from 'vue';

const model = ref(1);

const updateModel = (isIncrement: boolean) => {
  model.value = isIncrement ? model.value + 1 : model.value - 1;
};
</script>
