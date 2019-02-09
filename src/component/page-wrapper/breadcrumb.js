import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

class StrengtheningBreadcrumb extends React.PureComponent {
  getBreadcrumbItem(datas) {
    return datas.map(element => (
      <Breadcrumb.Item key={element.key}>
        {
          element.link
            ? <Link to={element.link}>{element.text}</Link>
            : element.text
        }
      </Breadcrumb.Item>
    ));
  }

  render() {
    const { routeData } = this.props;
    return (
      <React.Fragment>
        {
          routeData.length !== 0 &&
          <React.Fragment>
            <Breadcrumb>
              {this.getBreadcrumbItem(routeData)}
            </Breadcrumb>
            <h2 style={styles.text}>{routeData[routeData.length-1].text}</h2>
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

const styles = {
  text: {
    marginTop: 10
  }
};

StrengtheningBreadcrumb.propTypes = {
  routeData: PropTypes.array.isRequired
};

StrengtheningBreadcrumb.defaultProps = {
  routeData: []
};

export default StrengtheningBreadcrumb;
