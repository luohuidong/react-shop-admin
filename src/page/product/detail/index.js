import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';

import { productRoute } from 'util/route';
import { requestProductDetail } from 'service/product';
import { requestCategory } from 'service/category';
import FormDetailCard from 'component/form-detail-card/';
import RichTextDisplay from 'component/rich-text-display/';
import PageWrapper from 'component/page-wrapper';

class ProductDetail extends React.PureComponent {
  state = {
    productData: {},
    levelOneCategory: {},
    levelTwoCategory: {}
  }

  componentDidMount() {
    document.title = '商品详情';
    this.getProductDataById();
  }

  async getProductDataById() {
    const { params } = this.props.match;

    if (params && params.productId) {
      try {
        const data = await requestProductDetail(params.productId);
        this.setState({ productData: data });

        if (data.parentCategoryId === 0) {
          this.getCategoryData('levelOneCategory', 0, data.categoryId);
        } else {
          this.getCategoryData('levelOneCategory', 0, data.parentCategoryId);
          this.getCategoryData('levelTwoCategory', data.parentCategoryId, data.categoryId);
        }
      } catch (error) {
        message.error(error || '获取商品详情失败');
      }
    }
  }

  /**
   * 获取分类信息
   * @param {string} key 'levelOneCategory' or 'levelTwoCategory'
   * @param {number} parentCategoryId 父级分类 id
   * @param {number} categoryId 分类 id
   */
  async getCategoryData(key, parentCategoryId, categoryId) {
    try {
      const datas = await requestCategory(parentCategoryId);

      const result = datas.find(element => element.id === categoryId);

      this.setState({
        [key]: result
      });
    } catch (error) {
      message.error('查询分类失败');
    }
  }

  /**
   * 获取分类显示文字
   * @param {object} levelOneCategory 一级分类数据
   * @param {object} levelTwoCategory 二级分类数据
   */
  getCategoryText(levelOneCategory, levelTwoCategory) {
    const levelOneName = levelOneCategory ? levelOneCategory.name : '';
    const levelTwoName = levelTwoCategory ? levelTwoCategory.name : '';

    let text = '无';

    if (levelOneName && levelTwoName) {
      text = `${levelOneName}-${levelTwoName}`;
    } else if (levelOneName && !levelTwoName) {
      text = levelOneName;
    }

    return text;
  }

  /**
   * 获取商品显示信息
   * @param {object} productData 商品信息
   * @param {object} levelOneCategory 一级品类信息
   * @param {object} levelTwoCategory 二级品类信息
   */
  getProductDetail(productData, levelOneCategory, levelTwoCategory) {
    const { name, price, subtitle, status, stock } = productData;

    const productDetail = [
      {
        title: '名称',
        text: name,
      },
      {
        title: '标题',
        text: subtitle,
      },
      {
        title: '商品分类',
        text: this.getCategoryText(levelOneCategory, levelTwoCategory)
      },
      {
        title: '价格',
        text: `￥${price | 0}`
      },
      {
        title: '上架状态',
        text: status === 1 ? '上架' : '下架'
      },
      {
        title: '库存',
        text: stock
      }
    ];

    return productDetail;
  }

  render() {
    const { productData, levelOneCategory, levelTwoCategory } = this.state;
    const productDetail = this.getProductDetail(productData, levelOneCategory, levelTwoCategory);

    const routeData = [{
      key: 'product',
      text: '商品'
    }, {
      key: productRoute.list,
      link: productRoute.list,
      text: '商品列表'
    }, {
      key: productRoute.detail,
      text: '商品详情'
    }];

    return (
      <PageWrapper routeData={routeData}>
        <FormDetailCard
          title='商品基本信息'
          data={productDetail}
        />
        <div style={{ marginTop: 20 }}>
          <FormDetailCard title='商品基本信息' showBottom={false}>
            <RichTextDisplay data={productData.detail} />
          </FormDetailCard>
        </div>
      </PageWrapper>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default ProductDetail;
