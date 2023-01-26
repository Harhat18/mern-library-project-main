import React from "react";

export default function AddBook() {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary  ">
        <form style={{ padding: " 20px 20px 10px 20px " }}>
          <div className="form-floating mb-3">
            <input
              type="text"
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
              name="quantity"
              className="form-control"
              id="floatingInput"
              placeholder="quantity"
            />
            <label for="floatingInput">Quantity</label>
          </div>
          <div class="form-floating">
            <select
              class="form-select"
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
        </form>
      </div>
    </div>
  );
}
