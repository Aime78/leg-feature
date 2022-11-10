import "./LegsTable.css";
function LegsTable({ legs }) {
  return (
    <div className="legs-table-container">
      <table className="legs-table">
        <thead>
          <tr>
            <th>Num</th>
            <th>Lots</th>
            <th>PositionType</th>
            <th>OptionType</th>
            <th>ExpiryKind</th>
            <th>EntryType</th>
            <th>StrikeParameter</th>
            <th>LegMomentum</th>
            <th>LegTrailSL</th>
          </tr>
        </thead>
        <tbody>
          {legs.map((leg, index) => (
            <tr key={leg.id}>
              <td>{index + 1}</td>
              <td>{leg.data.Lots}</td>
              <td>{leg.data.PositionType}</td>
              <td>{leg.data.OptionType}</td>
              <td>{leg.data.ExpiryKind}</td>
              <td>{leg.data.EntryType}</td>
              <td>{leg.data.StrikeParameter}</td>
              <td>
                <div className="leg-advanced-options">
                  <div>{leg.data.LegMomentum.Type}</div>
                  <div
                    className={`${
                      leg.data.LegMomentum.Type === "None" ? "hide-values" : ""
                    }`}
                  >
                    {leg.data.LegMomentum.Value}
                  </div>
                </div>
              </td>
              <td>
                <div className="leg-advanced-options">
                  <div>{leg.data.LegTrailSL.Type}</div>
                  <div
                    className={`${
                      leg.data.LegTrailSL.Type === "None" ? "hide-values" : ""
                    }`}
                  >
                    {leg.data.LegTrailSL.InstrumentMove}
                  </div>
                  <div
                    className={`${
                      leg.data.LegTrailSL.Type === "None" ? "hide-values" : ""
                    }`}
                  >
                    {leg.data.LegTrailSL.StopLossMove}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LegsTable;
