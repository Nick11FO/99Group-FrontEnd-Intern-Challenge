import "./styles.css";
import React, { useState, useEffect } from "react";

export default function ListingAd({
  pic,
  title,
  address,
  description,
  onDescriptionClick
}) {
  const [showDescription, setShowDescription] = useState(false);
  const [showRealNumber, setShowRealNumber] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 575);

  const togglePhoneNumber = () => {
    setShowRealNumber(!showRealNumber);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 575);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {/************** LAUNCHING SOON ***************/}
      <div className="launchingSoon">
        <h3>Launching Soon</h3>
      </div>

      <div className="flag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="21"
          viewBox="0 0 9 21"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 21H0.447242C1.06958 21 1.65645 20.7103 2.03491 20.2163L8.54367 11.72C9.09344 11.0023 9.09344 10.0051 8.54367 9.28744L2.03101 0.786051C1.65475 0.294901 1.07237 0.00554085 0.453671 0.00234413L0 0V21Z"
            fill="#FF72B6"
          />
        </svg>
      </div>

      {/************** PICTURE ***************/}
      <div className="mainPic__container">
        <img className="mainPic" src={pic} />
      </div>

      {/************** HOVER DARKEN PICT ***************/}

      <div className="arrowContainer">
        <div className="leftArrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="32"
            viewBox="0 0 17 32"
            fill="none"
          >
            <path
              d="M13.3169 29.3271C13.6762 29.6709 14.1137 29.8584 14.6137 29.8584C15.6606 29.8584 16.4731 29.0459 16.4731 28.0146C16.4731 27.499 16.27 27.0303 15.9106 26.6709L4.97311 15.9834L15.9106 5.32715C16.27 4.96777 16.4731 4.4834 16.4731 3.9834C16.4731 2.95215 15.6606 2.13965 14.6137 2.13965C14.1137 2.13965 13.6762 2.32715 13.3325 2.6709L1.17624 14.5459C0.738739 14.9521 0.519989 15.4521 0.519989 15.999C0.519989 16.5459 0.738739 17.0146 1.16061 17.4365L13.3169 29.3271Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="rightArrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="32"
            viewBox="0 0 17 32"
            fill="none"
          >
            <path
              d="M2.35938 29.8587C2.875 29.8587 3.29688 29.6712 3.65625 29.3275L15.8125 17.4525C16.2344 17.015 16.4531 16.5619 16.4531 15.9994C16.4531 15.4525 16.25 14.9681 15.8125 14.5619L3.65625 2.67125C3.29688 2.3275 2.875 2.14 2.35938 2.14C1.3125 2.14 0.5 2.9525 0.5 3.98375C0.5 4.48375 0.71875 4.96812 1.0625 5.3275L12.0156 16.015L1.0625 26.6712C0.703125 27.0462 0.5 27.4994 0.5 28.015C0.5 29.0462 1.3125 29.8587 2.35938 29.8587Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/************** MAIN CONTENT ***************/}
      <div className="mainContent">
        {/************** TOP SECTION ***************/}
        <div className="topSection">
          <div className="topSection__left">
            <div className="tsl__left">
              <div className="topSection__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_184)">
                    <path
                      d="M12.7253 3.52969C12.173 3.52969 11.7253 3.97741 11.7253 4.52969V22H16.1374V19.056C16.1374 18.8351 16.3164 18.656 16.5374 18.656H17.1879C17.4088 18.656 17.5879 18.8351 17.5879 19.056V22H22V4.52969C22 3.97741 21.5523 3.52969 21 3.52969H12.7253ZM19.663 14.444C19.663 14.6649 19.4839 14.844 19.263 14.844H14.4622C14.2413 14.844 14.0622 14.6649 14.0622 14.444V13.7934C14.0622 13.5725 14.2413 13.3934 14.4622 13.3934H19.263C19.4839 13.3934 19.663 13.5725 19.663 13.7934V14.444ZM19.663 10.9143C19.663 11.1352 19.4839 11.3143 19.263 11.3143H14.4622C14.2413 11.3143 14.0622 11.1352 14.0622 10.9143V10.2638C14.0622 10.0428 14.2413 9.86376 14.4622 9.86376H19.263C19.4839 9.86376 19.663 10.0428 19.663 10.2638V10.9143ZM19.663 7.38464C19.663 7.60555 19.4839 7.78464 19.263 7.78464H14.4622C14.2413 7.78464 14.0622 7.60555 14.0622 7.38464V6.73409C14.0622 6.51318 14.2413 6.33409 14.4622 6.33409H19.263C19.4839 6.33409 19.663 6.51318 19.663 6.73409V7.38464Z"
                      fill="white"
                    />
                    <path
                      d="M0 22H4.41209V19.056C4.41209 18.8351 4.59117 18.656 4.81209 18.656H5.46264C5.68355 18.656 5.86264 18.8351 5.86264 19.056V22H10.2747V1C10.2747 0.447716 9.82701 0 9.27472 0H1C0.447716 0 0 0.447715 0 1V22ZM2.33698 3.2044C2.33698 2.98348 2.51607 2.8044 2.73698 2.8044H7.53775C7.75866 2.8044 7.93775 2.98348 7.93775 3.2044V3.85495C7.93775 4.07586 7.75866 4.25495 7.53774 4.25495H2.73698C2.51607 4.25495 2.33698 4.07586 2.33698 3.85495V3.2044ZM2.33698 6.73407C2.33698 6.51315 2.51607 6.33407 2.73698 6.33407H7.53775C7.75866 6.33407 7.93775 6.51315 7.93775 6.73407V7.38462C7.93775 7.60553 7.75866 7.78462 7.53774 7.78462H2.73698C2.51607 7.78462 2.33698 7.60553 2.33698 7.38462V6.73407ZM2.33698 10.2637C2.33698 10.0428 2.51607 9.86374 2.73698 9.86374H7.53775C7.75866 9.86374 7.93775 10.0428 7.93775 10.2637V10.9143C7.93775 11.1352 7.75866 11.3143 7.53774 11.3143H2.73698C2.51607 11.3143 2.33698 11.1352 2.33698 10.9143V10.2637ZM2.33698 13.7934C2.33698 13.5725 2.51607 13.3934 2.73698 13.3934H7.53775C7.75866 13.3934 7.93775 13.5725 7.93775 13.7934V14.444C7.93775 14.6649 7.75866 14.844 7.53774 14.844H2.73698C2.51607 14.844 2.33698 14.6649 2.33698 14.444V13.7934Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_184">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="tsl__right">
              <h1>{title}</h1>
              <p className="topSection__address">{address}</p>
            </div>
          </div>

          {isSmallScreen ? (
            <div></div>
          ) : (
            <div className="topSection__right">
              <h2>$2,609 - $3,043 psf</h2>
              <p className="topSection__subPrices">Prices from $1.99M</p>
            </div>
          )}
        </div>

        {/************** MID SECTION ***************/}
        <div className="midSection">
          <h2>Condo · 2021 · Freehold</h2>
          <h2>231 units · 1, 2, 3, 4 bedrooms</h2>
        </div>

        {isSmallScreen ? (
          <div className="topSection__right">
            <h1>$2,609 - $3,043 psf</h1>
            <p className="topSection__subPrices">Prices from $1.99M</p>
          </div>
        ) : (
          <div></div>
        )}

        {/************** BOTTOM SECTION ***************/}
        <div className="bottomSection">
          <div className="bs__container">
            <div className="bs__button">
              <button onClick={() => setShowDescription(!showDescription)}>
                See description
              </button>
            </div>

            <p
              className="description"
              style={{ display: showDescription ? "block" : "none" }}
              onClick={() => {
                togglePhoneNumber();
                onDescriptionClick();
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
