/**
 *
 * Asynchronously loads the component for AbcPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
