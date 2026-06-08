import { useState } from "react";

function BeautyAssistant() {
  const [skinType, setSkinType] = useState("");
  const [skinTone, setSkinTone] = useState("");
  const [concern, setConcern] = useState("");

  const [recommendation, setRecommendation] =
    useState("");

  const getRecommendation = () => {
    if (
      skinType === "Oily" &&
      concern === "Acne"
    ) {
      setRecommendation(
        "Niacinamide Serum + Oil Free Face Wash"
      );
    }

    else if (
      skinType === "Dry"
    ) {
      setRecommendation(
        "Hyaluronic Acid Serum + Moisturizer"
      );
    }

    else if (
      concern === "Pigmentation"
    ) {
      setRecommendation(
        "Vitamin C Serum + SPF 50 Sunscreen"
      );
    }

    else {
      setRecommendation(
        "Daily Cleanser + Moisturizer + Sunscreen"
      );
    }
  };

  return (
    <div className="assistant">

      <h2>Beauty AI Assistant</h2>

      <select
        value={skinType}
        onChange={(e) =>
          setSkinType(e.target.value)
        }
      >
        <option value="">
          Skin Type
        </option>

        <option>Oily</option>
        <option>Dry</option>
        <option>Combination</option>
      </select>

      <select
        value={skinTone}
        onChange={(e) =>
          setSkinTone(e.target.value)
        }
      >
        <option value="">
          Skin Tone
        </option>

        <option>Fair</option>
        <option>Medium</option>
        <option>Dark</option>
      </select>

      <select
        value={concern}
        onChange={(e) =>
          setConcern(e.target.value)
        }
      >
        <option value="">
          Concern
        </option>

        <option>Acne</option>
        <option>Pigmentation</option>
        <option>Dullness</option>
      </select>

      <button
        onClick={getRecommendation}
      >
        Get Recommendation
      </button>

      {recommendation && (
        <div className="recommend-box">
          <h4>Recommended:</h4>
          <p>{recommendation}</p>
        </div>
      )}

    </div>
  );
}

export default BeautyAssistant;