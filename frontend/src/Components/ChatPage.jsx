import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import routes from '../hooks/routes';
import { fetchChannelsList } from '../slices/channelsSlice';

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
    <div className="container h-100 my-4 overflow-hidden rounded shadow" />
  );
};

export default ChatPage;
