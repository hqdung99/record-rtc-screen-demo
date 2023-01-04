import { Injectable } from "@angular/core";
import * as RecordRTC from "recordrtc";
import { Subject } from "rxjs";

@Injectable()
export class VideoRecordingService {
  private mediaStream: any;
  private recorder: any;
  private blob: any;
  private _mediaStream = new Subject<any>();
  private _blob = new Subject<any>();
  
  // getObservable
  getMediaStream() {
    return this._mediaStream.asObservable();
  }

  getBlob() {
    return this._blob.asObservable();
  }

  startRecording() {
    this.handleRecording();
  }

  async handleRecording() {
    // @ts-ignore
    this.mediaStream = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: true
    });
    this._mediaStream.next(this.mediaStream);
    this.recorder = new RecordRTC(this.mediaStream, { type: 'video' });
    this.recorder.startRecording();
  }

  stopRecording() {
    if (!this.recorder) {
      return;
    }
    this.recorder.stopRecording(() => {
      this.blob = this.recorder.getBlob();
      this._blob.next(URL.createObjectURL(this.blob));
      this.mediaStream.stop();
      this.recorder.destroy();
      this.mediaStream = null;
      this.recorder = null;
    })
  }

  downloadRecording() {
    RecordRTC.invokeSaveAsDialog(this.blob, `${Date.now()}.webm`);
  }

  clearRecording() {
    this.blob = null;
    this.recorder = null;
    this.mediaStream = null;
  }

}
