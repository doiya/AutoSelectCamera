export class Camera {

    public async play(video: HTMLVideoElement) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 1280, height: 720 },
                audio: false,
            });

            video.srcObject = stream;
            await video.play();
        } catch (err) {
            console.log(err);
        }
    }

}