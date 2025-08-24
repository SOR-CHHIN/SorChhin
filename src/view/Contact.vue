<template>
  <section class="py-20 px-4 bg-gray-800">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6 section-title mx-auto">Contact Me</h2>
      <p class="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Get in touch with me for collaborations or inquiries
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-blue-500">Let's talk about your project</h3>
          <p class="text-gray-300 mb-8">
            Have a project in mind? Feel free to reach out to me for collaborations or if you have any questions.
          </p>

          <div class="space-y-6">
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 class="font-bold">Location</h4>
                <p class="text-gray-400">Phnom Penh,Sen Sok</p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full p-4 bg-blue-500 flex items-center justify-center mr-4">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h4 class="font-bold">Email</h4>
                <p class="text-gray-400">sor.chhin@student.passerellesnumer
                iques.org</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-700 p-8 rounded-xl shadow-lg">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label for="email" class="block mb-2 font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label for="message" class="block mb-2 font-medium">Your Message</label>
              <textarea
                id="message"
                rows="4"
                v-model="form.message"
                required
                class="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // For now, just log the form data
      console.log("Form submitted:", this.form);

      // Reset form
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";

      // You can later integrate with an API or email service
      alert("Your message has been sent!");
    },
  },
};
</script>

<style scoped>
/* Optional: Add subtle hover/focus effects */
</style>
