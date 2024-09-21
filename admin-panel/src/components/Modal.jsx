
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg z-10">
        <button onClick={onClose} className="text-red-500 float-right">Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;