import { useMemo } from "react";
import '../Load Order Table/style/LordOrderTable.css';
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { PencilSimple } from "phosphor-react";

const data = [
  {
    name: { firstName: "John", lastName: "Doe" },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: { firstName: "Jane", lastName: "Doe" },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: { firstName: "Joe", lastName: "Doe" },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: { firstName: "Kevin", lastName: "Vandy" },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: { firstName: "Joshua", lastName: "Rolluffs" },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
];

const CompletedOrderTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
      {
        header: "Edit",
        size: 100,
        Cell: () => (
          <PencilSimple className="pencil-icons-table" size={20} weight="bold" style={{ cursor: "pointer", color: "" }} />
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <div className="table-main">
      <h4 className="ps-3 py-2 table-heading">Completed Order List</h4>
      <div className="mx-3 table-container">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default CompletedOrderTable;
