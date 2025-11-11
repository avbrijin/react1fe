import React, { useEffect, useState } from "react";
import {
  deleteStudents,
  editStudents,
  getStudents,
  uploadStudents,
} from "../Services/AllApi";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { data } from "react-router-dom";

const Home = () => {
  const [inputVal, setInputVal] = useState({ name: "", age: "" });
  const [studentData, setStudentData] = useState([]);

  const [edit, setEdit] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(studentData);
  useEffect(() => {
    load();
  }, [inputVal]);

  const load = async () => {
    const data = await getStudents();

    setStudentData(data.data);
    console.log(data.data);
  };

  const studentCreate = async () => {
    console.log(inputVal);
    let apiResponse = await uploadStudents(inputVal);
    console.log(apiResponse);
    load();
  };

  const deleteStudent = async (id) => {
    let apiResponse = await deleteStudents(id);
    load();
  };

  const editStudent = async () => {
    let apiResponse = await editStudents(data.id, reqBody);
    console.log(data);
    setShow(true);
   

    edit(data.data);

    load();
  };
  return (
    <>
      <div>
        <h1>student Manager </h1>
        <input
          onChange={(e) => {
            setInputVal({ ...inputVal, name: e.target.value });
          }}
          type="text"
        />
        <input
          onChange={(e) => {
            setInputVal({ ...inputVal, age: e.target.value });
          }}
          type="text"
        />
        <button onClick={studentCreate}>click to save</button>
        {/* {studentData?.map((eachData) => return{ <h1>{eachData.name}</h1>} {
         
        })} */}
        {studentData?.map((eachData) => (
          <>
            <div className="d-flex align items-center gap-5 container">
              {" "}
              <p>{eachData.name}</p>
              <p>{eachData.age}</p>
              <button onClick={() => deleteStudent(eachData.id)}>delete</button>
              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <input
                  onChange={(e) =>
                    setEdit({ ...edit, name: e.target.value })
                  }
                  type="text"
                  placeholder={eachData.name}
                ></input>
                <input onChange={(e) =>
                    setEdit({ ...edit, age: e.target.value })
                  } type="text" placeholder={eachData.age} />
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={editStudent}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
