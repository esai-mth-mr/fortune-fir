import React from "react";
import "@src/style/modal/modal.scss";
import PredictionAndTipsComponent from "../../components/PredictionAndTipsComponent";

interface DataType {
  desc: string;
  onZoomClick: () => void;
  onNextClick: () => void;
}

const DescriptionModal: React.FC<DataType> = ({
  desc,
  onZoomClick,
  onNextClick,
}) => {
  return (
    <>
      <div className="modal">
        <div className="modal_darkbg">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <PredictionAndTipsComponent
              input={desc}
              onZoomClick={onZoomClick}
            />
            <div
              style={{
                backgroundColor: "red",
                borderColor: "white",
                color: "white",
              }}
              className="modal_next_btn"
              onClick={onNextClick}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionModal;
