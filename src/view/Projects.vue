<template>
  <section class="py-20 px-4 bg-gray-800">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6 section-title">My Projects</h2>
      <p class="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Check out some of my recent projects
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title"
          class="portfolio-item bg-gray-900 rounded-xl overflow-hidden shadow-lg relative group">
          <!-- Project image -->
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />

          <!-- Hover overlay with blur -->
          <div
            class="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div class="text-center text-white">
              <h4 class="text-lg font-semibold mb-2">Built With</h4>
              <div class="flex flex-wrap gap-2 justify-center">
                <span v-for="(lang, index) in project.languages" :key="index"
                  class="px-3 py-1 bg-blue-600 rounded-full text-sm">
                  {{ lang }}
                </span>
              </div>
            </div>
            <div class="mt-4 flex flex-row gap-4">
              <a v-if="project.Demo" :href="project.Demo"
                :aria-label="'View ' + project.title + ' project demo'"
                class="text-blue-500 hover:text-gray-100 font-medium flex items-center border p-2 rounded-md hover:bg-blue-500">
                View Project
              </a>
              <a v-if="project.Code" :href="project.Code"
                :aria-label="'View source code for ' + project.title"
                class="text-blue-500 hover:text-gray-100 font-medium flex items-center border p-2 rounded-md hover:bg-blue-500">
                Code
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "POS System",
    description: "A web-based Point of Sale (POS) system designed for small businesses to manage sales, inventory, and customer data efficiently. Built with PHP, Bootstrap, HTML, CSS, JavaScript, Jira, and MySQL.",
    image: "../public/images/pos.png",
    languages: ["PHP", "Bootstrap", "HTML", "CSS", "JavaScript","Jira", "MySQL"],
    Demo: "",
    Code: "https://github.com/sinhpp/VC1-POS_System",
  },
  {
    title: "Note Taker App",
    description: "A web application that allows users to write, save, and delete notes for personal use. This app is built with JavaScript, Bootstrap, HTML, and CSS.",
    image: "../public/images/note.png",
    languages: ["JavaScript", "Bootstrap", "CSS", "HTML"],
    Demo: "https://note-taker-app-group5.netlify.app/",
    Code: "https://github.com/Sokleap-Seng/project-Note-Taker-G5",
  },
  {
    title: "Clinic Services",
    description: " A responsive website for a clinic that provides information about services, doctors, and appointment booking using HTML, CSS, and SASS.",
    image: "../public/images/clinic.png",
    languages: ["HTML", "CSS", "SASS"],
    Demo: "https://clinic-service-a6.netlify.app/",
    Code: "https://github.com/darinhoy/clinic-service-A6",
  },
  {
    title: "School Management System",
    description: "To simplify and organize school operations by managing relationships between students, teachers, subjects, and classes using OOP in TypeScript.",
    image: "../public/images/oop.png",
    languages: ["OOP(Tyscript)", "GitHub"],
    // Demo: "https://clinic-service-a6.netlify.app/",
    Code: "https://github.com/SOR-CHHIN/School-management-System-A4",
  },
  {
    title: "AUTOMATED DOCUMENT GENERATION",
    description: "A project aimed at automating the process of generating documents using Python. It helps to save time and reduce errors associated with manual document creation.",
    image: "../public/images/Automation.png",
    languages: ["Algorithm (Basic Python)", "GitHub"],
    // Demo: "https://clinic-service-a6.netlify.app/",
    Code: "https://github.com/lymengmeng09/G12_AUTOMATED-DOCUMENT-GENERATION-",
  },
  {
    title: "PNC student  association club brochure",
    description: " To design a visually appealing brochure for the PNC Student Association Club using Figma, showcasing the club’s activities and information effectively",
    image: "../public/images/AS.jpg",
    languages: ["Figma"],
     Demo: "https://www.figma.com/proto/Z2T3wubUojkGNHd8RwBZTt/Design?node-id=2003-888&t=IU9MFUxtEGG3SZRD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2003%3A472",
  }
];
</script>

<style scoped>
.portfolio-item {
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.group-hover\:opacity-100 {
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: scale(1.02);
}
</style>