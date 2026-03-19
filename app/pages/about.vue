<script setup lang="ts">
useSeo({
  title: 'Gioi thieu Chanh Dao Hoc Tap',
  description: 'Thong tin tong quan ve nen tang, huong phat trien va gia tri ma du an theo duoi.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Vi sao chung toi xay dung nen tang nay"
      subtitle="Gioi thieu du an"
      description="Mot nen tang hoc tap mo, toi gian va ben vung, duoc xay dung de phuc vu nguoi hoc tieng Viet."
    />

    <!-- Why a Custom LMS -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Tam nhin va huong di</h2>

      <div class="glass-card p-8 md:p-12 space-y-8">
        <!-- AI-Powered -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:robot-outline" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Noi dung duoc cap nhat nhanh hon</h3>
            <p class="text-gray-400 leading-relaxed">
              Chung toi xay dung theo huong noi dung duoc quan ly minh bach, de cap nhat va de mo rong.
              Viec bien soan bai hoc duoc toi uu de doi ngu co the cai tien lien tuc ma khong bi phu thuoc
              vao quy trinh phuc tap.
            </p>
          </div>
        </div>

        <!-- Playing to Our Strengths -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:code-braces" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Tap trung vao trai nghiem nguoi hoc</h3>
            <p class="text-gray-400 leading-relaxed">
              Moi thay doi giao dien va noi dung deu duoc uu tien theo nhu cau hoc tap thuc te.
              Nen tang duoc thiet ke de don gian, ro rang va giup nguoi hoc tap trung vao kien thuc.
            </p>
          </div>
        </div>

        <!-- Modern & Open -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:open-source-initiative" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Mo, minh bach va de tiep can</h3>
            <p class="text-gray-400 leading-relaxed">
              Chung toi theo duoi huong ma nguon mo de cong dong co the cung xem xet, dong gop
              va phat trien. Nguoi hoc co the truy cap noi dung mien phi va nhat quan tren nhieu thiet bi.
            </p>
          </div>
        </div>

        <!-- Full Control -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:tune-vertical" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Cai tien lien tuc theo phan hoi</h3>
            <p class="text-gray-400 leading-relaxed">
              Du an duoc xay dung de de dang tiep nhan phan hoi va nang cap theo tung giai doan.
              Muc tieu la giu cho he thong nhe, de dung va ngay cang huu ich cho nguoi hoc.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Source CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:source-repository" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-2xl font-bold gradient-text mb-4">Du an ma nguon mo</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Ban co the theo doi qua trinh phat trien, dong gop y kien va gui pull request tai kho ma nguon mo.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="https://github.com/skill-wanderer/chanhdao-fe" target="_blank" rel="noopener" class="btn btn-primary">
            Xem kho ma nguon <Icon name="mdi:open-in-new" />
          </a>
          <NuxtLink to="/courses" class="btn btn-outline">
            Xem khoa hoc <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
