<template>
  <section
    id="contact"
    class="py-16 md:py-24 bg-warm-sand"
    :class="{ 'slide-up': isVisible }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-deep-blue-grey mb-12 md:mb-16">
        聯絡我們
      </h2>
      <form
        @submit.prevent="handleSubmit"
        class="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6"
      >
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-deep-blue-grey mb-2"
          >
            姓名
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue-grey focus:ring-offset-2 transition-all"
            placeholder="請輸入您的姓名"
          />
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-deep-blue-grey mb-2"
          >
            電子郵件
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue-grey focus:ring-offset-2 transition-all"
            placeholder="請輸入您的電子郵件"
          />
        </div>
        <div>
          <label
            for="phone"
            class="block text-sm font-medium text-deep-blue-grey mb-2"
          >
            電話
          </label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue-grey focus:ring-offset-2 transition-all"
            placeholder="請輸入您的電話"
          />
        </div>
        <div>
          <label
            for="message"
            class="block text-sm font-medium text-deep-blue-grey mb-2"
          >
            訊息
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue-grey focus:ring-offset-2 transition-all resize-none"
            placeholder="請告訴我們您的需求"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-deep-blue-grey text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-deep-blue-grey/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          送出
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const handleSubmit = () => {
  // 這裡可以添加表單提交邏輯
  console.log('Form submitted:', form.value)
  alert('感謝您的聯絡，我們會盡快與您聯繫！')
  // 重置表單
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
}

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

  const element = document.getElementById('contact')
  if (element) {
    observer.observe(element)
  }
})
</script>

