import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './style.scss';
import { LocationContext } from 'util/context.js';
import Breadcrumb from './breadcrumb.js';

class PageWrapper extends React.Component {
  render() {
    const { routeData } = this.props;

    const childrenContainerClassName = classNames('children-container', {
      'show-background-color': this.props.showBackgroundColor
    });

    return (
      <div className={styles.container}>
        {
          routeData && routeData.length > 0 &&
          <div className='breadcrumb-container'>
            <Breadcrumb routeData={this.props.routeData} />
          </div>
        }
        <div className={childrenContainerClassName}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

PageWrapper.propTypes = {
  routeData: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
  showBackgroundColor: PropTypes.bool.isRequired,
};

PageWrapper.defaultProps = {
  showBackgroundColor: true,
};

PageWrapper.contextType = LocationContext;

export default PageWrapper;
