const MATERIAL_BASE = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/an-quang-dai-su-gia-ngon-luc'

export function courseMaterialUrl(file = 'Ảnh bìa.jpg'): string {
  return `${MATERIAL_BASE}/${encodeURIComponent(file)}`
}

