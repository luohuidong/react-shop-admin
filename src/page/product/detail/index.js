import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';

import { requestProductDetail } from 'service/product';

class ProductDetail extends React.PureComponent {
  componentDidMount() {
    document.title = '商品详情';
    this.getProductDataById();
  }

  getProductDataById = async () => {
    const { params } = this.props.match;

    if (params && params.productId) {
      try {
        const data = await requestProductDetail(params.productId);
        this.setState({
          productData: data
        });
      } catch (error) {
        message.error(error || '获取商品详情失败');
      }
    }
  }

  render () {
    return (
      <div>
        <div>

        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default ProductDetail;
