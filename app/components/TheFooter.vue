<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  learn: [
    { label: 'Tất cả pháp quyển', to: '/phap-quyen' },
    { label: 'Pháp Lộ', to: '/phap-lo' },
    { label: 'Tìm kiếm', to: '/search' },
  ],
  about: [
    { label: 'Giới thiệu', to: '/gioi-thieu' },
    { label: 'Mã nguồn mở', href: 'https://github.com/skill-wanderer/chanhdao-fe' },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/skill-wanderer/chanhdao-fe' },
  ],
}
</script>

<template>
  <footer class="bg-surface-bg-alt border-t border-brand-primary/15 pt-[60px] pb-[30px] px-5">
    <div class="max-w-content mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-2 no-underline mb-3" aria-label="Home">
            <Icon name="mdi:dharmachakra" class="text-brand-primary text-2xl" />
            <span class="gradient-text text-lg font-bold font-serif">CHÁNH ĐẠO.VN</span>
          </NuxtLink>
          <p class="text-text-muted text-sm leading-relaxed max-w-[280px]">
            Con đường dẫn đến Tuệ Giác. Số hoá toàn bộ Tam Tạng Kinh Điển Việt Nam.
          </p>
        </div>

        <!-- Learn -->
        <div>
          <h4 class="text-text-primary text-sm font-bold uppercase tracking-widest mb-4">Kinh tạng</h4>
          <ul class="list-none flex flex-col gap-2.5">
            <li v-for="link in footerLinks.learn" :key="link.to">
              <NuxtLink :to="link.to" class="text-text-muted text-sm transition-colors duration-300 hover:text-brand-accent">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h4 class="text-text-primary text-sm font-bold uppercase tracking-widest mb-4">Giới thiệu</h4>
          <ul class="list-none flex flex-col gap-2.5">
            <li v-for="link in footerLinks.about" :key="link.label">
              <NuxtLink v-if="link.to" :to="link.to" class="text-text-muted text-sm transition-colors duration-300 hover:text-brand-accent">{{ link.label }}</NuxtLink>
              <a v-else :href="link.href" target="_blank" rel="noopener noreferrer" class="text-text-muted text-sm transition-colors duration-300 hover:text-brand-accent">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <h4 class="text-text-primary text-sm font-bold uppercase tracking-widest mb-4">Cộng đồng</h4>
          <ul class="list-none flex flex-col gap-2.5">
            <li v-for="link in footerLinks.community" :key="link.label">
              <a :href="link.href" target="_blank" rel="noopener noreferrer" class="text-text-muted text-sm transition-colors duration-300 hover:text-brand-accent">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-brand-primary/10 pt-5 text-sm text-text-light">
        <div class="flex justify-between items-center max-md:flex-col max-md:gap-2 max-md:text-center">
          <p>&copy; {{ currentYear }} Chánh Đạo. Phát hành theo giấy phép Apache.</p>
          <p class="flex items-center gap-1">
            Phát triển với <Icon name="mdi:heart" class="text-brand-accent text-sm" /> và <Icon name="mdi:vuejs" class="text-semantic-success text-sm" /> Nuxt
          </p>
        </div>
        <p class="mt-3 text-xs text-text-muted max-md:text-center">
          Đây là dự án phi lợi nhuận kết hợp cùng
          <a href="https://skill-wanderer.com" target="_blank" rel="noopener noreferrer" class="text-brand-accent hover:text-brand-primary transition-colors duration-300">skill-wanderer.com</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

