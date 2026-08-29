const MATERIAL_BASE = 'https://raw.githubusercontent.com/skill-wanderer/chanhdao-material/main/phap-mon-tinh-do'

/**
 * Build a raw URL for an asset in the companion chanhdao-material repo.
 *
 * Folder names there mirror the original lesson titles (accents, spaces and
 * all), so both segments are URL-encoded.
 */
export function materialUrl(folder: string, file = 'ảnh bìa.png'): string {
  return `${MATERIAL_BASE}/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`
}
