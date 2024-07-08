import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";

import LandingVideoStyles from "./LandingVideo.styles";
import type { ILandingVideoProps } from "./LandingVideo.types";
import Button from "../Button";
import Grid, { GridCol } from "../Grid";
import StudioCard from "../StudioCard";

const STUDIO_CARD = [
  {
    video: "/video-disney.mp4",
    image: "/disney.jpg",
  },
  {
    video: "/video-pixar.mp4",
    image: "/pixar.jpg",
  },
  {
    video: "/video-marvel.mp4",
    image: "/marvel.jpg",
  },
  {
    video: "/video-national-geo.mp4",
    image: "/national-geo.jpg",
  },
  {
    video: "/video-starwars.mp4",
    image: "/starwars.jpg",
  },
  {
    video: "/video-star.mp4",
    image: "/star.jpg",
  },
];

const Video = ({ controls, autoPlay, height, src, muted }: ILandingVideoProps) => {
  return (
    <LandingVideoStyles height={height}>
      <div className="parallax"></div>

      <div className="main">
        <div className="container">
          <div className="content-detail">
            <div className="content-detail--top">
              <h1>Testing</h1>
            </div>
            <div className="content-detail--badge">
              <span>2024</span>
              <span>1 Season</span>
              <span>Japanese</span>
            </div>
            <div className="content-detail--overview">
              <p>
                The crew of the colony ship Covenant, bound for a remote planet on the far side of
                the galaxy, discovers what they think is an uncharted paradise, but is actually a
                dark, dangerous world.
              </p>
            </div>
            <div className="content-detail--genres">
              <span>Action</span>
              <span>Drama</span>
              <span>Fanatasy</span>
            </div>
            <div className="content-detail--button">
              <div className="left">
                <Button color="secondary" block>
                  <CaretRightOutlined style={{ fontSize: 18 }} /> Watch Now
                </Button>
              </div>

              <div className="right">
                <Button color="secondary" block>
                  <PlusOutlined />
                </Button>
              </div>
            </div>
          </div>
          <div className="landing-studio-card">
            <div className="landing-studio-card-grid">
              {STUDIO_CARD.map((item, key) => {
                return <StudioCard key={key} {...item}></StudioCard>;
              })}
            </div>
          </div>
        </div>
      </div>
    </LandingVideoStyles>
  );
};

export default Video;
