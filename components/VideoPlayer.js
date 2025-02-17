function VideoPlayer({ videoId, onClose }) {
    return (
        <div 
            data-name="video-modal"
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
            <div className="relative w-full max-w-4xl">
                <button 
                    data-name="close-button"
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300"
                >
                    <i className="fas fa-times text-2xl"></i>
                </button>
                <div className="aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
