"use client";

import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const ChatFacebookMess = () => {
  return (
    <FacebookProvider appId="1807381156437718" chatSupport>
        <CustomChat pageId="253281367877730" minimized={true}/>
      </FacebookProvider>
  )
}

export default ChatFacebookMess