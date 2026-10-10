const MATERIAL_BASE = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/kinh-vo-luong-tho'

export function courseMaterialUrl(file = 'Bìa sách.png'): string {
  return `${MATERIAL_BASE}/${encodeURIComponent(file)}`
}
