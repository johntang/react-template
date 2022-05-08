/**
 *
 *
AbcPage
*
 */
import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/reduxStore/injectReducer';
import AbcPageSlice from './reducer';
import { rootStateSelector } from './selectors';
import { PAGE_KEY } from './constants';

export function AbcPage() {
  const { actions, reducer } = AbcPageSlice;
  useInjectReducer({ key: PAGE_KEY, reducer });
  const dispatch = useDispatch();
  const AbcPage = useSelector(rootStateSelector());
  return (
    <React.Fragment>
      <Helmet>
        <title>AbcPage</title>
        <meta name="description" content="Description of AbcPage" />
      </Helmet>
      <div>Hello World.</div>
    </React.Fragment>
  );
}
AbcPage.propTypes = {};
export default memo(AbcPage);
