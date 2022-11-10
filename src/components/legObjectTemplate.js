const LegObjectTemplate = {
  Lots: 1,
  PositionType: "Sell",
  OptionType: "Call",
  ExpiryKind: "Weekly",
  EntryType: "Strike Type",
  StrikeParameter: "ATM",
  legMomentumToggle: false,
  legTrailToggle: false,
  LegMomentum: {
    Type: "None",
    Value: 0,
  },
  LegTrailSL: {
    Type: "None",
    InstrumentMove: 0,
    StopLossMove: 0,
  },
};

export default LegObjectTemplate;
