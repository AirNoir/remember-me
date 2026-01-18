<template>
  <section
    class="relative w-full h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `linear-gradient(rgba(74, 98, 116, 0.4), rgba(244, 241, 234, 0.3)), url(${backgroundImage})`,
      }"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight"
        :class="{ 'slide-up': isVisible }"
      >
        紀錄生命中最溫暖的轉身
      </h1>
      <p
        class="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto"
        :class="{ 'slide-up-delay-1': isVisible }"
      >
        用專業與溫暖，為您珍藏每一份珍貴的回憶
      </p>
      <a
        href="#contact"
        class="inline-block bg-deep-blue-grey text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-deep-blue-grey/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        :class="{ 'slide-up-delay-2': isVisible }"
      >
        聯絡我們
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import backgroundImage from "@/assets/images/photo01.jpeg";

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>
