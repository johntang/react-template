import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { nanoid } from '@reduxjs/toolkit';

import { useInjectReducer } from 'utils/reduxStore/injectReducer';
import { PAGE_KEY } from './constants';
import { rootStateSelector } from './selector';
import homeSlice from './reducer';

// App.js
function Home() {
  const { actions, reducer } = homeSlice;
  useInjectReducer({ key: PAGE_KEY, reducer });

  const dispatch = useDispatch();
  const homePage = useSelector(rootStateSelector());

  return (
    <div>
      <FormattedMessage id="myMessage" />
      <div>{JSON.stringify(homePage)}</div>
      <button
        onClick={() => {
          dispatch(actions.createPost({ name: 123, id: nanoid() }));
        }}
        type="button"
      >
        click
      </button>
      <ButtonWithHoc a="123" />
    </div>
  );
}

export default Home;

function Button(props) {
  console.log(props);
  return <button type="button">hello</button>;
}

const withHoc = (WrapperComponent) =>
  function (remaining) {
    return <WrapperComponent {...remaining} history={1234} />;
  };

const ButtonWithHoc = withHoc(Button);
