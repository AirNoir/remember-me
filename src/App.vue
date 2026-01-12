<template>
  <div class="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServiceCards />
    <PortfolioGrid />
    <ContactForm />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServiceCards from './components/ServiceCards.vue'
import PortfolioGrid from './components/PortfolioGrid.vue'
import ContactForm from './components/ContactForm.vue'
</script>

