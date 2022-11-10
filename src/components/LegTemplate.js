import "./LegTemplate.css";
function LegTemplate({ legData, setLegData, createLeg }) {
  return (
    <div className="leg-template">
      <form>
        <div className="leg-template-container">
          <div className="lots leg-template-element ">
            <label>Total lot</label>
            <div className="leg-number-container">
              <input
                className="leg-number-input"
                type="number"
                value={legData.Lots}
                onChange={(e) =>
                  setLegData({ ...legData, Lots: e.target.value })
                }
              />
              <svg
                className="leg-number-svg-up"
                width="10"
                height="10"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  setLegData({
                    ...legData,
                    Lots: legData.Lots ? legData.Lots + 1 : 1,
                  })
                }
              >
                <path
                  d="M3.99433 3.80399e-05C3.89999 0.00145665 3.80992 0.0397567 3.74325 0.106427L0.111835 3.73784C0.0167939 3.82863 -0.0215061 3.96409 0.011829 4.09176C0.0451643 4.21872 0.144461 4.31802 0.271418 4.35135C0.399085 4.38469 0.534554 4.34639 0.625339 4.25135L4 0.876684L7.37466 4.25135C7.46545 4.34639 7.60091 4.38469 7.72858 4.35135C7.85554 4.31802 7.95484 4.21872 7.98817 4.09176C8.02151 3.96409 7.98321 3.82863 7.88816 3.73784L4.25675 0.106427C4.18724 0.0369197 4.09291 -0.00138039 3.99433 3.80399e-05Z"
                  fill="#C7C7C7"
                ></path>
              </svg>
              <svg
                className="leg-number-svg-down"
                width="10"
                height="10"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  setLegData({
                    ...legData,
                    Lots:
                      legData.Lots && legData.Lots > 1 ? legData.Lots - 1 : 1,
                  })
                }
              >
                <path
                  d="M7.6285 0.750066C7.53202 0.752904 7.44121 0.792632 7.37453 0.862157L3.99903 4.23765L0.62354 0.862157C0.554724 0.791923 0.461079 0.752195 0.362467 0.752195C0.214905 0.752195 0.0822402 0.842293 0.0269042 0.979214C-0.0291411 1.11613 0.00420225 1.27292 0.109908 1.37579L3.74222 5.0081C3.8841 5.14998 4.11396 5.14998 4.25585 5.0081L7.88816 1.37579C7.99599 1.27221 8.03005 1.11259 7.97187 0.974248C7.91441 0.835908 7.7782 0.747228 7.6285 0.750066Z"
                  fill="#C7C7C7"
                ></path>
              </svg>
            </div>
          </div>
          <div className="position leg-template-element">
            <label>Position</label>
            <span>
              <select
                className="select-input"
                value={legData.PositionType}
                onChange={(e) =>
                  setLegData({ ...legData, PositionType: e.target.value })
                }
              >
                <option>Buy</option>
                <option>Sell</option>
              </select>
            </span>
          </div>
          <div className="option-type leg-template-element">
            <label>Option Type</label>
            <span>
              <select
                className="select-input"
                value={legData.OptionType}
                onChange={(e) =>
                  setLegData({ ...legData, OptionType: e.target.value })
                }
              >
                <option>Call</option>
                <option>Put</option>
              </select>
            </span>
          </div>
          <div className="expiry leg-template-element">
            <label>Expiry</label>
            <span>
              <select
                className="select-input"
                value={legData.ExpiryKind}
                onChange={(e) =>
                  setLegData({ ...legData, ExpiryKind: e.target.value })
                }
              >
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </span>
          </div>
          <div className="entry-type leg-template-element">
            <label>Select Strike Criteria</label>
            <span>
              <select
                className="select-input"
                value={legData.EntryType}
                onChange={(e) =>
                  setLegData({ ...legData, EntryType: e.target.value })
                }
              >
                <option>Strike Type</option>
                <option>Premium Range</option>
                <option>Closest Premium</option>
                <option>Straddle Width</option>
              </select>
            </span>
          </div>
          <div className="strike-type leg-template-element">
            <label>Strike Type</label>
            <span>
              <select
                className="select-input"
                value={legData.StrikeParameter}
                onChange={(e) =>
                  setLegData({ ...legData, StrikeParameter: e.target.value })
                }
              >
                <option>ATM</option>
                <option>OTM1</option>
              </select>
            </span>
          </div>
        </div>
        <div className="button-container">
          <button
            className="leg-button add-leg-button"
            type="submit"
            onClick={createLeg}
          >
            Add Leg
          </button>
          <button
            className="leg-button cancel-leg-button"
            onClick={(e) => e.preventDefault()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default LegTemplate;
