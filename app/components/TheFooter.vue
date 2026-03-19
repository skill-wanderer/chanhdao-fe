<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  learn: [
    { label: 'Tat ca khoa hoc', to: '/courses' },
    { label: 'Lo trinh hoc', to: '/paths' },
    { label: 'Tim kiem', to: '/search' },
  ],
  about: [
    { label: 'Gioi thieu', to: '/about' },
    { label: 'Ma nguon mo', href: 'https://github.com/skill-wanderer/chanhdao-fe' },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/skill-wanderer/chanhdao-fe' },
  ],
}
</script>

<template>
  <footer class="bg-surface-darker border-t border-brand-orange/15 pt-[60px] pb-[30px] px-5">
    <div class="max-w-content mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-2 no-underline mb-3" aria-label="Home">
            <Icon name="mdi:fire" class="text-brand-orange text-2xl" />
            <span class="gradient-text text-lg font-bold">Chanh Dao Hoc Tap</span>
          </NuxtLink>
          <p class="text-[rgba(224,224,224,0.6)] text-sm leading-relaxed max-w-[280px]">
            Nen tang hoc tap mo mien phi, de bat ky ai cung co the tiep can.
          </p>
        </div>

        <!-- Learn -->
        <div>
          <h4 class="text-[#e0e0e0] text-sm font-bold uppercase tracking-widest mb-4">Hoc tap</h4>
          <ul class="list-none flex flex-col gap-2.5">
            <li v-for="link in footerLinks.learn" :key="link.to">
              <NuxtLink :to="link.to" class="text-[rgba(224,224,224,0.6)] text-sm transition-colors duration-300 hover:text-brand-orange">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h4 class="text-[#e0e0e0] text-sm font-bold uppercase tracking-widest mb-4">Gioi thieu</h4>
          <ul class="list-none flex flex-col gap-2.5">
            <li v-for="link in footerLinks.about" :key="link.label">
              <NuxtLink v-if="link.to" :to="link.to" class="text-[rgba(224,224,224,0.6)] text-sm transition-colors duration-300 hover:text-brand-orange">{{ link.label }}</NuxtLink>
              <a v-else :href="link.href" target="_blank" rel="noopener noreferrer" class="text-[rgba(224,224,224,0.6)] text-sm transition-colors duration-300 hover:text-brand-orange">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <h4 class="text-[#e0e0e0] text-sm font-bold uppercase tracking-widest mb-4">Cong dong</h4>
          <ul class="list-none flex flex-col gap-2.5">
            <li v-for="link in footerLinks.community" :key="link.label">
              <a :href="link.href" target="_blank" rel="noopener noreferrer" class="text-[rgba(224,224,224,0.6)] text-sm transition-colors duration-300 hover:text-brand-orange">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/5 pt-5 flex justify-between items-center text-sm text-[rgba(224,224,224,0.4)] max-md:flex-col max-md:gap-2 max-md:text-center">
        <p>&copy; {{ currentYear }} Chanh Dao Hoc Tap. Phat hanh theo giay phep Apache.</p>
        <p class="flex items-center gap-1">
          Phat trien voi <Icon name="mdi:heart" class="text-brand-orange text-sm" /> va <Icon name="mdi:vuejs" class="text-semantic-success text-sm" /> Nuxt
        </p>
      </div>
    </div>
  </footer>
</template>

