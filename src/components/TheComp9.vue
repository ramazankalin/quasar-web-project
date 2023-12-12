
<template>
  <div class="q-pa-md example-column-row-wrapping" style="font-family: 'Verona-Regular',sans-serif;">
    <h6 style="text-align: center;">Sipariş Takip</h6>
    <div  style="height: 300px; width: 700px; margin-top: 100px; background-color: white;">
      <div  style="text; margin-left: 20px; margin-top: 30px; margin-right: 20px;">
        <br>E-posta Adresiniz

        <q-input style="height: 20px; width: 100%;" square outlined v-model="email" placeholder="Mail@site.com"></q-input>
        <br><br><br>Sipariş numaranız
        <q-input style="height: 20px; width: 500px; margin-top: 0px; width: 100%;" square outlined v-model="orderNumber" placeholder="668CW73351"></q-input>

        <q-btn color="green" :disable="!orderNumber" label="sorgula" style="margin-top: 50px; margin-left: 600px;" @click="checkOrder" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const email = ref<string>('');
const orderNumber = ref<string>('');


const checkOrder = () => {
  console.log('Sipariş kontrol ediliyor:', orderNumber.value);
};
</script>
