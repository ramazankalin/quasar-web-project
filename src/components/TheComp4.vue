<template>
  <div
    style="
      width: auto;
      height: 360px;
      background-color: rgba(229, 228, 228, 0.934);
      display: flex;
      margin-top: 100px;
    "
  >
    <div class="sepet-class">
      <div
        style="
          height: 121px;
          border: solid 1px;
          margin-top: 50px;
          width: 800px;
          margin-left: 10px;
          display: flex;
          position: relative;
        "
      >
        <img
          style="width: 70px; height: 90px; margin-left: 50px; margin-top: 10px"
          src="https://static.ticimax.cloud/2571/Uploads/UrunResimleri/thumb/artukbey-turk-kahvesi-100gr-b82f-7.jpg"
        />
        <span style="margin-top: 25px; margin-left: 20px">
          Marka: <strong>ARTUKBEY</strong> <br />
          Stok Kodu: <strong>ART00105010001</strong><br />
          <router-link class="link-stil" to="/comp4">
            {{ currentProduct.name }}
          </router-link>
        </span>
        <input
          v-model.number="model"
          type="number"
          filled
          style="
            max-width: 60px;
            max-height: 30px;
            background-color: white;
            margin-left: 80px;
            margin-top: 25px;
          "
        />
        <span
          @click="guncelle"
          style="
            margin-left: -60px;
            margin-top: 60px;
            cursor: pointer;
            color: rgba(150, 146, 146, 0.811);
          "
        >
          Güncelle
        </span>
        <p
          style="
            color: #cbab60;
            margin-top: 50px;
            margin-left: 100px;
            font-size: large;
          "
        >
          ₺35,00
        </p>
        <p
          style="
            color: #cbab60;
            margin-top: 50px;
            margin-left: 100px;
            font-size: large;
          "
        >
          ₺{{ toplamFiyatHesapla }}
        </p>
      </div>
      <div
        style="height: 51px; border: solid 1px; width: 800px; margin-left: 10px"
      >
        <p style="margin-left: 20px; margin-top: 10px">
          Ücretsiz kargo hakkı kazanmanıza ₺465,00 kaldı!
        </p>
      </div>
      <div style="margin-top: 15px">
        <q-link
          style="
            color: #b9b9b9;
            cursor: pointer;
            text-decoration: underline;
            margin-left: 700px;
          "
          >Sepeti Temizle</q-link
        >
      </div>
    </div>

    <div>
      <q-btn class="sepet-class-2">SİPARİŞİ TAMAMLA </q-btn>
      <div
        style="
          height: 60px;
          width: 330px;
          margin-top: 15px;
          background-color: white;
          margin-left: 30px;
        "
      >
        <span>Sipariş Tutarı</span>
        <p style="text-align: end; font-size: 12px; margin-top: -20px">
          ₺{{ toplamFiyatHesapla }}
        </p>
        <span style="font-weight: bold">Sepet Toplamı</span>
        <p
          style="
            text-align: end;
            color: #cbab60;
            font-size: 14px;
            margin-top: -20px;
          "
        >
          ₺{{ toplamFiyatHesapla }}
        </p>
      </div>
      <div
        style="
          height: 80px;
          width: 330px;
          margin-top: 15px;
          background-color: rgba(216, 214, 214, 0.934);

          margin-left: 30px;
        "
      >
        <p style="font-weight: bold; margin-left: 10px; margin-top: 5px">
          Hediye Çekleri
        </p>
        <input outlined v-model="text" class="custom-input" />
        <q-btn class="btn-class">Ekle</q-btn>
        <q-btn class="sepet-class-3">SİPARİŞİ TAMAMLA </q-btn>
      </div>
    </div>
  </div>
</template>

<style>
.link-stil {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.sepet-class {
  width: 820px;
  height: 280px;
  background-color: white;
  margin-top: 50px;
  margin-left: 100px;
}
.sepet-class-2:hover {
  background-color: black;
}
.sepet-class-3:hover {
  background-color: black;
}
.sepet-class-3 {
  width: 330px;
  height: 40px;
  background-color: #cbab60;
  color: white;
  text-transform: capitalize;
  border: solid 1px;
  margin-top: 20px;
  font-family: 'Verona-Regular', sans-serif;
}
.sepet-class-2 {
  width: 330px;
  height: 40px;
  background-color: #cbab60;
  color: white;
  text-transform: capitalize;
  border: solid 1px;
  margin-top: 50px;
  margin-left: 30px;
  font-family: 'Verona-Regular', sans-serif;
}
.custom-input {
  width: 200px;
  height: 30px;
  margin-left: 10px;
  background-color: white;
}
.btn-class:hover {
  background-color: #cbab60;
}
.btn-class {
  margin-left: 20px;
  width: 80px;
  height: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.744);
  text-transform: capitalize;
  border: solid 1px;
  font-family: 'Verona-Regular', sans-serif;
}
</style>
<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
const text = ref<string>('');

const products = [
  {
    name: 'Artukbey Türk Kahvesi 100gr',
    price: 35.0,
    image:
      'https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/artukbey-turk-kahvesi-100gr-b82f-7.jpg',
  },
];

const currentProduct = products[0];

const toplamFiyatHesapla = computed(() => {
  return (currentProduct.price * model.value).toFixed(2);
});

const props = defineProps(['initialValue']);

const model = ref<number>(props.initialValue || 1);

const guncelle = () => {
  console.log('Sipariş güncellendi:', model.value);
};
</script>
