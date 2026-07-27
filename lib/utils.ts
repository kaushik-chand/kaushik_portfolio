export function getCareerYearsTenths(startMonth: string, now = new Date()): string {
  const start = new Date(startMonth);
  if (Number.isNaN(start.getTime())) return "0.0";

  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  return (Math.max(0, months) * 0.1).toFixed(1);
}

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
