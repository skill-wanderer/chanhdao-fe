const MATERIAL_BASE = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/kinh-a-di-da'

/** Build a raw URL for an asset in the Kinh A Di Đà material folder. */
export function materialUrl(folder: string, file = 'Ảnh_bìa.png'): string {
  return `${MATERIAL_BASE}/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`
}

export function courseMaterialUrl(file = 'Ảnh_bìa.jpg'): string {
  return `${MATERIAL_BASE}/${encodeURIComponent(file)}`
}
