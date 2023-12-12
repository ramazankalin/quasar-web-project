

<template>
  <div>
    <div class="box1" style="background-color:white;margin-left: 100px; margin-top: 200px;font-family: 'Verona-Regular',sans-serif">
      <h6 style="text-align: center;;">Üye Girişi</h6>
      <div class="q-gutter-y-md column" style=" margin-left: 50px;font-family: 'Verona-Regular',sans-serif
  width: 500px;">
      <q-input square outlined v-model="text" placeholder="E-Posta" >
        <template v-slot:append>

</template>
</q-input>
<q-input square outlined v-model="text" placeholder="Şifre" >

<template v-slot:append>
    <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
</template>

<template v-slot:hint>
  Field hint
</template>
</q-input>
</div>

<div>
    <button class="Girisyap"
      @mouseover="changeColor2(true)"
      @mouseout="changeColor2(false)"
      :style="{ backgroundColor: buttonColor }"
    >
    <h style="color: aliceblue; font-family: 'Verona-Regular',sans-serif">Giriş Yap</h>
    </button>


  </div>
  <q-btn flat style="background-color:white;text-decoration-line: underline;margin-left: 400px ; text-transform: capitalize;font-family: 'Verona-Regular',sans-serif">Şifremi unuttum</q-btn>
</div>
    <div class="box2" style="background-color:white;font-family: 'Verona-Regular',sans-serif">
      <h6 style="text-align: center;margin-left: 100px;">Hızlı Üyelik</h6>
      <div class="q-gutter-y-md column" style=" margin-left: 50px;
  width:800px;">
      <q-input square outlined v-model="text" placeholder="Adınız" >
        <template v-slot:append>


</template>
</q-input>
<q-input square outlined v-model="text" placeholder="Soyadınız" >

<template v-slot:append>

</template>
</q-input>
<q-input square outlined v-model="text" placeholder="e-posta" >
<template v-slot:hint>
  Field hint
</template>

</q-input>
<q-input square outlined v-model="text" placeholder="Şifre" >

<template v-slot:append>
    <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
</template>

<template v-slot:hint>
  Field hint
</template>
</q-input>
<q-input square outlined  prefix="+90">
        <template v-slot:before>
        <div class="q-pa-md" style="margin-left: -15px;padding-right: 0%;height: 70px;width: 100px;">
    <q-btn-dropdown
      split
      background-color="white"
      no-caps
      icon="flag"
      icon-color="red"
      @click="onMainClick"
    >
      <q-list>
        <q-item clickable v-close-popup style="background-color: white;">
          <q-item-section avatar>
            <q-img src="https://kilavuzgorsel.com.tr/wp-content/uploads/2019/11/4.jpg?v=1634813345"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Azerbaijan  +994</q-item-label>
          </q-item-section>

        </q-item>

        <q-item clickable v-close-popup style="background-color: white;">
          <q-item-section avatar>
            <q-img src="https://blog.obilet.com/wp-content/uploads/2022/12/Ispanya-Bayrak-1024x683.jpeg"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Spain  +34</q-item-label>
          </q-item-section>

        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
        </template>
      </q-input>

      <div class="q-pa-md">
    <q-option-group
      :options="options"
      type="checkbox"
      v-model="group"
    />
    <button class="uyeol" style="margin-left: 0%;width: 800px;"
      @mouseover="changeColor(true)"
      @mouseout="changeColor(false)"
      :style="{ backgroundColor: buttonColor }"
    >
      <h style="color: aliceblue;">ÜYE OL</h>
    </button>
  </div>

</div>

    </div>
  </div>
</template>


<style>
.box1 {
  width: 600px;
  height: 400px;
  margin-right: 30px; /* Add margin for spacing between boxes */
  display: inline-block;
  vertical-align: top; /* Align boxes at the top */
  margin-left: 500px;
  font-family: 'Verona-Regular',sans-serif
}
.box2 {
  width: 600px;
  height: 700px;
  margin-top: 200PX;
  display: inline-block;
  vertical-align: top; /* Align boxes at the top */
  margin-left: 100px;
  font-family: 'Verona-Regular',sans-serif
}
.Girisyap{
  padding: 20px;
  cursor: pointer;
  margin-left: 50px;
  width: 500px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  background-color: #cbab60;
  font-family: 'Verona-Regular',sans-serif
}
.Girisyap:hover{background-color: black;}
.uyeol{
  padding: 20px;
  cursor: pointer;
  margin-left: 50px;
  width: 500px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  background-color: #cbab60;
  font-family: 'Verona-Regular',sans-serif
}
.uyeol:hover{background-color: black;}

</style>

<script>
import { ref } from 'vue'


export default {
  setup () {
    return {
      group: ref([]),
      options: [
        { label: 'Kampanya, duyuru, bilgilendirmelerden e-posta ile haberdar olmak istiyorum', value: 'bat' },
        { label: 'Kampanya, duyuru, bilgilendirmelerden sms ile haberdar olmak istiyorum.', value: 'friend', color: 'blue' },
        { label: 'Üyelik koşullarını ve kişisel verilerimin korunmasını kabul ediyorum.', value: 'upload', color: 'blue' }
      ]
    }
  },



  setup3 () {
    return {
      text: ref('')
    }
  },
  setup4 () {
    return {
      text: ref('')
    }
  },




  methods: {
    changeColor(isHovered) {
      this.buttonColor = isHovered ? this.hoverColor : '#cbab60';
    },
    changeColor2(isHovered) {
      this.buttonColor = isHovered ? this.hoverColor : '#cbab60';
  }
}
}
</script>

