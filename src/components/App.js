import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoComments from "./VideoComments";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("gmk red samurai");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="fullcon">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="vidcon">
          <div className="ui container">
            <div className="ui grid">
              <div className="ui row vidcon">
                <div className="sixteen wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="ui container">
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column">
                <VideoComments video={this.state.selectedVideo} />
              </div>
              <div className="six wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <i className="github icon" />
          <a href="https://github.com/rx7dev">rx7dev</a>
        </div>
      </div>
    );
  }
}

export default App;
