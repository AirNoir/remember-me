<template>
  <section
    id="portfolio"
    class="py-16 md:py-24 bg-white"
    :class="{ 'slide-up': isVisible }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-deep-blue-grey mb-12 md:mb-16">
        作品集
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div
          v-for="(item, index) in portfolioItems"
          :key="index"
          class="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          :style="{ animationDelay: `${index * 0.1}s`, opacity: isVisible ? 1 : 0 }"
        >
          <div class="aspect-square bg-gradient-to-br from-deep-blue-grey/20 to-warm-sand/40 flex items-center justify-center">
            <div class="text-center p-4">
              <h3 class="text-lg md:text-xl font-semibold text-deep-blue-grey mb-2">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const portfolioItems = [
  {
    title: '追思影片',
    description: '溫馨的紀念影片，記錄生命中的美好時光',
  },
  {
    title: '投影服務',
    description: '專業的投影設備與技術支援',
  },
  {
    title: '直播服務',
    description: '即時直播，讓遠方的親友也能參與',
  },
  {
    title: '紀念冊設計',
    description: '精美的紀念冊設計與製作',
  },
  {
    title: '音樂編排',
    description: '溫馨的音樂選擇與編排',
  },
  {
    title: '攝影服務',
    description: '專業的攝影記錄服務',
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

  const element = document.getElementById('portfolio')
  if (element) {
    observer.observe(element)
  }
})
</script>

