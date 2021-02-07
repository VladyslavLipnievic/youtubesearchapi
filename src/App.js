import React, { useRef, useEffect } from "react";
import "./styles.css";
import Search from "./components/Search.js";
import youtubeApi from "./api/youtube";
import VideoList from "./components/VideoList";
import Videoplayer from "./components/Videoplayer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videosMetaInfo: [],
      selectedVideoId: null,
      limit: 20,
      word: "shit",
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // this.setState({ limit: this.state.limit + 20 });
    console.log("bottom");

    // this.reloadOnscroll(this.state.word);
  }

  onSearch = async (keyword) => {
    this.setState({ word: keyword });
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
        maxResults: 20,
      },
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
  };
  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideoId: videoId,
    });
  };

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />

        <VideoList
          //onScroll={(event) => this.handleScroll(event)}
          onVideoSelected={this.onVideoSelected}
          data={this.state.videosMetaInfo}
        />

        <Videoplayer videoId={this.state.selectedVideoId} />
      </div>
    );
  }
}
