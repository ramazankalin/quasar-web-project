<template>
  <div class="q-pa-md" style="text-align: center;margin-top: 30px;font-family: 'Verona-Regular',sans-serif;">
    <h style="font-size: 25px;text-decoration-line: underline;font-family: 'Times New Roman', Times, serif"  >Dünya Kahveleri</h>
    <q-carousel
      v-model="slide"

      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="none"
      padding
      arrows
      height="600px"
      width="200px"
      class="bg-white-9"
      autoplay
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap " style="margin-left: 200px;">
          <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/costa-rica-filtre-kahve-250-gr-478-67.jpg" />
          <p>Costa Rica(Filtre Kahve)<br>250 Gr <br>₺205,00</p>
        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders  col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/ethiopia-filtre-kahve-cekirdegi-250-gr-4549-b.jpg" />
          <p>Ethiopia(Filtre Kahve Çekirdeği)<br>250 Gr <br>₺205,00</p>
        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g-d6-a34.jpg" />
          <p>Guatemala(Filtre Kahve Çekirdeği)<br>250 Gr <br>₺205,00</p>
        </q-card >
          <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg" />
          <p>Blend(Filtre Kahve )<br>250 Gr <br>₺205,00</p>
        </q-card>
        </div>
        <ul>
       <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-2"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-2"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-2"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color: #cbab60;; width: 150px; margin-right: 20px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-2"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>

        </ul>

      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap" >
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap " style="margin-left: 200px">
          <q-card class="card-no-border">
          <q-img style="width: 200px;" class=" col-3" src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/ethiopia-filtre-kahve-cekirdegi-250-gr-4549-b.jpg" />
          <p>Ethiopia(Filtre Kahve Çekirdeği)<br>250 Gr <br>₺205,00</p>
        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px;" class=" col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g-d6-a34.jpg" />
          <p>Guatemala(Filtre Kahve Çekirdeği)<br>250 Gr <br>₺205,00</p>

        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px;" class="col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg" />
          <p>Blend(Filtre Kahve )<br>250 Gr <br>₺205,00</p>
           </q-card>
          <q-card class="card-no-border">
          <q-img style="width: 200px;" class="col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/costa-rica-filtre-kahve-250-gr-478-67.jpg" />
          <p>Costa Rica(Filtre Kahve)<br>250 Gr <br>₺205,00</p>
        </q-card>
        </div>
        <ul>
       <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-3"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-3"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-3"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color: #cbab60;; width: 150px; margin-right: 20px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-3"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>

        </ul>
      </q-carousel-slide>


      <q-carousel-slide :name="3" class="column no-wrap" >
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap" style="margin-left: 200px;">
          <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g-d6-a34.jpg" />
          <p>Guatemala(Filtre Kahve Çekirdeği)<br>250 Gr <br>₺205,00</p>

        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg" />
          <p>Blend(Filtre Kahve )<br>250 Gr <br>₺205,00</p>
        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/costa-rica-filtre-kahve-250-gr-478-67.jpg" />
          <p>Costa Rica(Filtre Kahve)<br>250 Gr <br>₺205,00</p>
        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/ethiopia-filtre-kahve-cekirdegi-250-gr-4549-b.jpg" />
          <p>Ethiopia(Filtre Kahve Çekirdeği)<br>250 Gr <br>₺205,00</p>
        </q-card>
        </div>
        <ul>
       <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-4"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-4"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-4"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color: #cbab60;; width: 150px; margin-right: 20px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-4"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>

        </ul>

      </q-carousel-slide>

      <q-carousel-slide :name="4" class="column no-wrap" >
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap" style="margin-left: 200px;">
          <q-card class="card-no-border">
          <q-img style="width: 200px;text-align: center; " class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg" />
          <p>Blend(Filtre Kahve )<br>250 Gr <br>₺205,00</p>
        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px; " class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/costa-rica-filtre-kahve-250-gr-478-67.jpg" />
          <p>Costa Rica(Filtre Kahve)<br>250 Gr <br>₺205,00</p>
        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px;" class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/ethiopia-filtre-kahve-cekirdegi-250-gr-4549-b.jpg" />
          <p>Ethiopia(Filtre Kahve Çekirdeği)<br>250 Gr <br>₺205,00</p>
        </q-card>
        <q-card class="card-no-border">
          <q-img style="width: 200px; " class="rounded-borders col-3 " src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g-d6-a34.jpg" />
          <p>Guatemala(Filtre Kahve Çekirdeği)<br>250 Gr <br>₺205,00</p>
        </q-card>
        </div>
        <ul>
       <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-5"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-5"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color:#cbab60;; width: 150px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-5"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
          <q-btn
            style="background-color: bisque;text-decoration-color: #cbab60;; width: 150px; margin-right: 20px;"
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-5"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>

        </ul>
      </q-carousel-slide>
    </q-carousel>
  </div>


</template>



<style>
.q-card{
  margin-inline-start: 100px;
  margin-top: 50px;
  margin-inline-end: 30px;
  margin-left: 80px;


}

.custom-button-2 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;

  margin-block-end: 100px;
  margin-right: 10%;

}
.custom-button-3 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;
  margin-block-end: 100px;
  margin-right: 10%;

}
.custom-button-4 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;
  margin-block-end: 100px;
  margin-right: 10%;

}
.custom-button-5 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;
  margin-block-end: 100px;
  margin-right: 10%;

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
.card-no-border{
  border:none;
  box-shadow: 0 0 0 ;
}
</style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>
