import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getTimeFromNow = (date: string | number | dayjs.Dayjs | Date | null | undefined) => {
  return dayjs(date).fromNow();
};

export const formatDate = (date: string | number | dayjs.Dayjs | Date | null | undefined) => {
  return dayjs(date).format('DD/MM/YYYY');
};

export const formatDateL = (date: string | number | dayjs.Dayjs | Date | null | undefined) => {
  return dayjs(date).format('L');
};