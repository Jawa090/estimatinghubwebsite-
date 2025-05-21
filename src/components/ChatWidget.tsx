
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      text: 'Hello! Welcome to ConstructionHub. How can I help you today?',
      time: new Date(),
    },
  ]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = {
      sender: 'user',
      text: message.trim(),
      time: new Date(),
    };
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');

    // Simulate bot reply after delay
    setTimeout(() => {
      const botReply = {
        sender: 'bot',
        text: 'Thanks for your message! One of our representatives will get back to you shortly.',
        time: new Date(),
      };
      setChatHistory(prevChatHistory => [...prevChatHistory, botReply]);
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-construction-blue text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all ${
          isOpen ? 'rotate-90' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 w-[350px] bg-white rounded-lg shadow-2xl z-40 overflow-hidden transition-all transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat header */}
        <div className="bg-construction-blue text-white p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
              <MessageCircle size={18} className="text-construction-blue" />
            </div>
            <div>
              <h3 className="font-medium">Live Support</h3>
              <p className="text-xs opacity-80">We typically reply within a few minutes</p>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`mb-4 flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  chat.sender === 'user'
                    ? 'bg-construction-blue text-white'
                    : 'bg-white border border-gray-200 text-gray-700'
                }`}
              >
                <p className="text-sm">{chat.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {chat.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" className="bg-construction-blue hover:bg-blue-700">
              <Send size={16} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
