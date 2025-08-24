<template>

  <div class="relative w-full max-w-8xl  mx-auto rounded-xl overflow-hidden shadow-lg m-9 bg-gray-800 h-150">
    <!-- Slide -->
    <transition :name="transitionEffect" mode="out-in">
      <img
        :key="currentSlide"
        :src="slides[currentSlide]"
        class=" h-150 object-cover m-auto"
        alt="Slide Image"
      />
    </transition>

    <!-- Navigation Arrows -->
    <button
      @click="prevSlide"
      class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white"
    >
      ‹
    </button>
    <button
      @click="nextSlide"
      class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white"
    >
      ›
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="setSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all',
          currentSlide === index ? 'bg-white' : 'bg-white/50'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slides = [
  "../public/images/D1.png",
  "../public/images/D2.png",
  "../public/images/D3.jpg",
  "../public/images/D7.png",
  "../public/images/D4.jpg",
  "../public/images/D6.jpg",
  "../public/images/D5.jpg"
];

const currentSlide = ref(0);
const intervalDuration = 3000;
let interval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};
const setSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  interval = setInterval(nextSlide, intervalDuration);
});
onUnmounted(() => {
  clearInterval(interval);
});

const transitionEffect = ref("fade");
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
