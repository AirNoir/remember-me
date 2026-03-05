<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-warm-sand shadow-md' : 'bg-warm-sand shadow-md',
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex-shrink-0">
          <RouterLink to="/">
            <img
              src="@/assets/images/logo.png"
              alt="Remember Me"
              class="w-[120px] h-[120px] md:w-[200px] md:h-[200px]"
            />
          </RouterLink>
        </div>
        <div class="hidden md:flex space-x-8 text-xl">
          <RouterLink
            to="/#services"
            class="text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
            @click="scrollToSection('services')"
          >
            服務項目
          </RouterLink>
          <RouterLink
            to="/#portfolio"
            class="text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
            @click="scrollToSection('portfolio')"
          >
            作品集
          </RouterLink>
          <RouterLink
            to="/pricing"
            class="text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
          >
            收費方式
          </RouterLink>
          <RouterLink
            to="/#contact"
            class="text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
            @click="scrollToSection('contact')"
          >
            聯絡我們
          </RouterLink>
        </div>
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-deep-blue-grey focus:outline-none"
        >
          <Menu v-if="!mobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
        <RouterLink
          to="/#services"
          @click="handleMobileNavClick('services')"
          class="block py-2 text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
        >
          服務項目
        </RouterLink>
        <RouterLink
          to="/#portfolio"
          @click="handleMobileNavClick('portfolio')"
          class="block py-2 text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
        >
          作品集
        </RouterLink>
        <RouterLink
          to="/pricing"
          @click="toggleMobileMenu"
          class="block py-2 text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
        >
          收費方式
        </RouterLink>
        <RouterLink
          to="/#contact"
          @click="handleMobileNavClick('contact')"
          class="block py-2 text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
        >
          聯絡我們
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { Menu, X } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  if (route.path === '/') {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const handleMobileNavClick = (sectionId) => {
  toggleMobileMenu();
  if (route.path === '/') {
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
