import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PodcastActions from "../../store/ducks/podcast";
import {
  Container,
  PodcastList,
  Podcast,
  Cover,
  Info,
  Title,
  Count,
  PageTitle
} from "./style";

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  handlePodcastPress = podcast => {
    const { navigation } = this.props;

    navigation.navigate("Podcast", { podcast });
  };

  render() {
    const { podcasts } = this.props;

    return (
      <Container>
        <PodcastList
          ListHeaderComponent={() => <PageTitle>Podcast</PageTitle>}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  header: null
};

const mapStateToProps = state => ({
  podcasts: state.podcasts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
