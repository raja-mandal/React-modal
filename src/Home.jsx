import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Organ</h5>
          <a
            href="#"
            className="btn btn-primary btn-sm"
            onClick={() => setModalIsOpen(true)}
          >
            Go
          </a>
        </div>
      </div>
      {/* modal code */}
      <Modal
        isOpen={modalIsOpen}
        // shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Menu</h2>
        {/* <p>Modal Body</p> */}
        {/* <Link to="/about">About</Link> */}

        {/* Accordian start*/}
        <div className="accordion-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ml-auto">
                <div className="accordion my-3" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link w-100 text-primary text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Kidney
                          <i className="ni ni-bold-down float-right" />
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body opacity-8 pl-4">
                        <Link
                          to="/about"
                          style={{color: 'orange'}}
                        >
                          About
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link w-100 text-primary text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Bone-marrow
                          <i className="ni ni-bold-down float-right" />
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body opacity-8">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link w-100 text-primary text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Cadaver
                          <i className="ni ni-bold-down float-right" />
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body opacity-8">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordian end */}
        <br />
        <br />
        <button
          class="btn btn-outline-danger btn-sm"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
      </Modal>
    </>
  );
}
