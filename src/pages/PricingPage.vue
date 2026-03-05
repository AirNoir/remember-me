<template>
  <div class="pt-24 md:pt-32 pb-20 bg-warm-sand min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-blue-grey mb-4">
          收費方式
        </h1>
        <p class="text-lg md:text-xl text-deep-blue-grey/70 max-w-2xl mx-auto">
          透明合理的收費，讓您安心託付
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
        <!-- 基本方案 -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden">
          <div class="p-8">
            <h3 class="text-xl font-semibold text-deep-blue-grey mb-2">基本方案</h3>
            <p class="text-deep-blue-grey/60 text-sm mb-6">適合小型家庭告別式</p>
            <div class="mb-6">
              <span class="text-3xl font-bold text-deep-blue-grey">NT$ 12,000</span>
              <span class="text-deep-blue-grey/60 text-sm"> 起</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">2 小時拍攝服務</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">100 張精修照片</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">數位檔案交付</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">線上相簿一年</span>
              </li>
            </ul>
            <a
              href="/#contact"
              class="block w-full text-center py-3 px-6 border-2 border-deep-blue-grey text-deep-blue-grey rounded-lg font-medium hover:bg-deep-blue-grey hover:text-white transition-colors"
            >
              聯絡諮詢
            </a>
          </div>
        </div>

        <!-- 標準方案 -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <div class="absolute top-0 left-0 right-0 bg-deep-blue-grey text-white text-center py-2 text-sm font-medium">
            最受歡迎
          </div>
          <div class="p-8 pt-14">
            <h3 class="text-xl font-semibold text-deep-blue-grey mb-2">標準方案</h3>
            <p class="text-deep-blue-grey/60 text-sm mb-6">完整紀錄告別儀式</p>
            <div class="mb-6">
              <span class="text-3xl font-bold text-deep-blue-grey">NT$ 20,000</span>
              <span class="text-deep-blue-grey/60 text-sm"> 起</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">4 小時拍攝服務</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">200 張精修照片</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">3-5 分鐘紀念短片</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">數位檔案 + USB 隨身碟</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">線上相簿永久保存</span>
              </li>
            </ul>
            <a
              href="/#contact"
              class="block w-full text-center py-3 px-6 bg-deep-blue-grey text-white rounded-lg font-medium hover:bg-deep-blue-grey/90 transition-colors"
            >
              聯絡諮詢
            </a>
          </div>
        </div>

        <!-- 尊榮方案 -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden md:col-span-2 lg:col-span-1">
          <div class="p-8">
            <h3 class="text-xl font-semibold text-deep-blue-grey mb-2">尊榮方案</h3>
            <p class="text-deep-blue-grey/60 text-sm mb-6">全程紀錄與精緻製作</p>
            <div class="mb-6">
              <span class="text-3xl font-bold text-deep-blue-grey">NT$ 35,000</span>
              <span class="text-deep-blue-grey/60 text-sm"> 起</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">全日拍攝服務（不限時）</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">300+ 張精修照片</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">8-10 分鐘紀念影片</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">精裝相冊一本（30頁）</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">雙機作業（攝影+錄影）</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-deep-blue-grey flex-shrink-0 mt-0.5" />
                <span class="text-deep-blue-grey/80 text-sm">線上相簿永久保存</span>
              </li>
            </ul>
            <a
              href="/#contact"
              class="block w-full text-center py-3 px-6 border-2 border-deep-blue-grey text-deep-blue-grey rounded-lg font-medium hover:bg-deep-blue-grey hover:text-white transition-colors"
            >
              聯絡諮詢
            </a>
          </div>
        </div>
      </div>

      <!-- Additional Services -->
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-deep-blue-grey text-center mb-8">
          加購服務
        </h2>
        <div class="bg-white rounded-2xl shadow-md p-8">
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="flex justify-between items-center py-3 border-b border-gray-100">
              <span class="text-deep-blue-grey">額外拍攝時數</span>
              <span class="text-deep-blue-grey font-medium">NT$ 3,000 / 小時</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100">
              <span class="text-deep-blue-grey">追加精修照片</span>
              <span class="text-deep-blue-grey font-medium">NT$ 100 / 張</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100">
              <span class="text-deep-blue-grey">精裝相冊</span>
              <span class="text-deep-blue-grey font-medium">NT$ 5,000 起</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100">
              <span class="text-deep-blue-grey">紀念影片加長</span>
              <span class="text-deep-blue-grey font-medium">NT$ 2,000 / 分鐘</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100">
              <span class="text-deep-blue-grey">空拍服務</span>
              <span class="text-deep-blue-grey font-medium">NT$ 6,000</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-100">
              <span class="text-deep-blue-grey">急件處理（3日內交件）</span>
              <span class="text-deep-blue-grey font-medium">加收 30%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Notes -->
      <div class="max-w-4xl mx-auto mt-12">
        <div class="bg-deep-blue-grey/5 rounded-2xl p-8">
          <h3 class="text-lg font-semibold text-deep-blue-grey mb-4 flex items-center gap-2">
            <Info class="w-5 h-5" />
            服務說明
          </h3>
          <ul class="space-y-2 text-deep-blue-grey/80 text-sm">
            <li>• 以上價格均為參考價格，實際費用將依據服務內容與地點調整</li>
            <li>• 大台北地區免收車馬費，其他地區另計</li>
            <li>• 照片交件時間約為 7-14 個工作天，影片約為 14-21 個工作天</li>
            <li>• 可配合殯儀館、教會、佛堂等各類場地拍攝</li>
            <li>• 我們尊重每個家庭的信仰與習俗，提供客製化服務</li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <p class="text-deep-blue-grey/70 mb-6">
          有任何疑問或特殊需求，歡迎與我們聯繫
        </p>
        <a
          href="/#contact"
          class="inline-block bg-deep-blue-grey text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-deep-blue-grey/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          免費諮詢
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Check, Info } from 'lucide-vue-next'
</script>
