import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import routes from '../hooks/routes';
import { fetchChannelsList } from '../slices/channelsSlice';
import ChannelsSection from './ChannelsSection';
import MessagesSection from './MessagesSections';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

const ChatPage = () => {
  const { channels, currentChannelId } = useSelector((state) => state.chatChannels);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChannels = async () => {
      const { data } = await axios.get(routes.usersPath(), { headers: getAuthHeader() });
      dispatch(fetchChannelsList(data));
      console.log(data);
    };

    fetchChannels();
  }, []);
  console.log(channels, currentChannelId);

  return (
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
  );
};

export default ChatPage;
