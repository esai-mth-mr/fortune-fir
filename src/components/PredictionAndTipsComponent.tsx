import React, { useState, useEffect } from "react";
import "../style/PredictionAndTipsComponent.css";
import {
  structurePredictionAndTips,
  structureTips,
} from "../utils/PredictionAndTipsComponentUtils";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

type PredictionAndTipsProps = {
  input: { inputString: string };
  onZoomClick: () => void;
};

const PredictionAndTipsComponent: React.FC<PredictionAndTipsProps> = ({
  input,
  onZoomClick,
}) => {
  const [structuredContent, setStructuredContent] = useState<{
    prediction: string;
    tips: string;
  }>({ prediction: "", tips: "" });
  const [structuredTips, setStructuredTips] = useState<
    { number: number; description: string }[]
  >([]);

  useEffect(() => {
    const structuredData = structurePredictionAndTips(input.inputString);
    setStructuredContent(structuredData);

    const structuredTipsData = structureTips(structuredData.tips);
    setStructuredTips(structuredTipsData);
  }, []);

  return (
    <div className={`prediction-tips-container `}>
      <div className="prediction">
        <h2>Prediction</h2>
        <p>{structuredContent.prediction}</p>
      </div>

      <div className="tips">
        <h2>Tips</h2>
        <ul>
          {structuredTips.map((tip) => (
            <li key={tip.number} className="tip-item">
              <strong>Tip {tip.number}:</strong> {tip.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="scale-view">
        <ZoomInIcon onClick={onZoomClick} />
      </div>
    </div>
  );
};

export default PredictionAndTipsComponent;
