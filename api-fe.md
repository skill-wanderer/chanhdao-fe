# Thiện Thư API — Tài liệu tích hợp Frontend

> Base URL mặc định (local): `http://localhost:8000`  
> Tất cả request/response đều dùng `Content-Type: application/json`.  
> Giao diện Swagger tương tác: `{BASE_URL}/docs`

---

## Mục lục

1. [POST /api/chat](#1-post-apichat)
2. [GET /api/domains](#2-get-apidomains)
3. [GET /health](#3-get-health)
4. [Xử lý lỗi](#4-xử-lý-lỗi)
5. [Ví dụ tích hợp JavaScript / TypeScript](#5-ví-dụ-tích-hợp-javascript--typescript)

---

## 1. `POST /api/chat`

Gửi câu hỏi cho Thiện Thư. Trả về câu trả lời từ kho tư liệu Phật giáo cùng danh sách nguồn dẫn chiếu.

### Request

```
POST /api/chat
Content-Type: application/json
```

#### Body schema

```jsonc
{
  "question": "string",          // BẮT BUỘC — câu hỏi, 1–2000 ký tự
  "personality": "thien_thu",    // tùy chọn — hiện chỉ có "thien_thu" (mặc định)
  "domain": "string",            // tùy chọn — lọc theo 1 domain
  "domains": ["string"],         // tùy chọn — lọc theo nhiều domain (hợp nhất với domain)
  "url": "string",               // tùy chọn — lọc theo URL prefix
  "history": [                   // tùy chọn — lịch sử hội thoại, tối đa 50 lượt
    { "role": "user",      "content": "string" },
    { "role": "assistant", "content": "string" }
  ]
}
```

#### Mô tả các trường

| Trường        | Kiểu              | Bắt buộc | Giới hạn               | Mô tả |
|---------------|-------------------|----------|------------------------|-------|
| `question`    | `string`          | ✅        | 1 – 2000 ký tự         | Câu hỏi của người dùng |
| `personality` | `"thien_thu"`     | ❌        | —                      | Mặc định là `"thien_thu"` khi bỏ trống |
| `domain`      | `string`          | ❌        | —                      | Lọc kết quả theo 1 domain (vd: `"anlacvien.com"`) |
| `domains`     | `string[]`        | ❌        | —                      | Lọc theo nhiều domain — kết quả khớp bất kỳ domain nào |
| `url`         | `string`          | ❌        | —                      | Lọc theo URL prefix (vd: `"https://anlacvien.com/khoa-hoc"`) |
| `history`     | `ChatMessage[]`   | ❌        | Tối đa 50 phần tử      | Lịch sử hội thoại, sắp xếp từ cũ đến mới |

> **Lưu ý:** `domain` và `domains` có thể dùng đồng thời — server sẽ gộp thành một danh sách duy nhất.

#### `ChatMessage` schema

```jsonc
{
  "role": "user" | "assistant",  // bắt buộc
  "content": "string"            // bắt buộc, 1–4000 ký tự
}
```

---

### Response `200 OK`

```jsonc
{
  "answer": "string",    // câu trả lời do LLM sinh ra
  "sources": [
    {
      "title": "string",        // tiêu đề trang nguồn
      "url": "string",          // URL đầy đủ của trang nguồn
      "chunk_index": 0,         // chỉ số đoạn trong trang (bắt đầu từ 0)
      "total_chunks": 4,        // tổng số đoạn của trang đó
      "score": 0.9134           // độ tương đồng vector (0–1, càng cao càng liên quan)
    }
  ]
}
```

> Khi không tìm thấy thông tin phù hợp, `sources` là `[]` và `answer` chứa thông báo tiếng Việt từ Thiện Thư.

---

### Ví dụ request / response

#### Câu hỏi đơn giản

**Request:**
```json
{
  "question": "Tứ diệu đế là gì?"
}
```

**Response:**
```json
{
  "answer": "Tứ diệu đế (Cattari Ariyasaccani) là bốn sự thật cao quý trong giáo lý Phật giáo: Khổ đế, Tập đế, Diệt đế và Đạo đế...",
  "sources": [
    {
      "title": "Tứ Diệu Đế — Nền tảng giáo lý",
      "url": "https://anlacvien.com/tu-dieu-de",
      "chunk_index": 0,
      "total_chunks": 4,
      "score": 0.9134
    }
  ]
}
```

#### Hội thoại nhiều lượt

**Request:**
```json
{
  "question": "Vậy Bát chánh đạo liên quan thế nào?",
  "personality": "thien_thu",
  "history": [
    { "role": "user",      "content": "Tứ diệu đế là gì?" },
    { "role": "assistant", "content": "Tứ diệu đế gồm Khổ, Tập, Diệt, Đạo..." }
  ]
}
```

#### Lọc theo domain

**Request:**
```json
{
  "question": "Thiền định chỉ và quán khác nhau thế nào?",
  "domains": ["anlacvien.com", "docs.anlacvien.com"]
}
```

---

## 2. `GET /api/domains`

Lấy danh sách tất cả domain có trong kho tư liệu. Dùng để populate dropdown lọc nguồn cho người dùng.

### Response `200 OK`

```json
{
  "domains": ["anlacvien.com", "docs.anlacvien.com"]
}
```

---

## 3. `GET /health`

Kiểm tra trạng thái hoạt động của server và kết nối Qdrant. Dùng cho việc hiển thị trạng thái kết nối trên UI.

### Response `200 OK`

```jsonc
{
  "status": "ok",            // "ok" hoặc "degraded" (khi Qdrant mất kết nối)
  "provider": "gemini",      // LLM provider đang dùng: "gemini" hoặc "selfhost"
  "qdrant_connected": true   // true/false
}
```

---

## 4. Xử lý lỗi

| HTTP Status | Nguyên nhân | Xử lý đề xuất |
|-------------|-------------|----------------|
| `422 Unprocessable Entity` | Request body không hợp lệ (thiếu `question`, vượt giới hạn ký tự…) | Validate phía FE trước khi gửi |
| `502 Bad Gateway` | LLM hoặc Qdrant không phản hồi | Hiển thị thông báo lỗi, cho phép retry |
| `500 Internal Server Error` | Lỗi server không mong muốn | Log lỗi, hiển thị thông báo generic |

**Response body khi lỗi (FastAPI mặc định):**
```json
{
  "detail": "mô tả lỗi"
}
```

---

## 5. Ví dụ tích hợp JavaScript / TypeScript

### Kiểu TypeScript

```typescript
type Role = "user" | "assistant";

interface ChatMessage {
  role: Role;
  content: string;
}

interface ChatRequest {
  question: string;
  personality?: "thien_thu";
  domain?: string;
  domains?: string[];
  url?: string;
  history?: ChatMessage[];
}

interface Source {
  title: string;
  url: string;
  chunk_index: number;
  total_chunks: number;
  score: number;
}

interface ChatResponse {
  answer: string;
  sources: Source[];
}
```

### Hàm gọi API

```typescript
const BASE_URL = "http://localhost:8000";

async function askThienThu(
  question: string,
  history: ChatMessage[] = []
): Promise<ChatResponse> {
  const res = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, history }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail ?? `HTTP ${res.status}`);
  }

  return res.json() as Promise<ChatResponse>;
}
```

### Ví dụ chat UI với lịch sử hội thoại

```typescript
const history: ChatMessage[] = [];

async function sendMessage(userInput: string) {
  // Thêm câu hỏi mới vào lịch sử trước khi gửi
  history.push({ role: "user", content: userInput });

  const response = await askThienThu(userInput, history.slice(0, -1));

  // Thêm câu trả lời vào lịch sử để dùng cho lượt sau
  history.push({ role: "assistant", content: response.answer });

  return response;
}
```

### Lấy danh sách domain

```typescript
async function getDomains(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/api/domains`);
  const data = await res.json();
  return data.domains;
}
```

### Kiểm tra health

```typescript
async function checkHealth() {
  const res = await fetch(`${BASE_URL}/health`);
  return res.json(); // { status, provider, qdrant_connected }
}
```
