import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Row, Col } from 'reactstrap';

export const PianoScene = ({ playNote, stopNote, setType }) => {
  return (
    <div className="container">
      <Row>
        <Col md="12" className="mb-2">
          <ButtonGroup size="sm">
            <Button onClick={() => setType('sine')}>Sine</Button>
            <Button onClick={() => setType('square')}>Square</Button>
            <Button onClick={() => setType('sawtooth')}>Sawtooth</Button>
            <Button onClick={() => setType('triange')}>Triange</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div className="d-flex">
            <div className="note white" onMouseDown={() => playNote(261.6)} onMouseUp={stopNote} />
            <div className="note black" onMouseDown={() => playNote(277.2)} onMouseUp={stopNote} />
            <div className="note white" onMouseDown={() => playNote(293.7)} onMouseUp={stopNote} />
            <div className="note black" onMouseDown={() => playNote(311.1)} onMouseUp={stopNote} />
            <div className="note white" onMouseDown={() => playNote(329.6)} onMouseUp={stopNote} />
            <div className="note white" onMouseDown={() => playNote(349.2)} onMouseUp={stopNote} />
            <div className="note black" onMouseDown={() => playNote(370.0)} onMouseUp={stopNote} />
            <div className="note white" onMouseDown={() => playNote(392.0)} onMouseUp={stopNote} />
            <div className="note black" onMouseDown={() => playNote(415.3)} onMouseUp={stopNote} />
            <div className="note white" onMouseDown={() => playNote(440.0)} onMouseUp={stopNote} />
            <div className="note black" onMouseDown={() => playNote(466.2)} onMouseUp={stopNote} />
            <div className="note white" onMouseDown={() => playNote(493.9)} onMouseUp={stopNote} />
            <div className="note white" onMouseDown={() => playNote(523.3)} onMouseUp={stopNote} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

PianoScene.propTypes = {
  playNote: PropTypes.func,
  stopNote: PropTypes.func,
  setType: PropTypes.func,
};
