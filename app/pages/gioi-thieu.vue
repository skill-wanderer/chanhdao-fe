<script setup lang="ts">
type TeamMember = {
  name: string
  role: string
  bio: string[]
  avatar: string
}

type ProjectRepository = {
  name: string
  role: string
  href: string
}

useSeo({
  title: 'Giới thiệu Chánh Đạo | Sứ mệnh, đội ngũ và định hướng ứng dụng AI',
  description: 'Tìm hiểu sứ mệnh của Chánh Đạo, đội ngũ sáng lập, cách dự án ứng dụng AI vào học Phật và định hướng phát triển nền tảng tu học mở cho người Việt.',
  url: '/gioi-thieu',
  pageType: 'AboutPage',
  keywords: [
    'giới thiệu Chánh Đạo',
    'sứ mệnh Chánh Đạo',
    'đội ngũ Chánh Đạo',
    'AI học Phật',
    'nền tảng học Phật cho người Việt',
  ],
  about: [
    'sứ mệnh giáo dục Phật học',
    'đội ngũ sáng lập',
    'AI hỗ trợ tu học',
    'mã nguồn mở',
  ],
  audience: 'Người Việt quan tâm đến học Phật và dự án Chánh Đạo',
})

const founders: TeamMember[] = [
  {
    name: 'Nguyễn Hồng Quân',
    role: 'Đứng đầu công nghệ của dự án',
    avatar: '/nguyen-hong-quan.jpg',
    bio: [
      'Từng trải qua một thời kỳ dài vô thường trước khi được biết đến giáo lý Phật giáo. Sau đó cũng trải qua nhiều biến động ảnh hưởng đến con đường tu tập, nhưng càng về sau càng thấy thấm sâu giáo lý Phật giáo.',
      'Mong muốn tạo được một nền tảng kết hợp công nghệ AI để có thể hỗ trợ mọi người học tập giáo lý Phật giáo, không còn rào cản và giới hạn trong việc tiếp cận.',
    ],
  },
  {
    name: 'Đổng Văn Dũng',
    role: 'Đứng đầu nội dung dự án',
    avatar: '/dong-van-dung.jpg',
    bio: [
      'Là một người bình thường, may mắn có duyên được biết đến đạo Phật và dần nhận ra đây là con đường chân thật, hướng đến sự hiểu biết và chấm dứt khổ đau.',
      'Với mong muốn giúp mọi người tiếp cận chánh pháp dễ dàng, thuận lợi và sâu sắc hơn, đội ngũ ứng dụng AI vào việc học và tìm hiểu kinh điển.',
      'Trong quá trình thực hành, luôn mong được lắng nghe và học hỏi thêm từ tất cả mọi người.',
    ],
  },
]

const operationSupportTeam: TeamMember[] = [
  {
    name: 'Skill-Wanderer',
    role: 'Đội ngũ hỗ trợ vận hành',
    avatar: '/skill-wanderer.svg',
    bio: [
      'Được sáng lập bởi Nguyễn Hồng Quân, Skill-Wanderer định hướng phát triển theo mô hình doanh nghiệp xã hội phi lợi nhuận, lấy giá trị cộng đồng và giáo dục bền vững làm trọng tâm. Đơn vị vận hành theo hướng tạo doanh thu từ các đối tác công nghệ để tái đầu tư vào các hoạt động giáo dục phi lợi nhuận.',
    ],
  },
]

const projectRepositories: ProjectRepository[] = [
  {
    name: 'skill-wanderer/chanhdao-fe',
    role: 'Frontend (Nuxt)',
    href: 'https://github.com/skill-wanderer/chanhdao-fe',
  },
  {
    name: 'skill-wanderer/chanhdao-be',
    role: 'Backend API',
    href: 'https://github.com/skill-wanderer/chanhdao-be',
  },
  {
    name: 'skill-wanderer/keycloak-sso',
    role: 'SSO (Keycloak)',
    href: 'https://github.com/skill-wanderer/keycloak-sso',
  },
  {
    name: 'skill-wanderer/an-lac-vien-ai',
    role: 'AI Service',
    href: 'https://github.com/skill-wanderer/an-lac-vien-ai',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Mục đích của Chánh Đạo"
      subtitle="Giới thiệu dự án"
      description="Đây là nền tảng dành cho người Việt học Phật giáo, kết hợp công nghệ AI mới với việc tu học đạo Phật, vừa hỗ trợ tiếp cận nội dung vừa mở rộng khả năng truy cứu và tìm tòi."
    />

    <section class="section section-narrow pt-0">
      <div class="glass-card p-8 md:p-10">
        <h2 class="text-2xl md:text-3xl font-bold font-serif gradient-text mb-4 text-center">AI được tích hợp để hỗ trợ tu học như thế nào?</h2>
        <div class="space-y-4 text-text-secondary leading-relaxed">
          <p>
            Dự án được định hướng dùng AI như một công cụ trợ duyên cho người Việt học Phật giáo. AI có thể hỗ trợ soạn thảo,
            cấu trúc lại bài học, gợi ý các cách trình bày dễ tiếp cận hơn và giúp đội ngũ cập nhật nội dung nhanh hơn.
          </p>
          <p>
            Với người học và các đồng hữu đang tìm hiểu giáo pháp, AI cũng được kỳ vọng hỗ trợ truy cứu nội dung, tìm lại chủ đề liên quan,
            mở rộng câu hỏi, đối chiếu các ý niệm và giúp quá trình tìm tòi diễn ra thuận tiện hơn.
          </p>
          <p>
            Song song với đó, nền tảng hướng đến việc phát triển nhiều hình thức học tập như video, slide, podcast đọc, quiz và các mô thức tương tác khác,
            để việc học không chỉ dừng ở đọc văn bản mà có thể hỗ trợ tu tập một cách toàn diện hơn.
          </p>
        </div>
      </div>
    </section>

    <section class="section section-narrow pt-0">
      <div class="glass-card p-8 md:p-10 border border-brand-primary/20">
        <div class="flex gap-4 items-start">
          <Icon name="mdi:shield-alert-outline" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div class="space-y-4">
            <h2 class="text-2xl font-bold font-serif gradient-text">Lưu ý về kiểm duyệt và độ chính xác</h2>
            <p class="text-text-secondary leading-relaxed">
              Chúng tôi kiểm duyệt nội dung nghiêm túc. Tuy vậy, vẫn có khả năng xuất hiện sai sót hoặc điểm chưa tương hợp,
              vì hiểu biết và cách diễn đạt về Phật học luôn cần được học hỏi và cập nhật liên tục.
            </p>
            <p class="text-text-secondary leading-relaxed">
              Bạn đọc nên kiểm chứng thêm từ các nguồn tin cậy và tự quán chiếu cẩn trọng trước khi áp dụng.
            </p>
            <blockquote class="rounded-2xl border border-brand-primary/25 bg-surface-bg-alt px-5 py-4 italic text-text-primary">
              "Đây chỉ là cánh tay chỉ mặt trăng, đừng chấp cánh tay mà hãy từ đó để nhìn mặt trăng."
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Why a Custom LMS -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold font-serif gradient-text mb-6 text-center">Tầm nhìn và hướng đi</h2>

      <div class="glass-card p-8 md:p-12 space-y-8">
        <!-- AI-Powered -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:robot-outline" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold font-serif mb-2">Nội dung được cập nhật nhanh hơn</h3>
            <p class="text-text-secondary leading-relaxed">
              Chúng tôi xây dựng theo hướng nội dung được quản lý minh bạch, dễ cập nhật và dễ mở rộng.
              AI được tích hợp để hỗ trợ biên soạn, chuẩn hóa cách trình bày và rút ngắn thời gian cập nhật,
              để đội ngũ có thể cải tiến nội dung liên tục mà không bị phụ thuộc vào quy trình phức tạp.
            </p>
          </div>
        </div>

        <!-- Playing to Our Strengths -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:code-braces" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold font-serif mb-2">Tập trung vào trải nghiệm người học</h3>
            <p class="text-text-secondary leading-relaxed">
              Mọi thay đổi giao diện và nội dung đều được ưu tiên theo nhu cầu học tập thực tế.
              Nền tảng được thiết kế để hỗ trợ đồng hữu truy cứu nội dung, tìm tòi sâu hơn và tiếp cận kiến thức theo cách rõ ràng, dễ theo dõi.
            </p>
          </div>
        </div>

        <!-- Modern & Open -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:open-source-initiative" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold font-serif mb-2">Mở, minh bạch và dễ tiếp cận</h3>
            <p class="text-text-secondary leading-relaxed">
              Chúng tôi theo đuổi hướng mã nguồn mở để cộng đồng có thể cùng xem xét, đóng góp
              và phát triển. Người học có thể truy cập nội dung miễn phí trên nhiều thiết bị và dần tiếp cận thêm các định dạng như video, slide, podcast đọc hay quiz.
            </p>
          </div>
        </div>

        <!-- Full Control -->
        <div class="flex gap-4 items-start">
          <Icon name="mdi:tune-vertical" class="text-brand-primary text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold font-serif mb-2">Cải tiến liên tục theo phản hồi</h3>
            <p class="text-text-secondary leading-relaxed">
              Dự án được xây dựng để dễ dàng tiếp nhận phản hồi và nâng cấp theo từng giai đoạn.
              Mục tiêu là giữ cho hệ thống nhẹ, dễ dùng và ngày càng hữu ích cho người học.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-narrow pt-0">
      <h2 class="text-3xl md:text-4xl font-bold font-serif gradient-text mb-6 text-center">Đội ngũ sáng lập</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <article
          v-for="member in founders"
          :key="member.name"
          class="glass-card p-6 md:p-8"
        >
          <div class="flex items-start gap-4 md:gap-5">
            <NuxtImg
              :src="member.avatar"
              :alt="`Ảnh đại diện của ${member.name}`"
              width="96"
              height="96"
              loading="lazy"
              class="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border border-brand-primary/25 bg-brand-primary/5"
            />
            <div class="space-y-1">
              <h3 class="text-xl font-bold font-serif">{{ member.name }}</h3>
              <p class="text-sm font-semibold uppercase tracking-wide text-brand-accent">{{ member.role }}</p>
            </div>
          </div>
          <div class="mt-5 space-y-3 text-text-secondary leading-relaxed">
            <p v-for="(paragraph, index) in member.bio" :key="`${member.name}-${index}`">
              {{ paragraph }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="section section-narrow pt-0">
      <h2 class="text-3xl md:text-4xl font-bold font-serif gradient-text mb-6 text-center">Đội ngũ hỗ trợ vận hành</h2>
      <div class="glass-card p-6 md:p-8 space-y-5">
        <article
          v-for="team in operationSupportTeam"
          :key="team.name"
          class="flex flex-col md:flex-row items-start gap-5"
        >
          <NuxtImg
            :src="team.avatar"
            :alt="`Ảnh đại diện của ${team.name}`"
            width="96"
            height="96"
            loading="lazy"
            class="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border border-brand-primary/25 bg-brand-primary/5"
          />
          <div class="flex-1 space-y-3">
            <div>
              <h3 class="text-xl font-bold font-serif">{{ team.name }}</h3>
              <p class="text-sm font-semibold uppercase tracking-wide text-brand-accent">{{ team.role }}</p>
            </div>
            <p
              v-for="(paragraph, index) in team.bio"
              :key="`${team.name}-${index}`"
              class="text-text-secondary leading-relaxed"
            >
              {{ paragraph }}
            </p>
            <a
              href="https://skill-wanderer.com"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 font-semibold"
            >
              Trang web: skill-wanderer.com
              <Icon name="mdi:open-in-new" />
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- Open Source CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:source-repository" class="text-brand-primary text-4xl mb-4" />
        <h2 class="text-2xl font-bold font-serif gradient-text mb-4">Hệ sinh thái mã nguồn mở</h2>
        <p class="text-text-secondary mb-6 leading-relaxed">
          Dự án được triển khai theo mô hình microservice. Bạn có thể theo dõi quá trình phát triển, đóng góp ý kiến và gửi pull request tại các kho mã nguồn bên dưới.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
          <a
            v-for="repo in projectRepositories"
            :key="repo.name"
            :href="repo.href"
            target="_blank"
            rel="noopener"
            class="rounded-2xl border border-brand-primary/20 bg-white/50 px-5 py-4 transition-colors duration-300 hover:border-brand-primary/45"
          >
            <p class="text-xs uppercase tracking-wide text-text-muted">{{ repo.role }}</p>
            <p class="font-semibold text-text-primary mt-1 break-all">{{ repo.name }}</p>
          </a>
        </div>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="https://github.com/skill-wanderer" target="_blank" rel="noopener" class="btn btn-primary">
            Xem toàn bộ tổ chức <Icon name="mdi:open-in-new" />
          </a>
          <NuxtLink to="/phap-quyen" class="btn btn-outline">
            Xem pháp quyển <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>