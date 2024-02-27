import "./index.css";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function BasePage(introImage, tintColor, content) {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Types: subtitle, text, focus, image
  return (
    <div>
      <div className="contentView">
        {content.map((section) => {
          if (isMobile) {
            return (
              <div className="sectionView">
                {section.details.map((detail, index) => {
                  return (
                    <div className="contentRow">
                      <div className="fullColumn">
                        {(index === 0 && detail.type !== "intro") ? (
                          <div className="titleText">{section.title}</div>
                        ) : null}
                        {detail.type === "subtitle" ? (
                          <div className="subtitleText">{detail.details}</div>
                        ) : null}
                        {detail.type === "text" ? (
                          <div className="detailText">{detail.details}</div>
                        ) : null}
                        {detail.type === "focus" ? (
                          <div className="focusBox">
                            <div className="subtitleText">
                              {detail.details.title}
                            </div>
                            <div className="detailText">
                              {detail.details.text}
                            </div>
                          </div>
                        ) : null}
                        {detail.type === "image" ? (
                          <img
                            className="imageBox"
                            src={detail.details}
                            alt="Content Detail"
                          />
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }

          return (
            <div className="sectionView">
              {section.details.map((detail, index) => {
                if (detail.type === "image") {
                  return (
                    <div className="contentRow">
                      <img
                        className="imageBox"
                        src={detail.details}
                        alt="Content Detail"
                      />
                    </div>
                  );
                }

                return (
                  <div className="contentRow">
                    <div className="titleColumn">
                      {(index === 0 && detail.type !== "intro") ? (
                        <div className="titleText" style={{color: tintColor}}>{section.title}</div>
                      ) : null}
                    </div>
                    <div className="contentColumn">
                      {detail.type === "subtitle" ? (
                        <div className="subtitleText">{detail.details}</div>
                      ) : null}
                      {detail.type === "text" ? (
                        <div className="detailText">{detail.details}</div>
                      ) : null}
                      {detail.type === "focus" ? (
                        <div className="focusBox">
                          <div className="subtitleText">
                            {detail.details.title}
                          </div>
                          <div className="focusText">
                            {detail.details.text}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
