// format numbers to comma separated
export function formatNumber(num: number) {
  if (num)
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") || 0.0;
}

// server base url
export const baseUrl = "http://localhost:3090";
