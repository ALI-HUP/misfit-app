'use client';
import { useEffect } from 'react';

// اضافه کردن این بخش به بالای فایل برای رفع ارور TS
declare global {
  namespace JSX {
    interface IntrinsicElements {
      widgetbot: any;
    }
  }
}

type Props = {
  serverId: string;
  channelId: string;
  height?: string; // مثل "600px"
};

export default function DiscordChannel({ serverId, channelId, height = '600px' }: Props) {
  useEffect(() => {
    // اگر اسکریپت از قبل اضافه شده، دوباره اضافه نکن
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
