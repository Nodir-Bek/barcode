import React, { useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import { Wrapper } from './style';
import Button from '@/components/button';

const User: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [result, setResult] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const codeReader = new BrowserMultiFormatReader();

  const startCamera = async () => {
    try {
      const videoInputDevices = await codeReader.listVideoInputDevices();
      if (videoInputDevices.length > 0 && videoRef.current) {
        codeReader.decodeFromVideoDevice(videoInputDevices[0].deviceId, videoRef.current, (result, err) => {
          if (result) {
            setResult(result?.getText());
            stopCamera();
          }
          if (err && !(err instanceof Error)) {
            console.error(err);
          }
        });
        setIsScanning(true);
      } else {
        setResult('No camera found.');
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setResult('Error accessing camera.');
    }
  };

  const stopCamera = () => {
    codeReader.reset();
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);

  };

  return (
    <Wrapper className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center container bg-white rounded-xl text-black p-6 max-w-max gap-6'>
        <h1>User Dashboard</h1>
        <video ref={videoRef} className='w-full bg-black max-w-[400px] max-h-[300px]' autoPlay style={{ width: '100%', maxWidth: '400px' }}></video>
        <p className='text-2xl'>Natija :{result ?? ""}</p>
        <div className="flex justify-center items-center w-full h-auto gap-4">
          {isScanning ? (
            <Button onClick={stopCamera} btnType='danger' >Stop Camera</Button>
          ) : (
            <Button onClick={startCamera}>Skanerlash</Button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default User;