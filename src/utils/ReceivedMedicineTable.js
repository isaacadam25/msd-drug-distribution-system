import React from "react";
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
  { id: 1, title: "#" },
  { id: 2, title: "Batch No" },
  { id: 3, title: "Drug Name" },
  { id: 4, title: "Drug Type" },
  { id: 5, title: "Concentration" },
  { id: 6, title: "Unit" },
  { id: 7, title: "Quantity" },
  { id: 8, title: "Total" },
  { id: 9, title: "Date Received" },
];

const ReceivedMedicineTable = (props) => {
  const { items } = props;
  console.log(items);

  return (
    <>
      <h6 className="h6 text-center p-3">Received Medicines</h6>
      <TableController>
        <TableHeadController headCells={headCells} />
        <tbody>
          {items &&
            items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.batch_number}</td>
                <td>{item.drug_name}</td>
                <td style={{ textTransform: "uppercase" }}>
                  {item.medicine_type}
                </td>
                <td>{item.concentration}</td>
                <td>{item.unit_measure}</td>
                <td>{item.quantity_received}</td>
                <td>{item.quantity_received * item.unit_measure}</td>

                {/* <td>{item.date_approved}</td> */}
                <td>{item.expiry_date}</td>
              </tr>
            ))}
        </tbody>
      </TableController>
    </>
  );
};

export default ReceivedMedicineTable;
