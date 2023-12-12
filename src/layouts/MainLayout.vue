<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <component-link
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ComponentLink, {
  ComponentLinkProps,
} from 'components/ComponentLink.vue';

const componentLinks: ComponentLinkProps[] = [
  {
    title: 'Sayfa 1',
    link: '/comp1',
  },
  {
    title: 'Sayfa 2',
    link: '/comp2',
  },
  {
    title: 'Sayfa 3',
    link: '/comp3',
  },
  {
    title: 'Sayfa 4',
    link: '/comp4',
  },
  {
    title: 'Sayfa 5',
    link: '/comp5',
  },
  {
    title: 'Sayfa 6',
    link: '/comp6',
  },
  {
    title: 'Sayfa 7',
    link: '/comp7',
  },
  {
    title: 'Sayfa 8',
    link: '/comp8',
  },
  {
    title: 'Sayfa 9',
    link: '/comp9',
  },
  {
    title: 'Sayfa 10',
    link: '/comp10',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  console.log(
    `toggleLeftDrawer çalıştı, leftDrawerOpen: ${leftDrawerOpen.value}`
  );
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
