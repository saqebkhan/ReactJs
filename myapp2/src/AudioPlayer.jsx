import React, { useEffect } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./Piano.css";

export const AudioPlayer = () => {
  const audio = new Audio("Money Heist Ringtone _Music Manda(MP3_70K).mp3");
  const handleAudioPlay = () => {
    audio.play();
  };
  const handleAudioPause = () => {
    audio.pause();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "a" && handleAudioPlay("A"));
    if (e.key === "s" && handleAudioPlay("B"));
    if (e.key === "d" && handleAudioPlay("D"));
    if (e.key === "f" && handleAudioPlay("E"));
    if (e.key === "g" && handleAudioPlay("F"));
    if (e.key === "h" && handleAudioPlay("G"));
  }); 
 
  return (
    <Card className="player">
      <Row>
        <Col></Col>
        <Col>
          <Button className={"playbtn"} onClick={handleAudioPlay}>
            Play
          </Button>
        </Col>
        <Col>
          <Button className={"Pausebtn"} onClick={handleAudioPause}>
            Pause
          </Button>
        </Col>
        <Col>
          <Button
            className={"thirdbtn"}
            onMouseDown={handleAudioPlay}
            onMouseUp
          >
            Piano
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default AudioPlayer;
