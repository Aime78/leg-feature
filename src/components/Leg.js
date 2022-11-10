import "./Leg.css";
function Leg({
  leg,
  id,
  handleLegChange,
  handleToggle,
  handleLegOptions,
  handleDelete,
  handleCopy,
  handleIncrementDecrement,
}) {
  return (
    <div className="leg-container">
      <div className="leg-parameters-container">
        <div onClick={() => handleDelete(id)} className="delete-svg">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 .96C5.913.96.96 5.913.96 12c0 6.087 4.953 11.04 11.04 11.04 6.087 0 11.04-4.953 11.04-11.04C23.04 5.913 18.087.96 12 .96Zm4.18 14.54a.484.484 0 0 1 0 .68.492.492 0 0 1-.34.14.492.492 0 0 1-.34-.14L12 12.683 8.5 16.18a.492.492 0 0 1-.34.139.492.492 0 0 1-.34-.14.484.484 0 0 1 0-.68l3.498-3.5L7.82 8.5a.484.484 0 0 1 0-.68.484.484 0 0 1 .682 0L12 11.317l3.5-3.499a.484.484 0 0 1 .68 0 .484.484 0 0 1 0 .682L12.683 12l3.499 3.5Z"
              fill="#F07777"
            ></path>
          </svg>
        </div>
        <div onClick={() => handleCopy(id)} className="copy-svg">
          <svg
            width="12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.56 0v1.44l.48.48V.48h3.6v2.88h2.88V9.6h-3.6v.48H12V3.022L8.977 0H4.56Zm4.56.818 2.063 2.062H9.12V.817ZM0 1.92V12h7.44V4.942l-.068-.075-2.88-2.88-.074-.067H0Zm.48.48h3.6v2.88h2.88v6.24H.48V2.4Zm4.08.345L6.615 4.8H4.56V2.745Z"
              fill="#375A9E"
            ></path>
          </svg>
        </div>
        <div className="leg-header">
          <div className="lot-container">
            <label>Lots:</label>
            <div className="leg-number-container">
              <input
                className="leg-number-input"
                type="number"
                value={leg.Lots}
                onChange={(e) => handleLegChange(e, id, "Lots")}
              />
              <svg
                className="leg-number-svg-up"
                width="10"
                height="10"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  handleIncrementDecrement(id, "Increment", leg.Lots, "Lots")
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
                  handleIncrementDecrement(id, "Decrement", leg.Lots, "Lots")
                }
              >
                <path
                  d="M7.6285 0.750066C7.53202 0.752904 7.44121 0.792632 7.37453 0.862157L3.99903 4.23765L0.62354 0.862157C0.554724 0.791923 0.461079 0.752195 0.362467 0.752195C0.214905 0.752195 0.0822402 0.842293 0.0269042 0.979214C-0.0291411 1.11613 0.00420225 1.27292 0.109908 1.37579L3.74222 5.0081C3.8841 5.14998 4.11396 5.14998 4.25585 5.0081L7.88816 1.37579C7.99599 1.27221 8.03005 1.11259 7.97187 0.974248C7.91441 0.835908 7.7782 0.747228 7.6285 0.750066Z"
                  fill="#C7C7C7"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <select
              className="leg-select-input"
              value={leg.PositionType}
              onChange={(e) => handleLegChange(e, id, "PositionType")}
            >
              <option>Buy</option>
              <option>Sell</option>
            </select>
            <select
              className="leg-select-input"
              value={leg.OptionType}
              onChange={(e) => handleLegChange(e, id, "OptionType")}
            >
              <option>Call</option>
              <option>Put</option>
            </select>
            <select
              className="leg-select-input"
              value={leg.ExpiryKind}
              onChange={(e) => handleLegChange(e, id, "ExpiryKind")}
            >
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div>
            <label>Select Strike</label>
            <select
              className="leg-select-input"
              value={leg.EntryType}
              onChange={(e) => handleLegChange(e, id, "EntryType")}
            >
              <option>Strike Type</option>
              <option>Premium Range</option>
              <option>Closest Premium</option>
              <option>Straddle Width</option>
            </select>
            <select
              className="leg-select-input"
              value={leg.StrikeParameter}
              onChange={(e) => handleLegChange(e, id, "StrikeParameter")}
            >
              <option>ATM</option>
              <option>OTM1</option>
            </select>
          </div>
        </div>
      </div>
      <div className="leg-options">
        <div>
          <div>
            <input
              className="checkbox"
              type="checkbox"
              value={leg.legMomentumToggle}
              onChange={() => handleToggle(id, "legMomentumToggle")}
              checked={leg.legMomentumToggle}
            />
            <label>Simple Momentum</label>
          </div>
          <div
            className={`leg-input-options ${
              leg.legMomentumToggle ? "" : "blur"
            }`}
          >
            <div>
              <select
                className="leg-select-input"
                value={leg.LegMomentum.Type}
                onChange={(e) => handleLegOptions(e, id, "LegMomentum", "Type")}
                disabled={!leg.legMomentumToggle}
              >
                <option>Points</option>
                <option>Percentage</option>
              </select>
            </div>

            <div className="leg-number-container leg-number-spacing">
              <input
                className="leg-number-input"
                type="number"
                value={leg.LegMomentum.Value}
                onChange={(e) =>
                  handleLegOptions(e, id, "LegMomentum", "Value")
                }
                disabled={!leg.legMomentumToggle}
              />
              <svg
                className="leg-number-svg-up"
                width="10"
                height="10"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  handleIncrementDecrement(
                    id,
                    "Increment",
                    leg.LegMomentum.Value,
                    "LegMomentum",
                    "Value",
                    leg.legMomentumToggle
                  )
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
                  handleIncrementDecrement(
                    id,
                    "Decrement",
                    leg.LegMomentum.Value,
                    "LegMomentum",
                    "Value",
                    leg.legMomentumToggle
                  )
                }
              >
                <path
                  d="M7.6285 0.750066C7.53202 0.752904 7.44121 0.792632 7.37453 0.862157L3.99903 4.23765L0.62354 0.862157C0.554724 0.791923 0.461079 0.752195 0.362467 0.752195C0.214905 0.752195 0.0822402 0.842293 0.0269042 0.979214C-0.0291411 1.11613 0.00420225 1.27292 0.109908 1.37579L3.74222 5.0081C3.8841 5.14998 4.11396 5.14998 4.25585 5.0081L7.88816 1.37579C7.99599 1.27221 8.03005 1.11259 7.97187 0.974248C7.91441 0.835908 7.7782 0.747228 7.6285 0.750066Z"
                  fill="#C7C7C7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div>
            <input
              className="checkbox"
              type="checkbox"
              value={leg.legTrailToggle}
              onChange={() => handleToggle(id, "legTrailToggle")}
              checked={leg.legTrailToggle}
            />
            <label>Trail SL</label>
          </div>
          <div
            className={`leg-input-options ${leg.legTrailToggle ? "" : "blur"}`}
          >
            <div>
              <select
                className="leg-select-input"
                value={leg.LegTrailSL.Type}
                onChange={(e) => handleLegOptions(e, id, "LegTrailSL", "Type")}
                disabled={!leg.legTrailToggle}
              >
                <option>Points</option>
                <option>Percentage</option>
              </select>
            </div>
            <div className="leg-number-container leg-number-spacing">
              <input
                className="leg-number-input"
                type="number"
                value={leg.LegTrailSL.InstrumentMove}
                onChange={(e) =>
                  handleLegOptions(e, id, "LegTrailSL", "InstrumentMove")
                }
                disabled={!leg.legTrailToggle}
              />
              <svg
                className="leg-number-svg-up"
                width="10"
                height="10"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  handleIncrementDecrement(
                    id,
                    "Increment",
                    leg.LegTrailSL.InstrumentMove,
                    "LegTrailSL",
                    "InstrumentMove",
                    leg.legTrailToggle
                  )
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
                  handleIncrementDecrement(
                    id,
                    "Decrement",
                    leg.LegTrailSL.InstrumentMove,
                    "LegTrailSL",
                    "InstrumentMove",
                    leg.legTrailToggle
                  )
                }
              >
                <path
                  d="M7.6285 0.750066C7.53202 0.752904 7.44121 0.792632 7.37453 0.862157L3.99903 4.23765L0.62354 0.862157C0.554724 0.791923 0.461079 0.752195 0.362467 0.752195C0.214905 0.752195 0.0822402 0.842293 0.0269042 0.979214C-0.0291411 1.11613 0.00420225 1.27292 0.109908 1.37579L3.74222 5.0081C3.8841 5.14998 4.11396 5.14998 4.25585 5.0081L7.88816 1.37579C7.99599 1.27221 8.03005 1.11259 7.97187 0.974248C7.91441 0.835908 7.7782 0.747228 7.6285 0.750066Z"
                  fill="#C7C7C7"
                ></path>
              </svg>
            </div>
            <div className="leg-number-container leg-number-spacing">
              <input
                className="leg-number-input"
                type="number"
                value={leg.LegTrailSL.StopLossMove}
                onChange={(e) =>
                  handleLegOptions(e, id, "LegTrailSL", "StopLossMove")
                }
                disabled={!leg.legTrailToggle}
              />
              <svg
                className="leg-number-svg-up"
                width="10"
                height="10"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() =>
                  handleIncrementDecrement(
                    id,
                    "Increment",
                    leg.LegTrailSL.StopLossMove,
                    "LegTrailSL",
                    "StopLossMove",
                    leg.legTrailToggle
                  )
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
                  handleIncrementDecrement(
                    id,
                    "Decrement",
                    leg.LegTrailSL.StopLossMove,
                    "LegTrailSL",
                    "StopLossMove",
                    leg.legTrailToggle
                  )
                }
              >
                <path
                  d="M7.6285 0.750066C7.53202 0.752904 7.44121 0.792632 7.37453 0.862157L3.99903 4.23765L0.62354 0.862157C0.554724 0.791923 0.461079 0.752195 0.362467 0.752195C0.214905 0.752195 0.0822402 0.842293 0.0269042 0.979214C-0.0291411 1.11613 0.00420225 1.27292 0.109908 1.37579L3.74222 5.0081C3.8841 5.14998 4.11396 5.14998 4.25585 5.0081L7.88816 1.37579C7.99599 1.27221 8.03005 1.11259 7.97187 0.974248C7.91441 0.835908 7.7782 0.747228 7.6285 0.750066Z"
                  fill="#C7C7C7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leg;
