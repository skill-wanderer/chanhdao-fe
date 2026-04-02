# Chánh Đạo Frontend

Frontend Nuxt của Chánh Đạo, nền tảng học tập mở được triển khai tại https://chanhdao.vn.

Đây là dự án phi lợi nhuận, được phát triển với mục tiêu mở rộng cơ hội học tập và tiếp cận tri thức cho cộng đồng. Dự án được phối hợp triển khai cùng Skill-Wanderer tại https://skill-wanderer.com.

## Tổng quan

Repository này chứa phần frontend cho website Chánh Đạo. Ứng dụng tập trung vào trải nghiệm học tập đơn giản, dễ truy cập, tối ưu SEO, và hỗ trợ nội dung khóa học, lộ trình học, bài học, tìm kiếm, cùng một số luồng tích hợp phục vụ người học.

## Website và liên kết

- Website chính thức: https://chanhdao.vn
- Đơn vị đồng hành: https://skill-wanderer.com

## Kiến trúc kho mã nguồn (microservice)

Dự án Chánh Đạo được tổ chức theo nhiều repository tách biệt theo từng thành phần chức năng:

- Frontend (Nuxt): https://github.com/skill-wanderer/chanhdao-fe
- Backend API: https://github.com/skill-wanderer/chanhdao-be
- Xác thực SSO (Keycloak): https://github.com/skill-wanderer/keycloak-sso
- AI service: https://github.com/skill-wanderer/an-lac-vien-ai

## Công nghệ sử dụng

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Nuxt Sitemap
- Nuxt Robots
- Schema.org cho SEO

## Tính năng chính

- Trang giới thiệu và các trang nội dung tĩnh
- Danh sách khóa học và chi tiết khóa học
- Lộ trình học và bài học động
- Tìm kiếm nội dung
- Tích hợp SEO, sitemap, robots và schema markup
- Hỗ trợ xác thực thông qua Keycloak

## Cài đặt và chạy local

```bash
npm install
npm run dev
```

Mặc định ứng dụng chạy bằng Nuxt dev server.

## Build và preview

```bash
npm run build
npm run preview
```

`npm run build` hiện tạo static output đã prerender toàn bộ các trang nội dung để triển khai lên Cloudflare Pages.

Output tĩnh được sinh tại `dist/`.

Nếu cần chạy generate thủ công:

```bash
npm run generate
```

Nếu cần build SSR để kiểm tra hoặc chạy môi trường server:

```bash
npm run build:ssr
```

## Mục tiêu dự án

- Xây dựng một không gian học tập mở, dễ tiếp cận và hữu ích cho cộng đồng.
- Cung cấp trải nghiệm học tập miễn phí trên web tại tên miền chanhdao.vn.
- Duy trì một sản phẩm phi lợi nhuận có thể phát triển bền vững với sự đồng hành của Skill-Wanderer.
- Giữ kiến trúc frontend rõ ràng, thân thiện với SEO, và dễ mở rộng nội dung trong tương lai.

## Đóng góp

Nếu bạn muốn đóng góp, hãy bắt đầu bằng việc tạo issue hoặc pull request trong repository này. Mọi thay đổi nên giữ đúng tính chất phi lợi nhuận, dễ truy cập, và phù hợp với định hướng nội dung của dự án.

## Giấy phép

Apache-2.0
