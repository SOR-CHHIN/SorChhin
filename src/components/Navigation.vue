<template>
  <nav class="fixed w-full bg-gray-900 bg-opacity-90 z-10 shadow-md mr-9">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="text-xl font-bold text-blue-500 text-glow-blue">Sor Chhin.</div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-white focus:outline-none"
        >
          <i class="fas fa-bars text-xl"></i>
        </button>

        <!-- Desktop menu -->
        <div class="hidden md:flex space-x-8">
          <RouterLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="hover:text-blue-500 transition-colors"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="block py-2 hover:text-blue-500 transition-colors"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const mobileMenuOpen = ref(false);

const navItems = ref([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]);
</script>
