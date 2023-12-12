<template>
  <footer style="margin-top: 220px">
    <div class="footer-container">
      <div
        style="
          width: 1300px;
          display: flex;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <div class="col-4">
          <h6>Kurumsal</h6>
          <q-link class="q-link-3">Anasayfa</q-link><br />
          <q-link class="q-link-3">Hakkımızda</q-link><br />
          <q-link class="q-link-3">Bize Ulaşın / İletişim</q-link><br />
          <q-link class="q-link-3">Mağazalarımız</q-link><br />
        </div>
        <div class="col-4">
          <h6>Müşteri İlişkileri</h6>
          <q-link class="q-link-3">Üyelik</q-link><br />
          <q-link class="q-link-3">İptal ve İade Kargoları</q-link><br />
          <q-link class="q-link-3">Gizlilik Sözleşmesi</q-link><br />
          <q-link class="q-link-3">Uzak Mesafe Satış Sözleşmesi</q-link><br />
          <q-link class="q-link-3">KVKK</q-link><br />
        </div>
        <div class="col-4">
          <h6>Yardım</h6>
          <q-link class="q-link-3">Müşteri Hizmetleri</q-link><br />
          <q-link class="q-link-3">Sıkça Sorulan Sorular</q-link><br />
          <q-link class="q-link-3">Kargo Takibi</q-link><br />
        </div>
        <div class="col-4">
          <h6>BİZDEN HABERLER</h6>
          <p>
            Bültenimize Üye Olun ! Tüm İndirim ve<br />
            Fırsatlardan İlk Sizin Haberiniz Olsun !
          </p>
          <div style="display: flex; background-color: white">
            <q-input
              v-model="ph"
              placeholder="E-posta adresinizi yazın"
              :dense="dense"
            />
            <q-btn class="gönder">Gönder</q-btn>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        display: flex;
        background-color: black;
        border: solid 1px;
        align-items: center;
      "
    >
      <div style="margin-left: 180px">
        <q-img
          style="width: 650px"
          src="https://cdn.ticimax.com/Uploads/hazirSablonResimleri/footerImg/bankimg-2.png"
        />
      </div>
      <div style="margin-left: 120px">
        <p style="color: white; font-family: 'Verona-Regular', sans-serif">
          © 2020 <strong>artukbey.com</strong> - Tüm Hakları Saklıdır. - SEO
          hizmeti
          <q-link style="cursor: pointer; text-decoration: none; color: gray"
            >Magma<br />
            Medya</q-link
          >
          tarafından sağlanmaktadır
        </p>
      </div>
    </div>
    <q-img
      style="
        width: 70px;
        height: 25px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      "
      src="https://www.artukbey.com/Scripts/images/logo-60x20px.svg"
    />
  </footer>
</template>
<style>
.gönder {
  background-color: white;
  color: black;
}
.gönder:hover {
  background-color: black;
  color: white;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 350px;
  font-family: 'Verona-Regular', sans-serif;
}
.col-4 {
  color: white;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.q-link-3 {
  text-decoration: none;
  cursor: pointer;
  font-family: 'Verona-Regular', sans-serif;
}
.q-link-3:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
const ph = ref('');
const dense = ref(false);
</script>
