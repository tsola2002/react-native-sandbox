export function money(value) {
  return `$${Number(value).toLocaleString('en-US')}`;
}

export function formatKm(value) {
  return `${Number(value).toLocaleString('en-US')} km`;
}

export function initials(name) {
  return String(name)
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}
