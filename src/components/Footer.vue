<template>
  <footer class="py-12 px-4  mt-auto  bg-gray-700">
    <div class="container mx-auto text-center ">
      <!-- Social Links -->
      <div class="flex justify-center space-x-6 mb-6 ">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
          target="_blank"
        >
          <i :class="social.icon"></i>
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-gray-400">© 2025 sor chhin pnc. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socialLinks: [
        { name: "Facebook", url: "https://www.facebook.com/chhin.sreysor.52/", icon: "fab fa-facebook-f" },
        { name: "Telegram", url: "https://t.me/SOR_CHHIN", icon: "fab fa-telegram" },
        { name: "Instagram", url: "https://www.instagram.com/chhinsreysor/", icon: "fab fa-instagram" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/sor-chhin-94112a345/", icon: "fab fa-linkedin-in" },
        { name: "Github", url: "https://github.com/SOR-CHHIN", icon: "fab fa-github" },
      ],
    };
  },
};
</script>

<style scoped>
/* Optional: Add subtle hover effects for icons */
</style>
