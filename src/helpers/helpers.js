import * as moment from 'moment';
export const sortOrderFn = (a, b) => b.createdAt - a.createdAt;
export const convTime = time => {
  return moment(new Date(time)).format('HH:mm:ss');
};
