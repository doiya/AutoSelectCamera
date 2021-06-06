import * as faceapi from 'face-api.js';

export class FaceTracker {

    public on(video: HTMLVideoElement, canvas: HTMLCanvasElement) {
        this.loadModel();
        this.detect(video, canvas);
    }

    

    private async loadModel() {
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('models/weights'),
            faceapi.nets.faceLandmark68TinyNet.loadFromUri('models/weights'),
          ]);
    }

    private async detect(video: HTMLVideoElement, canvas: HTMLCanvasElement) {
        async function detect() {
            requestAnimationFrame(detect);
          
            //  webカメラの映像から顔認識を行う
            const useTinyModel = true;
            const detection = await faceapi
              .detectSingleFace(
                video,
                new faceapi.TinyFaceDetectorOptions({
                inputSize: 160,
                })
              )
              .withFaceLandmarks(useTinyModel);
          
            if (!detection) {
              return;
            }
          
            // 認識データをリサイズ
            const resizedDetection = faceapi.resizeResults(detection, {
              width: video.width,
              height: video.height,
            });
          
            // ランドマークをキャンバスに描画
            canvas.getContext('2d')!.clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetection);
          
            // 以後使用するランドマーク座標
            const landmarks = resizedDetection.landmarks;
            const nose = landmarks.getNose()[3];
            const leftEye = landmarks.getLeftEye()[0];
            const rightEye = landmarks.getRightEye()[3];
            const jaw = landmarks.getJawOutline()[8];
            const leftMouth = landmarks.getMouth()[0];
            const rightMouth = landmarks.getMouth()[6];
            const leftOutline = landmarks.getJawOutline()[0];
            const rightOutline = landmarks.getJawOutline()[16];
          }
    }

}