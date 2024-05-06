import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react"; // import useCallback
import ReactCrop from "react-image-crop";
const FoodCamera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  // create a handleCapture function
  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const handleRetake = () => {
    setImgSrc(null);
  };

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={600} width={600} ref={webcamRef} />
      )}
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={handleRetake}>Retake photo</button>
        ) : (
          <button onClick={handleCapture}>Capture photo</button>
        )}
        {/*<input type="file" accept="image/*" capture="environment" />*/}

        {/*<ReactCrop crop={crop} onChange={(c) => setCrop(c)}>*/}
        {/*  <img src={imgSrc} alt={"trial"} />*/}
        {/*</ReactCrop>*/}
      </div>
    </div>
  );
};
export default FoodCamera;
