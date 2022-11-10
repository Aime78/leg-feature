import { useState, useEffect } from "react";
import { db } from "./utils/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";

import "./App.css";
import Leg from "./components/Leg";
import LegTemplate from "./components/LegTemplate";
import legObjectTemplate from "./components/legObjectTemplate";
import LegsTable from "./components/LegsTable";

function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [legs, setLegs] = useState([]);
  const [legData, setLegData] = useState(legObjectTemplate);

  useEffect(() => {
    const q = query(collection(db, "legs"), orderBy("created", "asc"));
    onSnapshot(q, (querySnapshot) => {
      setLegs(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const handleLegChange = async (e, id, legType) => {
    const valueUpdate =
      legType === "Lots" && e.target.value
        ? Number(e.target.value)
        : e.target.value;

    const legDocRef = doc(db, "legs", id);

    try {
      await updateDoc(legDocRef, {
        [legType]: valueUpdate,
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleToggle = async (id, legType, value = "Type") => {
    const legToChange = legs.find((leg) => leg.id === id);

    const legEquivalent =
      legType === "legMomentumToggle" ? "LegMomentum" : "LegTrailSL";

    const toggleValue = !legToChange.data[legType];
    const legEquivalentType = legToChange.data[legEquivalent].Type;

    const updateType =
      toggleValue && legEquivalentType === "None" ? "Points" : "None";

    const toggleToChange = {
      [legType]: toggleValue,

      [legEquivalent]: {
        ...legToChange.data[legEquivalent],
        [value]: updateType,
      },
    };

    const legDocRef = doc(db, "legs", id);
    try {
      await updateDoc(legDocRef, toggleToChange);
    } catch (error) {
      alert(error);
    }
  };

  const handleLegOptions = async (e, id, legType, value) => {
    const legToChange = legs.find((leg) => leg.id === id);
    const legDocRef = doc(db, "legs", id);

    const legOptionValue =
      e.target.value && value !== "Type"
        ? Number(e.target.value)
        : e.target.value;

    const newObj = {
      [legType]: {
        ...legToChange.data[legType],
        [value]: legOptionValue,
      },
    };

    try {
      await updateDoc(legDocRef, newObj);
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (id) => {
    const legDocRef = doc(db, "legs", id);

    try {
      await deleteDoc(legDocRef);
    } catch (error) {
      alert(error);
    }
  };

  const handleCopy = async (id) => {
    const legToCopy = legs.find((leg) => leg.id === id);

    try {
      await addDoc(collection(db, "legs"), legToCopy.data);
    } catch (error) {
      alert(error);
    }
  };

  const createLeg = async (e) => {
    e.preventDefault();
    const Lots = legData.Lots ? legData.Lots : 0;
    const created = Timestamp.now();
    const newLeg = { ...legData, Lots, created };

    try {
      await addDoc(collection(db, "legs"), newLeg);
    } catch (error) {
      alert(error);
    }
  };

  const handleIncrementDecrement = async (
    id,
    operationType,
    legTypeValue,
    legType,
    value,
    legToggle
  ) => {
    const legToChange = legs.find((leg) => leg.id === id);

    const legTypeOption = legToChange.data[legType];
    if (!legToggle && (legType === "LegMomentum" || legType === "LegTrailSL"))
      return;

    let newValue = operationType === "Increment" ? legTypeValue + 1 : 0;

    if (operationType === "Decrement")
      newValue = legTypeValue > 0 ? legTypeValue - 1 : 0;

    const newObj = {
      [legType]: newValue,
    };

    if (legType === "LegMomentum" || legType === "LegTrailSL") {
      newObj[legType] = {
        ...legTypeOption,
        [value]: newValue,
      };
    }

    const legDocRef = doc(db, "legs", id);

    try {
      await updateDoc(legDocRef, newObj);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="App">
      <h1>AlgoTest leg-feature</h1>
      {!hasSubmitted && (
        <LegTemplate
          legData={legData}
          setLegData={setLegData}
          createLeg={createLeg}
        />
      )}

      <div>
        {!hasSubmitted &&
          legs.map((leg) => (
            <Leg
              key={leg.id}
              leg={leg.data}
              id={leg.id}
              handleLegChange={handleLegChange}
              handleToggle={handleToggle}
              handleLegOptions={handleLegOptions}
              handleDelete={handleDelete}
              handleCopy={handleCopy}
              handleIncrementDecrement={handleIncrementDecrement}
            />
          ))}
      </div>
      <div className="submit-container">
        {!hasSubmitted && legs.length > 0 && (
          <button
            className="leg-button submit-button"
            onClick={() => setHasSubmitted(true)}
          >
            Submit
          </button>
        )}
      </div>
      {hasSubmitted && <LegsTable legs={legs} />}
    </div>
  );
}

export default App;
