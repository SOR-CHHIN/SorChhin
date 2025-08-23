```vue
<template>
  <section class="py-20 px-4 bg-gray-800">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6 section-title">My Skills</h2>
      <p class="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Here are the technologies and tools I specialize in
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div v-for="skill in skills" :key="skill.name"
          class="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700">
          <div class="flex justify-between mb-3">
            <span class="font-medium">{{ skill.name }}</span>
            <span class="text-blue-500">{{ skill.proficiency }}%</span>
          </div>
          <div class="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500 rounded-full skill-bar"
              :style="{ width: skill.proficiency + '%' }"
              role="progressbar"
              :aria-valuenow="skill.proficiency"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-label="'Proficiency in ' + skill.name"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: "HTML/CSS", proficiency: 80 },
  { name: "JavaScript", proficiency: 65 },
  { name: "Vue.js", proficiency: 70 },
  { name: "UI/UX Design", proficiency:  60},
  { name: "Tailwind CSS", proficiency: 70 },
  { name: "React", proficiency: 20 },
  { name: "Laravel", proficiency: 65 },
  { name: "PHP", proficiency: 60 },
  { name: "Node js", proficiency: 60 },
];
</script>

<style scoped>
.skill-bar {
  transition: width 1.5s ease-in-out;
}
</style>