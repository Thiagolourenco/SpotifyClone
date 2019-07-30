import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PlayerActions from "../../store/ducks/player";

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcon
} from "./style";

import Play from "../../assets/img/play-button.png";
import Pause from "../../assets/img/pause.png";
import PlayNext from "../../assets/img/play-next-button.png";
import Previous from "../../assets/img/previous-track.png";

const Player = ({ player, currentSong, play, pause, prev, next }) =>
  player.current && (
    <Container>
      <CoverBackground
        source={{
          uri: currentSong.artwork
        }}
      />

      <EpisodeInfo>
        <Title>{currentSong.title}</Title>
        <Author>{currentSong.artist}</Author>
      </EpisodeInfo>
      <Controls>
        <ControlButton onPress={next}>
          <ControlIcon source={Previous} />
        </ControlButton>
        <ControlButton onPress={player.playing ? pause : play}>
          <ControlIcon source={player.playing ? Pause : Play} />
        </ControlButton>
        <ControlButton onPress={prev}>
          <ControlIcon source={PlayNext} />
        </ControlButton>
      </Controls>
    </Container>
  );

const mapStateToProps = state => ({
  player: state.player,
  currentSong: state.player.podcast
    ? state.player.podcast.tracks.find(
        episode => episode.id === state.player.current
      )
    : null
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
