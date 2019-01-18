import { message } from 'antd';

import { GET_STATISTIC } from './actionTypes.js';
import { requestHomeStatistic } from 'service/statistic.js';

const saveData = data => ({
  type: GET_STATISTIC,
  statisticData: data
});

function getStatisticData() {
  return async dispatch => {
    try {
      const { orderCount, productCount, userCount } = await requestHomeStatistic();

      dispatch(saveData({
        orderCount, 
        productCount, 
        userCount
      }));
    } catch (error) {
      message.error(error);
    }
  };
}

export {
  saveData,
  getStatisticData
};
