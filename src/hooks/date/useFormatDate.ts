export const DATE_TOKENS = {
  YYYY: (d: Date) => String(d.getFullYear()),
  MM:   (d: Date) => String(d.getMonth() + 1).padStart(2, '0'),
  M:   (d: Date) => String(d.getMonth() + 1),
  DD:   (d: Date) => String(d.getDate()).padStart(2, '0'),
  D:   (d: Date) => String(d.getDate()),
  ddd:  (d: Date) => ['일','월','화','수','목','금','토'][d.getDay()],
} as const;

export const useFormatDate = (
  date: Date = new Date,
  format: string = 'YYYY년 MM월 DD일'
): string => {
  let result = format;

  (Object.keys(DATE_TOKENS) as Array<keyof typeof DATE_TOKENS>).forEach(
    (token) => {
      result = result.replaceAll(token, DATE_TOKENS[token](date));
    }
  );

  return result;
};
