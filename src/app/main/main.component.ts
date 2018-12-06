import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public text = 'Home';

  constructor(private speech: SpeechRecognitionService){
    
  }

  ngOnInit() {
  }

  listen(){
    this.speech.record('es_MX')
      .subscribe(e => {this.text = e, console.log('esto funciona')})
  }
}
