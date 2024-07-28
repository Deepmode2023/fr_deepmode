type Milliseconds = number;

export function AnimationFrame(
  time: Milliseconds,
  doneCallback: (markTime: number) => void,
  frameCallback?: (markTime: number) => boolean
) {
  if (!window?.requestAnimationFrame)
    console.warn("Instance window doesn`t exist 'requestAnimationFrame'!!");

  let startAnimate: number | undefined, previousTimeStamp: number | undefined;
  let done = false;

  function step(timeStamp: number) {
    if (startAnimate === undefined) {
      startAnimate = timeStamp;
    }

    const markTime = timeStamp - startAnimate;
    if (previousTimeStamp !== timeStamp && frameCallback) {
      done = frameCallback(markTime);
    }

    if (markTime < time) {
      if (done) {
        doneCallback(markTime);
        return;
      }
      window.requestAnimationFrame(step);
    } else {
      doneCallback(markTime);
    }
  }

  window.requestAnimationFrame(step);
}
