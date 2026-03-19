<script setup lang="ts">
const isScrolled = ref(false)
const isMobileOpen = ref(false)
const isUserMenuOpen = ref(false)

const { isAuthEnabled, isAuthenticated, user, loginUrl, registerUrl, logout } = useKeycloak()

if (import.meta.client) {
  useEventListener(window, 'scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
}

const route = useRoute()
watch(() => route.path, () => {
  isMobileOpen.value = false
})

const navLinks = [
  { label: 'Pháp quyển', to: '/phap-quyen' },
  { label: 'Pháp Lộ', to: '/phap-lo' },
  { label: 'Thiện Thư', to: '/thien-thu' },
  { label: 'Giới thiệu', to: '/gioi-thieu' },
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] border-b border-brand-primary/10 transition-all duration-300"
  >
    <nav
      class="max-w-content mx-auto flex items-center justify-between backdrop-blur-[12px] transition-all duration-300"
      :class="isScrolled ? 'py-2.5 px-5 bg-[rgba(252,248,237,0.97)] lg:px-5 max-lg:px-4 max-lg:py-2' : 'py-4 px-5 bg-[rgba(252,248,237,0.92)] max-lg:px-4 max-lg:py-3'"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 text-[1.3rem] font-bold no-underline" aria-label="Trang chủ Chánh Đạo">
        <Icon name="mdi:dharmachakra" class="text-brand-primary text-[1.6rem]" />
        <span class="text-[clamp(0.85rem,3vw,1.2rem)] whitespace-nowrap font-serif gradient-text">CHÁNH ĐẠO<span class="logo-accent max-[400px]:hidden">.VN</span></span>
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="hidden lg:flex list-none items-center gap-5">
        <li v-for="link in navLinks" :key="link.label">
          <NuxtLink :to="link.to" class="nav-link" active-class="nav-link--active">
            {{ link.label }}
          </NuxtLink>
        </li>

      </ul>

      <!-- Search + Auth + CTA -->
      <div class="hidden lg:flex items-center gap-3">
        <NuxtLink to="/search" class="flex items-center text-text-secondary transition-colors duration-300 hover:text-brand-accent" aria-label="Tìm kiếm pháp quyển">
          <Icon name="mdi:magnify" size="22" />
        </NuxtLink>

        <!-- Auth buttons (only when Keycloak is configured) -->
        <template v-if="isAuthEnabled">
          <!-- Logged-out state -->
          <template v-if="!isAuthenticated">
            <a :href="loginUrl()" class="btn btn-outline btn-sm">
              <Icon name="mdi:login" size="18" />
              Đăng nhập
            </a>
            <a :href="registerUrl()" class="btn btn-primary btn-sm">
              <Icon name="mdi:account-plus" size="18" />
              Đăng ký
            </a>
          </template>

          <!-- Logged-in state -->
          <div
            v-else
            class="relative"
            @mouseenter="isUserMenuOpen = true"
            @mouseleave="isUserMenuOpen = false"
          >
            <button
              class="flex items-center gap-2 bg-transparent border-none cursor-pointer text-text-primary font-[inherit] text-[0.92rem] font-medium px-2 py-1 rounded-lg transition-colors duration-200 hover:bg-brand-primary/[0.08]"
              @click="isUserMenuOpen = !isUserMenuOpen"
              :aria-expanded="isUserMenuOpen"
            >
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white font-bold text-[0.85rem] shrink-0">
                {{ user?.name?.charAt(0)?.toUpperCase() || 'U' }}
              </span>
              <span class="max-w-[120px] overflow-hidden text-ellipsis whitespace-nowrap">{{ user?.name || 'Người dùng' }}</span>
              <Icon
                name="mdi:chevron-down"
                size="18"
                class="transition-transform duration-300"
                :class="{ 'rotate-180': isUserMenuOpen }"
              />
            </button>
            <Transition name="dropdown">
              <div v-show="isUserMenuOpen" class="absolute top-[calc(100%+12px)] right-0 min-w-[220px] bg-white backdrop-blur-[16px] border border-brand-primary/15 rounded-[10px] py-2 shadow-dropdown">
                <div class="px-[18px] py-3 flex flex-col gap-0.5">
                  <span class="font-semibold text-[0.95rem] text-text-primary">{{ user?.name }}</span>
                  <span class="text-[0.8rem] text-text-muted">{{ user?.email }}</span>
                </div>
                <hr class="border-none border-t border-brand-primary/10 my-1" />
                <button class="flex items-center gap-2.5 px-[18px] py-2.5 w-full bg-transparent border-none cursor-pointer text-text-primary text-[0.92rem] font-medium font-[inherit] transition-all duration-200 hover:text-brand-accent hover:bg-brand-primary/[0.08]" @click="logout">
                  <Icon name="mdi:logout" size="18" />
                  Đăng xuất
                </button>
              </div>
            </Transition>
          </div>
        </template>

      </div>

      <!-- Mobile Toggle -->
      <button
        class="flex lg:hidden bg-transparent border-none text-text-primary cursor-pointer"
        :aria-expanded="isMobileOpen"
        aria-label="Bật tắt menu"
        @click="isMobileOpen = !isMobileOpen"
      >
        <Icon :name="isMobileOpen ? 'mdi:close' : 'mdi:menu'" size="28" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isMobileOpen" class="flex flex-col py-4 px-5 max-lg:px-4 lg:hidden bg-[rgba(252,248,237,0.97)] backdrop-blur-[12px]">
        <template v-for="link in navLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="mobile-link"
            active-class="mobile-link--active"
          >
            {{ link.label }}
          </NuxtLink>
        </template>

        <NuxtLink to="/search" class="mobile-link">
          <Icon name="mdi:magnify" class="mr-2" /> Tìm kiếm
        </NuxtLink>

        <!-- Mobile Auth buttons -->
        <template v-if="isAuthEnabled">
          <template v-if="!isAuthenticated">
            <a :href="loginUrl()" class="mobile-link">
              <Icon name="mdi:login" class="mr-2" /> Đăng nhập
            </a>
            <a :href="registerUrl()" class="mobile-link">
              <Icon name="mdi:account-plus" class="mr-2" /> Đăng ký
            </a>
          </template>
          <template v-else>
            <div class="flex items-center gap-2.5 py-3 text-brand-accent font-semibold border-b border-brand-primary/10">
              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white font-bold text-[0.78rem] shrink-0">
                {{ user?.name?.charAt(0)?.toUpperCase() || 'U' }}
              </span>
              <span>{{ user?.name || 'Người dùng' }}</span>
            </div>
            <button class="mobile-link" @click="logout">
              <Icon name="mdi:logout" class="mr-2" /> Đăng xuất
            </button>
          </template>
        </template>

      </div>
    </Transition>
  </header>
</template>

<style scoped>
.logo-accent {
  -webkit-text-fill-color: #B8860B;
}

.nav-link {
  @apply text-text-secondary font-medium text-[0.9rem] relative py-1 transition-colors duration-300 whitespace-nowrap;
}
.nav-link::after {
  content: '';
  @apply absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-primary rounded-sm transition-all duration-300;
}
.nav-link:hover,
.nav-link--active {
  @apply text-brand-accent;
}
.nav-link:hover::after,
.nav-link--active::after {
  @apply w-full;
}

.mobile-link {
  @apply flex items-center py-3 text-text-primary font-medium border-b border-brand-primary/10 transition-colors duration-300;
}
.mobile-link:hover,
.mobile-link--active {
  @apply text-brand-accent;
}

/* Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  @apply transition-all duration-200;
}
.dropdown-enter-from,
.dropdown-leave-to {
  @apply opacity-0 -translate-y-2;
}
.slide-down-enter-active,
.slide-down-leave-active {
  @apply transition-all duration-300;
}
.slide-down-enter-from,
.slide-down-leave-to {
  @apply opacity-0 -translate-y-2.5;
}
</style>
