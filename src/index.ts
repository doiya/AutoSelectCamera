import { Camera } from './Camera';
import { FaceTracker } from './FaceTracker';

const video = document.getElementById('video') as HTMLVideoElement;

const camera: Camera = new Camera();
camera.play(video);

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;

const faceTracker: FaceTracker = new FaceTracker;
faceTracker.on(video, canvas);

