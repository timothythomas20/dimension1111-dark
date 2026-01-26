import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({ message = 'Hello! I would like to know more about Dimension 11:11.' }: WhatsAppButtonProps) {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918580731659?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group"
      style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
    </button>
  );
}
