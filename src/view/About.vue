<template>
  <section class="py-20 px-4 bg-gray-800">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6 section-title mx-auto">About Me</h2>
      <p class="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        {{ aboutMe.description }}
      </p>

      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Image Part -->
        <div class="lg:w-2/5 flex justify-center">
          <div class="relative">
            <div class="w-72 h-72 opacity-20 absolute -z-10 -bottom-4 -right-4"></div>
            <img :src="aboutMe.imageSrc" :alt="aboutMe.name" class="w-72 h-72 object-cover rounded-xl shadow-xl">
          </div>
        </div>

        <!-- Text & Info Part -->
        <div class="lg:w-3/5">
          <h3 class="text-2xl font-bold mb-6 text-blue-500">{{ aboutMe.title }}</h3>
          <p class="text-gray-300 mb-6">{{ aboutMe.intro }}</p>

          <!-- Personal Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div v-for="(value, key) in aboutMe.personalInfoLeft" :key="key">
              <p class="mb-2">
                <span class="text-blue-500 font-medium">{{ key }}:</span> {{ value }}
              </p>
            </div>
            <div v-for="(value, key) in aboutMe.personalInfoRight" :key="key">
              <p class="mb-2">
                <span class="text-blue-500 font-medium">{{ key }}:</span> {{ value }}
              </p>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4">
            <router-link to="/projects"
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
              View Projects
            </router-link>

            <router-link to="/contact"
              class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
              Contact Me
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aboutMe = {
  name: "Sor Chhin",
  title: "Web Developer,UI/UX, and Graphic Designer",
  description: "Get to know more about my background, skills, and experience",
  intro: "I am a second-year student at Passerelles Numériques Cambodia (PNC). I am qualified as a WEP intern, with experience in back-end, front-end, and website design projects completed during my studies. I'm passionate about creating user-friendly web solutions, UX/UI design, Graphic design, and am seeking internship opportunities to grow my skills.",
  imageSrc: "/images/cvimg.png",
  personalInfoLeft: {
    Name: "Sor Chhin",
    Email: "sor.chhin@student.passerellesnumeriques.org",
    Age: 20
  },
  personalInfoRight: {
    From: "Phnom Penh",
    "Full-time": "Available",
    Experience: "None"
  }
};
</script>
