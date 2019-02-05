import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Row, Col } from 'reactstrap';
import { Notes } from './components/notes';

export const PianoScene = ({ playNote, stopNote, setType, octave }) => {
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
            {Notes[octave].map(note => (
              <div
                className={`note ${note.name.indexOf('#') != -1 ? 'black' : 'white'}`}
                onMouseDown={() => playNote(note.frequency)}
                onMouseUp={stopNote}
                key={note.name}
              />
            ))}
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
  octave: PropTypes.number,
};
