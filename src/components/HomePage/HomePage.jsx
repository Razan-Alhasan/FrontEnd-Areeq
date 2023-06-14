import React, { useState } from 'react';
import HeaderImg from './HeaderImg/HeaderImg';
import TopRate from './TopRate/TopRate';
import ShopBySeller from './ShopBySeller/ShopBySeller';
import Category from './ShopByCategory/ShopByCategory';
import './HomePage.css';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const HomePage = () => {
    const [messages, setMessages] = useState([]);
    const handleNewUserMessage = (newMessage) => {
        addUserMessage(newMessage);
        setMessages([...messages, { author: 'user', message: newMessage }]);
        const response = 'Thank you for your message! An admin will get back to you shortly.';
        addResponseMessage(response);
        setMessages([...messages, { author: 'admin', message: response }]); s([...messages, { author: 'admin', message: response }]);
    };
    const toggleChat = () => {
        setChatOpen((prevOpen) => !prevOpen);
    };

    return (
        <div>
            <HeaderImg />
            <TopRate />
            <div className="chat" onClick={ toggleChat }>
                {/* { isChatOpen && ( */}
                    <div className="chat-widget">
                        <Widget
                            handleNewUserMessage={ handleNewUserMessage }
                            title="Support Chat"
                            subtitle="Ask your questions here"
                        />
                    </div>
                {/* ) } */}
            </div>
            <Category />
            <ShopBySeller />
        </div>
    );
};


export default HomePage;
