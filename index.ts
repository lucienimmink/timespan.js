import translations from './translations.ts';

function leftPad0(n: number) {
  if (n === 0) {
    return '00';
  }
  return (n < 10 ? '0' : '') + n;
}
function getDays(days: number, locale: string) {
  if (days) {
    // @ts-ignore
    if (days === 1) return `${days} ${translations[locale].day}`;
    // @ts-ignore
    return `${days} ${translations[locale].days}`;
  }
  return '';
}

export default function timeSpan(
  mseconds: number,
  humanize = false,
  locale = 'en-GB',
) {
  if (!mseconds) return '';
  const seconds = mseconds / 1000;
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor((seconds / 3600) % 24);
  const minutes = Math.floor((seconds % 3600) / 60);
  const value = [];
  if (humanize) {
    value.push(getDays(days, locale));
    if (hours) {
      // @ts-ignore
      value.push(`${hours} ${translations[locale].hours || 'hrs'}`);
    }
    if (minutes) {
      // @ts-ignore
      value.push(`${minutes} ${translations[locale].minutes || 'min'}`);
    }
    return value.join(' ');
  }
  if (hours) {
    value.push(leftPad0(hours));
  }
  value.push(leftPad0(minutes));
  value.push(leftPad0(Math.floor(seconds % 60)));
  if (days) {
    return `${getDays(days, locale)}${value.join(':')}`;
  }
  return value.join(':');
}
