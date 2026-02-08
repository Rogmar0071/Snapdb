import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { VoiceRecorder } from '@capacitor-community/voice-recorder'

export async function takePhoto() {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 80
  })
  return photo.webPath
}

export async function pickFile() {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Photos
  })
  return photo.webPath
}

export async function recordVoice() {
  await VoiceRecorder.requestAudioRecordingPermission()
  await VoiceRecorder.startRecording()

  setTimeout(async () => {
    const result = await VoiceRecorder.stopRecording()
    console.log(result.value.recordDataBase64)
  }, 4000)
}
