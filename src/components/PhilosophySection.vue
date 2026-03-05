<template>
  <section class="py-20 md:py-28 bg-warm-sand">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-blue-grey mb-4"
        >
          浮光拾影
        </h2>
        <p class="text-lg md:text-xl text-deep-blue-grey/70">
          我們的理念
        </p>
      </div>

      <div class="space-y-8 md:space-y-12">
        <div class="text-center">
          <p class="text-lg md:text-xl text-deep-blue-grey/90 leading-relaxed">
            生命如浮光掠影，每一個瞬間都值得被珍藏。
          </p>
        </div>

        <div class="bg-white/60 rounded-2xl p-8 md:p-12 shadow-sm">
          <p class="text-base md:text-lg text-deep-blue-grey/85 leading-relaxed mb-6">
            「浮光拾影」源自對生命的敬畏與感恩。我們相信，在告別的時刻，
            影像不僅是記錄，更是一份溫柔的陪伴。透過鏡頭，我們拾起那些
            稍縱即逝的光影，將愛與回憶凝結成永恆。
          </p>
          <p class="text-base md:text-lg text-deep-blue-grey/85 leading-relaxed">
            每一場紀念儀式，我們都以最真摯的心，用專業的技術與細膩的觀察，
            捕捉那些動人的細節——一個眼神、一次擁抱、一朵獻上的花。
            這些畫面，將成為家人們最珍貴的寶藏。
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 md:gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-deep-blue-grey/10 rounded-full flex items-center justify-center">
              <Heart class="w-8 h-8 text-deep-blue-grey" />
            </div>
            <h3 class="text-lg font-semibold text-deep-blue-grey mb-2">溫暖陪伴</h3>
            <p class="text-deep-blue-grey/70 text-sm">
              以同理心理解家屬的感受，給予最溫柔的支持
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-deep-blue-grey/10 rounded-full flex items-center justify-center">
              <Camera class="w-8 h-8 text-deep-blue-grey" />
            </div>
            <h3 class="text-lg font-semibold text-deep-blue-grey mb-2">專業記錄</h3>
            <p class="text-deep-blue-grey/70 text-sm">
              運用專業技術，細膩捕捉每一個珍貴瞬間
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-deep-blue-grey/10 rounded-full flex items-center justify-center">
              <Sparkles class="w-8 h-8 text-deep-blue-grey" />
            </div>
            <h3 class="text-lg font-semibold text-deep-blue-grey mb-2">永恆珍藏</h3>
            <p class="text-deep-blue-grey/70 text-sm">
              將回憶化為影像，讓愛與思念得以延續
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Heart, Camera, Sparkles } from 'lucide-vue-next'
</script>
