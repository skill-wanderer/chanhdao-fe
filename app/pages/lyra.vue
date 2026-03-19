<script setup lang="ts">
useSeo({
  title: 'Lyra tro ly hoc tap',
  description: 'Lyra la tro ly AI ho tro tra cuu khoa hoc, bai hoc va lo trinh hoc tren nen tang.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Gap Lyra"
      subtitle="Tro ly luu tru"
      description="Nguoi ban dong hanh AI giup ban tim khoa hoc, bai hoc va lo trinh hoc nhanh hon."
      :cta-primary="{ label: 'Xem khoa hoc', to: '/courses' }"
      :cta-secondary="{ label: 'Xem lo trinh hoc', to: '/paths' }"
    />

    <!-- What is Lyra -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Lyra la gi?</h2>

      <div class="glass-card p-8 md:p-12 space-y-6">
        <div class="flex gap-4 items-start">
          <Icon name="mdi:book-open-page-variant-outline" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Tro ly AI cho nguoi hoc</h3>
            <p class="text-gray-400 leading-relaxed">
              Lyra la tro ly hoi dap duoc tich hop ngay tren nen tang. Lyra co kha nang tim kiem
              trong kho noi dung khoa hoc, bai hoc va lo trinh hoc de goi y thong tin phu hop.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <Icon name="mdi:brain" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Van hanh voi RAG</h3>
            <p class="text-gray-400 leading-relaxed">
              Lyra su dung Retrieval-Augmented Generation de tao cau tra loi dua tren noi dung that
              cua nen tang. Moi cau hoi deu duoc doi chieu tu nguon du lieu lien quan de tang do chinh xac.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <Icon name="mdi:link-variant" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Tra loi kem nguon tham chieu</h3>
            <p class="text-gray-400 leading-relaxed">
              Cac cau tra loi kem theo lien ket den bai hoc hoac trang lien quan de ban kiem chung va
              hoc sau hon khi can.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Can You Ask -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Ban co the hoi gi?</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="glass-card p-6">
          <Icon name="mdi:school-outline" class="text-brand-orange text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Khoa hoc va bai hoc</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Co nhung khoa hoc nao?" · "Cho toi biet ve khoa hoc kiem thu" · "Module 2 hoc gi?"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:map-marker-path" class="text-brand-orange text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Lo trinh hoc</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Co nhung lo trinh nao?" · "Toi nen bat dau tu dau?" · "Cho toi biet ve lo trinh QA"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:progress-check" class="text-brand-orange text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Tien do va tinh nang</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Theo doi tien do the nao?" · "Quiz hoat dong ra sao?" · "Toi co can tai khoan khong?"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:compass-outline" class="text-brand-orange text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Huong dan chung</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Nen bat dau tu dau?" · "Hoc kiem thu the nao hieu qua?" · "Nen tang nay khac gi?"
          </p>
        </div>
      </div>
    </section>

    <!-- How to Use -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Cach su dung Lyra</h2>

      <div class="glass-card p-8 md:p-12">
        <ol class="space-y-6">
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold shrink-0">1</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Mo khung tro chuyen</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Bam vao bieu tuong cuon sach o goc duoi ben phai de mo khung Lyra.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold shrink-0">2</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Dat cau hoi</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Nhap cau hoi hoac chon goi y co san. Lyra se tim du lieu va tra loi kem tham chieu.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold shrink-0">3</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Mo nguon tham chieu</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Moi phan hoi deu co lien ket lien quan de ban hoc sau ngay lap tuc.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold shrink-0">4</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Tiep tuc hoac dat lai</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Lyra ghi nho hoi thoai trong phien hien tai. Ban co the hoi tiep hoac dat lai de bat dau moi.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:book-open-page-variant-outline" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-2xl font-bold gradient-text mb-4">San sang kham pha?</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Ban co the mo Lyra tu moi trang bang bieu tuong cuon sach, hoac vao thang danh sach khoa hoc.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/courses" class="btn btn-primary">
            Xem khoa hoc <Icon name="mdi:arrow-right" />
          </NuxtLink>
          <NuxtLink to="/paths" class="btn btn-outline">
            Lo trinh hoc <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
