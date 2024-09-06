

const CommonDialog = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute  top-0 left-0 w-full h-full backdrop-blur-sm z-50">
            <div className="flex items-center justify-center mt-24">
                {children}
            </div>

        </div>

    );
}

export default CommonDialog;