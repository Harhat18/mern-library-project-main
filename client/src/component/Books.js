import React from "react";

export default function Books({ books }) {
  return (
    <div className="container mt-5">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Department</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan="3">
              Process
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr scope="col" key={index}>
                <td>{book._id}</td>
                <td
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Tooltip mesajı buraya yazılacak!"
                >
                  {book.bookName}
                </td>
                <td>{book.author}</td>
                <td>{book.department}</td>
                <td>{book.quantity}</td>
                <td>
                  <button className="btn btn-primary mx-1">DELETE</button>
                  <button className="btn btn-primary mx-1">LEND</button>
                  <button className="btn btn-primary mx-1">BACK</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
