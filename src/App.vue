<template>
    

  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <Navigation/>
    <router-view></router-view>
    <Footer /> 
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue"

import Footer from "@/components/Footer.vue";
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
