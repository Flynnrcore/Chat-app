import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routes from '../hooks/routes';
import ChannelsSection from './ChannelsSection.jsx';
import MessagesSection from './MessagesSections.jsx';
import Modal from './modals/Modal.jsx';
import { useAuth } from '../hooks/index.jsx';
import { actions as ChannelsActions } from '../slices/channelsSlice.jsx';

const getAuthHeader = () => {
  const userToken = JSON.parse(localStorage.getItem('user'));

  if (userToken) {
    return { Authorization: `Bearer ${userToken}` };
  }

  return {};
};

const ChatPage = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(routes.usersPath(), { headers: getAuthHeader() });
        dispatch(ChannelsActions.setInitialState(data));
      } catch (error) {
        if (!error.isAxiosError) {
          throw new Error(t('errors.unknown'));
          // return;
        }
        if (error.response?.status === 401) {
          navigate(routes.loginPagePath());
        } else {
          throw new Error(t('errors.network'));
        }
      }
    };

    fetchData();
  }, [dispatch, auth, navigate, t]);

  return (
    <>
      <Modal />
      <div className="container h-100 my-4 overflow-hidden rounded shadow">
        <div className="row h-100 bg-white flex-md-row">
          <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
            <ChannelsSection />
          </div>
          <div className="col p-0 h-100">
            <MessagesSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
