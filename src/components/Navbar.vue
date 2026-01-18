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
          <!-- <h1 class="text-xl md:text-2xl font-bold text-deep-blue-grey">
            Remember Me
          </h1> -->
          <img
            src="@/assets/images/logo.png"
            alt="Remember Me"
            class="w-[120px] h-[120px] md:w-[200px] md:h-[200px]"
          />
        </div>
        <div class="hidden md:flex space-x-8 text-xl">
          <a
            href="#services"
            class="text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
          >
            服務項目
          </a>
          <a
            href="#portfolio"
            class="text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
          >
            作品集
          </a>
          <a
            href="#contact"
            class="text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
          >
            聯絡我們
          </a>
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
        <a
          href="#services"
          @click="toggleMobileMenu"
          class="block py-2 text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
        >
          服務項目
        </a>
        <a
          href="#portfolio"
          @click="toggleMobileMenu"
          class="block py-2 text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
        >
          作品集
        </a>
        <a
          href="#contact"
          @click="toggleMobileMenu"
          class="block py-2 text-deep-blue-grey hover:text-deep-blue-grey/80 transition-colors"
        >
          聯絡我們
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Menu, X } from "lucide-vue-next";

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
