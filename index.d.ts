declare module '@chatwoot/react-native-widget' {
  import React from 'react';

  export interface ChatWootWidgetProps {
    websiteToken: string;
    locale?: string;
    baseUrl: string;
    colorScheme?: 'light' | 'auto' | 'dark';
    closeModal: () => void;
    isModalVisible: boolean;
    user?: {
      identifier?: string;
      name?: string;
      avatar_url?: string;
      email?: string;
      identifier_hash?: string;
    };
    // This can actually be any object
    customAttributes?: Record<string, unknown>;
    /** Full URL to a help center article to open on widget load */
    articleUrl?: string;
    /** Article slug (e.g., "1677693021-how-to-use-webhooks") - requires portalSlug */
    articleSlug?: string;
    /** Help center portal slug (e.g., "user-guide") - required with articleSlug */
    portalSlug?: string;
  }

  class ChatWootWidget extends React.Component<ChatWootWidgetProps, any> {}
  export default ChatWootWidget;
}
