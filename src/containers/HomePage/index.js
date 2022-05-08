import { useInjectReducer } from 'utils/reduxStore/injectReducer';
import { PAGE_KEY } from './constants';
import { rootStateSelector } from './selector';
import homeSlice from './reducer';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// App.js
function Home() {
  const { actions, reducer } = homeSlice;
  useInjectReducer({ key: PAGE_KEY, reducer });

  const dispatch = useDispatch();
  const homePage = useSelector(rootStateSelector());

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <FormattedMessage id="myMessage"></FormattedMessage>
        <div>{JSON.stringify(homePage)}</div>
      </main>
    </>
  );
}

export default Home;
