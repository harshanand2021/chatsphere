import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockRooms, mockChatMessages, currentUser } from '../data/mockData';
import ScreenPlayer from '../components/ScreenPlayer';
import ChatPanel from '../components/ChatPanel';
import HostControls from '../components/HostControls';
import './styles/WatchRoom.css';

export default function WatchRoom() {
  const { roomId } = useParams();
  const room = useMemo(
    () => mockRooms.find((r) => r.id === roomId) || mockRooms[0],
    [roomId]
  );

  const isHost = room.hostId === currentUser.id;
  const [isPlaying, setIsPlaying] = useState(true);
  const [messages, setMessages] = useState(mockChatMessages);

  const handleSend = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        userId: currentUser.id,
        text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="watch-room-page">
      <div className="watch-room__topbar container">
        <Link to="/rooms" className="watch-room__back">← Leave Room</Link>
        <div className="watch-room__title-block">
          <h2>{room.title}</h2>
          <p>Hosted by {room.hostName} {room.code ? <span className="mono watch-room__code">CODE: {room.code}</span> : null}</p>
        </div>
      </div>

      <div className="watch-room__layout container">
        <div className="watch-room__screen-col">
          <ScreenPlayer
            room={room}
            isHost={isHost}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
          />
          {isHost ? <HostControls room={room} /> : null}
        </div>

        <ChatPanel messages={messages} onSend={handleSend} viewerCount={room.viewerCount || 1} />
      </div>
    </div>
  );
}