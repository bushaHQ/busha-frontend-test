export function numberWithCommas(x: number | string) {
  if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  else return 0;
}
