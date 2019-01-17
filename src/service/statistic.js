import { get } from 'util/request';

function requestHomeStatistic() {
  const url = '/manage/statistic/base_count.do';
  return get(url);
}

export {
  requestHomeStatistic
};
