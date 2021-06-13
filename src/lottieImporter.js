// import lottie for no reason...
export function lottieImporter() {
  import('lottie-web').then((lottie) => {
    console.log(lottie.play);
  });
}