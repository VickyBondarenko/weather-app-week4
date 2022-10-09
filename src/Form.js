import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div className="enter-city">
      <form className="enter-city">
        <input type="text" placeholder="Enter city" />
        <input type="submit" className="btn btn-primary ms-2" value="Change" />
      </form>
    </div>
  );
}
