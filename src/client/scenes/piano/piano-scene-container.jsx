import React from 'react';
import { PianoScene } from './piano-scene';

export class PianoSceneContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { octave: 4 };
    this.oscillator = undefined;
  }

  componentDidMount() {
    this.createAudioContext();
  }

  createAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    this.oscillator = audioContext.createOscillator();
    this.oscillator.frequency.value = 261.6;
    this.oscillator.start();

    let gain = audioContext.createGain();
    gain.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.04);
    gain.connect(audioContext.destination);

    this.setState({ audioContext });
  }

  playNote(frequency) {
    this.oscillator.frequency.value = frequency;
    this.oscillator.connect(this.state.audioContext.destination);
  }

  stopNote() {
    this.oscillator.disconnect(this.state.audioContext.destination);
  }

  setType(type) {
    this.oscillator.type = type;
  }

  render() {
    return (
      <PianoScene
        {...this.state}
        playNote={this.playNote.bind(this)}
        stopNote={this.stopNote.bind(this)}
        setType={this.setType.bind(this)}
      />
    );
  }
}
