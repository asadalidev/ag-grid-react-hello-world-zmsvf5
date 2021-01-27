import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [rowData, setRowData] = useState([]);

  fetchData();

  function fetchData() {
    //loading data from server
    setTimeout(() => {
      setRowData([{ make: "Toyota" }, { make: "Ford" }, { make: "Porsche" }]);
    }, 1000);
  }

  function handleChange(param) {
    console.log("rowData", rowData);
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn
          field="make"
          editable={true}
          onCellValueChanged={handleChange}
        />
      </AgGridReact>
    </div>
  );
};

render(<App />, document.getElementById("root"));
