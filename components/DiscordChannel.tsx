'use client';
import { useEffect } from 'react';

type Props = {
  serverId: string;
  channelId: string;
  height?: string;
};

export default function DiscordChannel({ serverId, channelId, height = '600px' }: Props) {
  useEffect(() => {
    if (document.getElementById('widgetbot-script')) return;

    const s = document.createElement('script');
    s.id = 'widgetbot-script';
    s.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/html-embed';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="max-w-4xl w-full px-4 py-6">
      <div className="border rounded-2xl overflow-hidden shadow-md">
        {/* @ts-ignore */}
        <widgetbot
          server={serverId}
          channel={channelId}
          width="100%"
          height={height}
          hideChannelList
        ></widgetbot>
      </div>
    </div>
  );
}
