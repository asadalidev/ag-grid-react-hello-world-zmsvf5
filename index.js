import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [rowData, setRowData] = useState([]);
  const [count, setCount] = useState(0);

  loadDataFromServer();

  function loadDataFromServer() {
    setTimeout(() => {
      setRowData([{ make: "Toyota" }]);
    }, 1000);
  }

  function handleChange() {
    //here Count will always remain 0 (the value provided initially)
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count Changes: {count}</h1>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact rowData={rowData}>
          <AgGridColumn
            field="make"
            editable={true}
            onCellValueChanged={handleChange}
          />
        </AgGridReact>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
