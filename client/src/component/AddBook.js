import React from "react";

export default function AddBook({ book, handleChange, addBook }) {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary  ">
        <form style={{ padding: " 20px 20px 10px 20px " }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={book.bookName}
              onChange={handleChange}
              name="bookName"
              className="form-control"
              id="floatingInput"
              placeholder="bookName"
            />
            <label for="floatingInput">Book Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={book.author}
              onChange={handleChange}
              name="author"
              className="form-control"
              id="floatingInput"
              placeholder="author"
            />
            <label for="floatingInput">Author</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              value={book.quantity}
              onChange={handleChange}
              name="quantity"
              className="form-control"
              id="floatingInput"
              placeholder="quantity"
            />
            <label for="floatingInput">Quantity</label>
          </div>
          <div class="form-floating mb-3">
            <select
              class="form-select"
              value={book.department}
              onChange={handleChange}
              name="department"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Department</option>
              <option value="History & Criticism"> History & Criticism</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study § Teaching">Study § Teaching</option>
            </select>
            <label for="floatingSelect">Works with selects</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              value={book.comments}
              name="comments"
              onChange={handleChange}
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <button onClick={addBook} type="button" class="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
