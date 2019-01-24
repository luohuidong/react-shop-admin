import React from 'react';
import PropTypes from 'prop-types';
import { Cascader, message } from 'antd';

import { requestCategory } from 'service/category';

class CategoryCascader extends React.PureComponent {
  state = {
    options: []
  }

  componentDidMount() {
    this.getLevelOneCategory();
  }

  /**
   * 获取品类子节点
   * @param {number} parentId 当前父节点 id
   * @param {boolean} isLeaf 子节点是否还有下一级
   */
  getCategory = async (parentId, isLeaf) => {
    try {
      const result = await requestCategory(parentId);

      let data = [];

      if (result instanceof Array) {
        data = result.map(element => ({
          value: element.id,
          label: element.name,
          isLeaf: isLeaf,
        }));
      }

      return data;
    } catch (error) {
      message.error(error);
    }
  }

  getLevelOneCategory = async () => {
    const data = await this.getCategory(0, false);
    this.setState({ options: data });
  }

  onChange = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    this.getCategory(targetOption.value, true).then(data => {
      targetOption.loading = false;
      targetOption.children = data;

      this.setState({
        options: [...this.state.options],
      });
    });
  }

  render() {
    return (
      <Cascader
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        placeholder=''
      />
    );
  }
}

CategoryCascader.propTypes = {
  onChange: PropTypes.func,
};

export default CategoryCascader;
