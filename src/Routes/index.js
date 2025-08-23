import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import About from "@/view/About.vue";
import Skills from "@/view/Skills.vue";
import Projects from "@/view/Projects.vue";
import Contact from "@/view/Contact.vue";
import Design from "@/view/Design.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/skills", name: "Skills", component: Skills },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/design", name: "Design", component: Design },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
