<template>
  <section
    id="services"
    class="py-16 md:py-24 bg-warm-sand"
    :class="{ 'slide-up': isVisible }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-deep-blue-grey mb-12 md:mb-16">
        我們的服務
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :service="service"
          :delay="index * 0.1"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ServiceCard from './ServiceCard.vue'

const isVisible = ref(false)

const services = [
  {
    icon: 'Video',
    title: '影片製作',
    description: '專業的紀念影片製作服務，捕捉生命中最珍貴的時刻，用影像訴說溫暖的故事。',
  },
  {
    icon: 'Projector',
    title: '投影支援',
    description: '提供完整的投影設備與技術支援，確保每一場追思會都能完美呈現。',
  },
  {
    icon: 'Radio',
    title: '現場直播',
    description: '即時直播服務，讓無法到場的親友也能參與這場重要的告別儀式。',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  const element = document.getElementById('services')
  if (element) {
    observer.observe(element)
  }
})
</script>

