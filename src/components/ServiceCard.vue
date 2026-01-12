<template>
  <div
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 transform hover:-translate-y-2"
    :style="{ animationDelay: `${delay}s`, opacity: isVisible ? 1 : 0 }"
  >
    <div class="flex justify-center mb-4">
      <component
        :is="iconComponent"
        :size="48"
        class="text-deep-blue-grey"
      />
    </div>
    <h3 class="text-xl md:text-2xl font-bold text-center text-deep-blue-grey mb-4">
      {{ service.title }}
    </h3>
    <p class="text-gray-600 text-center leading-relaxed">
      {{ service.description }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { Video, Projector, Radio } from 'lucide-vue-next'

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
})

const isVisible = ref(false)

const iconComponent = computed(() => {
  const iconMap = {
    Video,
    Projector,
    Radio,
  }
  return iconMap[props.service.icon] || Video
})

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, props.delay * 1000)
})
</script>

