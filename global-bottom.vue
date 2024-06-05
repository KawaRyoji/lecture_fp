<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover' || $slidev.nav.currentLayout !== 'statement'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>