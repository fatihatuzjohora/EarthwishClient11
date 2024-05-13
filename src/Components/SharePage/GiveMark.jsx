import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
  const item = useLoaderData();

  const handelMarkSubmited = (event) => {
    event.preventDefault();
console.log('click');
    const form = event.target;
    const givenMark = form.givemark.value;
    const feedBack = form.feedback.value;
    const status='completed'
    //console.log(givemark,feedback);
    const finalResult={
        givenMark,
        feedBack,
        status
    }

    axios.put(`http://localhost:5000/bids/${item._id}`,finalResult).then(res=>{
        if (res.data.modifiedCount>0) {
            return Swal.fire({
              title: "success!",
              text: "Give Mark",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
    }).catch((err) => {
        return Swal.fire({
          title: "error",
          text: err.message,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });

  };
  return (
    <div>
      <p></p>
      <form onSubmit={handelMarkSubmited}>
        <div>
          <p>Give Mark</p>
          <input type="number" placeholder="Give Mark" name="givemark" />
        </div>
        <div>
          <p>Feedback</p>
          <textarea name="feedback" id="" cols="30" rows="10"></textarea>
        </div>

        <div>
          <input className="btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default GiveMark;
