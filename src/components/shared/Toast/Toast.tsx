import { useState, useEffect } from "react";
import "./Toast.css"; // Import the CSS file

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000); // Auto-dismiss after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">
      <img src='/assets/images/close.svg'/>
      </button>
    </div>
  );
};

export default Toast;
