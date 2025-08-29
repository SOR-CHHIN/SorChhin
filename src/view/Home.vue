<template>
  <section class="pt-32 pb-20 px-4 bg-gray-800">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <!-- Left Content -->
      <div class="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right" data-aos-duration="1200">
        <div class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1200">
          <div>Hello, my name's</div>
          <div class="text-blue-500">{{ aboutMe.name }}</div>
          <div>
            <span class="text-blue-500">{{ aboutMe.title }}</span>
          </div>
        </div>
        <p class="text-gray-400 mb-8 max-w-md" data-aos="fade-up" data-aos-delay="200">
          {{ aboutMe.description }}
        </p>
        <a
          :href="aboutMe.cvLink"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          :aria-label="'Download CV for ' + aboutMe.name"
          download
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Download CV
        </a>
      </div>

      <!-- Right Image -->
      <div class="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-duration="1200">
        <div class="relative">
          <div
            class="w-64 h-64 md:w-80 md:h-80  rounded-full opacity-20 absolute -z-10 top-6 left-6"
            data-aos="zoom-out"
            data-aos-delay="200"
          ></div>
          <img
            :src="aboutMe.imageSrc"
            :alt="'Profile image of ' + aboutMe.name"
            class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-400 shadow-lg"
            data-aos="flip-left"
            data-aos-delay="400"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Other Sections with Animations -->
  <About data-aos="fade-up" data-aos-duration="1200" />
  <Skills data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" />
  <Design data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" />
  <Projects data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" />
  <Contact data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" />
</template>

<script setup>
import About from './About.vue';
import Skills from './Skills.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import Design from './Design.vue';

const aboutMe = {
  name: "Sor Chhin",
  title: "Web Developer and UX/UI Designer, Graphic Designer",
  description:
    "I am eager to challenge myself in a new environment where I can continue learning, growing, and applying my skills through hands-on projects.",
  cvLink: "/images/Sor.Chhin_Graphic_Design.pdf", // Replace with actual CV file path
  imageSrc: "/images/me.png",
};
</script>
