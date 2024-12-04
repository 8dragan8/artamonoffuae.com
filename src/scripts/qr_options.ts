import type { Options } from 'qr-code-styling'

const qr_options: Options = {
  type: 'svg',
  shape: 'square',
  width: 200,
  height: 200,
  data: 'https://www.artamonoffuae.com/',
  margin: 0,
  qrOptions: {
    typeNumber: 0,
    mode: 'Byte',
    errorCorrectionLevel: 'Q',
  },
  imageOptions: {
    saveAsBlob: true,
    hideBackgroundDots: true,
    imageSize: 0.5,
    margin: 5,
  },
  dotsOptions: {
    type: 'extra-rounded',
    color: '--clr-primary',
    roundSize: true,
    gradient: undefined,
  },
  backgroundOptions: {
    round: 0,
    color: 'white',
  },
  cornersSquareOptions: {
    type: 'extra-rounded',
    color: '--clr-primary',
    gradient: undefined,
  },
  cornersDotOptions: {
    type: 'dot',
    color: '--clr-primary',
  },
}

export default qr_options
