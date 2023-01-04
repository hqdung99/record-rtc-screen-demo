import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoRecordingService } from './video-recording.service';

type RecordingState = 'NONE' | 'RECORDING' | 'RECORDED';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('videoElement') videoElement: any;
  title = 'record-rtc-screen-demo';
  videoBlobUrl: any = null;
  video: any;
  state: RecordingState = 'NONE';

  constructor(
    private videoRecordingService: VideoRecordingService,
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {
    this.videoRecordingService.getMediaStream().subscribe((data) => {
      this.video.srcObject = data;
      this.ref.detectChanges();
    });
    this.videoRecordingService.getBlob().subscribe((data) => {
      this.videoBlobUrl = this.sanitizer.bypassSecurityTrustUrl(data);
      this.video.srcObject = null;
      this.ref.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.video = this.videoElement.nativeElement;
  }

  startRecording() {
    this.videoRecordingService.startRecording();
    this.state = 'RECORDING';
  }

  stopRecording() {
    this.videoRecordingService.stopRecording();
    this.state = 'RECORDED';
  }

  downloadRecording() {
    this.videoRecordingService.downloadRecording();
  }

  clearRecording() {
    this.videoRecordingService.clearRecording();
    this.video.srcObject = null;
    this.videoBlobUrl = null;
    this.state = 'NONE';
  }
}
