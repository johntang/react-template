/*
 * AbcPage Messages
 *
 * This contains all the text for the AbcPage container.
 */

import { defineMessages } from 'react-intl';
import { /* objToUrlParam, */ exportLocale } from '../../utils/functions';

export const scope = 'app.containers.AbcPage';

const messages = {
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AbcPage container!',
  },
};

export const abcPageEn = exportLocale(messages, 'en');
export const abcPageZhHant = exportLocale(messages, 'zh-hant');
export const abcPageZhHans = exportLocale(messages, 'zh-hans');

export default defineMessages(messages);
