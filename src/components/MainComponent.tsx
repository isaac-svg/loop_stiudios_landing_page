import React, { useEffect, useState } from "react";
import mobileInteractiveImg from "/public/images/mobile/image-interactive.jpg";
import desktopInteractiveImg from "/public/images/desktop/image-interactive.jpg";
import data from "../gallery.json";
interface Props {
  width: number;
}
const MainComponent = ({ width }: Props) => {
  const [desktopScreen, setDesktopScreen] = useState<boolean>(false);
  useEffect(() => {
    width > 550 ? setDesktopScreen(true) : setDesktopScreen(false);
  }, [width]);
  return (
    <main className="main">
      <div className="intro">
        <div className="img__wrapper">
          <img
            src={desktopScreen ? desktopInteractiveImg : mobileInteractiveImg}
            alt="customer wearing VR"
            className="intro__Image"
          />
        </div>
        <div className="description">
          <span className="title">THE LEADER IN INTERACTIVE VR</span>
          <p className="text">
            Founded in 2011,LoopStudios has been producing world class
            virtual-reality projects for some of the best companies around the
            globe. Our award winning creations has trnaformed businesses through
            digital experiences that bind to their brand.{" "}
          </p>
        </div>
      </div>
      <div className="gallery__title">
        <span className="title">OUR CREATIONS</span>
        {desktopScreen && (
          <div className="see__all--wrapper">
            <button className="see__all">SEE ALL</button>
          </div>
        )}
      </div>
      <div className="gallery">
        {data.gallery.map((gal) => (
          <div className="gallery__image--wrapper" key={gal.id}>
            <img
              src={desktopScreen ? gal.desktop : gal.mobile}
              alt="gallery image"
              className="gallery__image"
            />
            <span className="image__title">
              {gal.title1} <br /> {gal.title12}
            </span>
          </div>
        ))}
      </div>

      {!desktopScreen && (
        <div className="see__all--wrapper">
          <button className="see__all">SEE ALL</button>
        </div>
      )}
    </main>
  );
};

export default MainComponent;
