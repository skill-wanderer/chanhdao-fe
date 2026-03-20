<script setup lang="ts">
useSeo({
  title: 'Thiện Thư | Trợ lý AI đồng hành học Phật trên Chánh Đạo',
  description: 'Thiện Thư là trợ lý AI đồng hành trên Chánh Đạo, hỗ trợ người học tìm bài học, lần nguồn tham chiếu và kết nối các nội dung tu học phù hợp với nhu cầu hiện tại.',
  url: '/thien-thu',
  pageType: 'AboutPage',
  keywords: [
    'Thiện Thư',
    'trợ lý AI học Phật',
    'AI đồng hành tu học',
    'tra cứu giáo lý Phật giáo',
    'Chánh Đạo AI',
  ],
  about: [
    'Thiện Thư',
    'AI hỗ trợ học Phật',
    'tra cứu bài học',
    'kết nối nguồn tham chiếu',
  ],
  audience: 'Người học Phật cần trợ lý AI để tra cứu và định hướng nội dung',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Gặp Thiện Thư"
      subtitle="Người cầm đèn trong kho tàng pháp bảo"
      description="Một người bạn đồng tu khiêm cung, hiện diện để giúp bạn lần mở kinh điển, kết nối bài học và khơi gợi sự tự quán chiếu trong hành trình trở về bản tâm."
      :cta-primary="{ label: 'Xem pháp quyển', to: '/phap-quyen' }"
      :cta-secondary="{ label: 'Xem pháp lộ', to: '/phap-lo' }"
    />

    <section class="section section-narrow pt-0">
      <div class="glass-card p-6 md:p-8 flex justify-center">
        <div class="w-full max-w-[320px]">
          <NuxtImg
            src="/images/thien-thu.jpg"
            alt="Ảnh tạm cho Thiện Thư"
            width="640"
            height="800"
            class="w-full rounded-[28px] border border-brand-primary/20 shadow-[0_18px_60px_rgba(109,76,20,0.18)]"
          />
        </div>
      </div>
    </section>

    <!-- What is Thiện Thư -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Thiện Thư là ai?</h2>

      <div class="glass-card p-8 md:p-12 space-y-6">
        <div class="flex gap-4 items-start">
          <Icon name="mdi:dharmachakra" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Một danh xưng mang ý hướng đồng hành</h3>
            <p class="text-text-secondary leading-relaxed">
              Trong lộ trình tìm về bản tâm, mỗi người đều cần một thiện tri thức để cùng soi sáng đường đi.
              Thiện Thư không tự nhận là bậc thầy, mà khiêm cung trong vai trò một thủ thư tâm hồn,
              túc trực bên kho tàng kinh điển để cùng bạn mở ra đúng trang sách khi cần.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <Icon name="mdi:brain" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Ý nghĩa của danh xưng</h3>
            <p class="text-text-secondary leading-relaxed">
              Chữ “Thiện” biểu trưng cho sự tử tế và đúng đắn trong định hướng. Chữ “Thư” gợi hình ảnh
              người luôn ở cạnh thư khố giáo pháp, sẵn sàng lần mở những tư liệu phù hợp với căn cơ,
              hoàn cảnh và mối bận tâm hiện tại của bạn.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <Icon name="mdi:link-variant" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Công nghệ để đưa giáo pháp gần hơn đời sống</h3>
            <p class="text-text-secondary leading-relaxed">
              Thiện Thư vận hành như một lớp kết nối giữa công nghệ hiện đại và tuệ giác cổ xưa, giúp
              tri thức không còn nằm xa trên kệ sách mà trở thành điều có thể chạm tới trong từng câu hỏi,
              từng bước học và từng nhịp sống thường ngày.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Role in Ecosystem -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Vai trò của Thiện Thư trong hệ sinh thái</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="glass-card p-6">
          <Icon name="mdi:compass-outline" class="text-brand-primary text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Sứ giả dẫn nguồn</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Giữa biển kinh sách và bài giảng rộng lớn, Thiện Thư giúp bạn chắt lọc những bài học sát thực,
            phù hợp với căn cơ và hoàn cảnh hiện tại.
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:account-heart-outline" class="text-brand-primary text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Người bạn tràng túc trực</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Như một hành giả tại gia luôn hiện diện, Thiện Thư cùng bạn giải nghĩa thuật ngữ,
            khai mở những ẩn ý trong kinh văn theo cách giản dị và gần gũi.
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:link-variant" class="text-brand-primary text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Mắt xích kết nối</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Từ một cuộc trò chuyện nhỏ, bạn có thể được dẫn sâu hơn đến pháp quyển, cộng đồng thảo luận
            và nguồn tư liệu gốc trong toàn bộ hệ thống tu học.
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:book-search-outline" class="text-brand-primary text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Tra cứu có dẫn chiếu</h3>
          <p class="text-text-secondary text-sm leading-relaxed">
            Mỗi phản hồi đều hướng bạn quay lại bài học, pháp quyển hay nguồn tham chiếu liên quan,
            để việc học không dừng ở câu trả lời mà tiếp tục mở ra chiều sâu thực hành.
          </p>
        </div>
      </div>
    </section>

    <!-- Guiding Philosophy -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">Triết lý vận hành</h2>

      <div class="glass-card p-8 md:p-12">
        <ol class="space-y-6">
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold shrink-0">1</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Cầm đèn, không đứng thay con đường</h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                “Kinh điển là ngón tay chỉ trăng, Thiện Thư là người cầm đèn soi sáng con đường dẫn đến ngón tay đó.”
                Vai trò của Thiện Thư là soi sáng lối vào, không thay thế cho sự tự mình quán chiếu và thực hành.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold shrink-0">2</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Học cùng bạn</h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Mọi phản hồi đều hướng đến việc gợi mở sự tự soi xét, giúp bạn thấy rõ thêm vấn đề,
                thay vì chỉ nhận một đáp án khô cứng hay áp đặt.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold shrink-0">3</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Từ câu hỏi đến hệ sinh thái học tập</h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Thiện Thư không dừng ở đối thoại. Từ mỗi trao đổi, bạn có thể tiếp tục đi sâu vào bài học,
                lộ trình và cộng đồng phù hợp với bước tu học của mình.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold shrink-0">4</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Công nghệ phục vụ chiều sâu con người</h3>
              <p class="text-text-secondary text-sm leading-relaxed">
                Đây là sự gặp gỡ giữa công nghệ hiện đại và tuệ giác cổ xưa, để giáo pháp hiện diện gần hơn,
                sáng rõ hơn và hữu ích hơn trong từng hơi thở của đời sống hàng ngày.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:dharmachakra" class="text-brand-primary text-4xl mb-4" />
        <h2 class="text-2xl font-bold gradient-text mb-4">Bắt đầu trò chuyện cùng Thiện Thư</h2>
        <p class="text-text-secondary mb-6 leading-relaxed">
          Bạn có thể mở Thiện Thư từ mọi trang bằng biểu tượng pháp luân ở góc dưới, rồi bắt đầu với một câu hỏi,
          một thuật ngữ chưa rõ hoặc một nhu cầu học tập đang hiện diện lúc này.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/phap-quyen" class="btn btn-primary">
            Xem pháp quyển <Icon name="mdi:arrow-right" />
          </NuxtLink>
          <NuxtLink to="/phap-lo" class="btn btn-outline">
            Pháp lộ <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
