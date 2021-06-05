export class VideoPlayer {

    // const constraints: object = {
    //     video: {
    //       width: {
    //         min: 1280,
    //         ideal: 1920,
    //         max: 2560,
    //       },
    //       height: {
    //         min: 720,
    //         ideal: 1080,
    //         max: 1440
    //       },
    //     }
    //   };


    public async play() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 1280, height: 720 },
                audio: false,
            });


            const video = document.getElementById('video') as HTMLVideoElement;
            video.srcObject = stream;
            await video.play();
        } catch (err) {
            console.log(err);
        }
    }

}