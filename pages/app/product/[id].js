import React from "react";
import Rating from "../../../components/base/Rating";

function ProductDetail() {
  return (
    <div className="min-vh-100">
      <div className="container margin-100">
        <p className="text-muted f-14 mb-5">
          Home {">"} category {">"} Shoes
        </p>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <img
                className="col-sm-6 img img-fluid rounded mb-4"
                src={require("../../../assets/images/Product Detail 1.svg")}
                alt="imgs"
              />
              <img
                className="col-sm-6 img img-fluid rounded mb-4"
                src={require("../../../assets/images/Product Detail 3.svg")}
                alt="imgs"
              />
              <img
                className="col-sm-6 img img-fluid rounded mb-4"
                src={require("../../../assets/images/Product Detail 2.svg")}
                alt="imgs"
              />
              <img
                className="col-sm-6 img img-fluid rounded mb-4"
                src={require("../../../assets/images/Product Detail 4.svg")}
                alt="imgs"
              />
            </div>
          </div>
          <div className="col-6">
            <h3 className="fw-600">Nike CruzrOne (Bright Crimson)</h3>
            <p className="f-16 text-muted">Nike</p>
            <div className="d-inline-flex d-flex mt-n ms-1">
              <Rating rating={5} />
              <p className="align-self-center f-12 text-muted"> &nbsp;(10)</p>
            </div>
            <p className={`text-muted f-16 ms-1 mt-2`}>Price</p>
            <h2 className="mt-n3">
              <b>$20</b>
            </h2>
            <p className={`f-16ms-1 mt-3`}>
              <b>Color</b>
            </p>
            <ul className={`mt-4 HorizontalList`}>
              <li>
                <button
                  className={`btn ColorOption rounded-circle`}
                  style={{ backgroundColor: "black" }}
                />
              </li>
              <li>
                <button
                  className={`btn ColorOption rounded-circle bg-danger`}
                ></button>
              </li>
              <li>
                <button
                  className={`btn ColorOption rounded-circle bg-primary`}
                ></button>
              </li>
              <li>
                <button
                  className={`btn ColorOption rounded-circle bg-success`}
                ></button>
              </li>
            </ul>
            <div className={`row Row  justify-content-start`}>
              <div className="col-sm-4">
                <p className={`f-16 ms-1 mt-2`}>
                  <b>Size</b>
                </p>
                <ul className={`HorizontalList d-flex justify-center`}>
                  <li>
                    <button
                      // onClick={this.handleClickQtyMin}
                      className={`btn ColorSelected rounded-circle selectedCount`}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  </li>
                  <li className="mt-2 mx-4">
                    <span>1</span>
                  </li>
                  <li>
                    <button
                      // onClick={this.handleClickQty}
                      className={`btn ColorSelected rounded-circle`}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </li>
                </ul>
              </div>
              {/* disini mulai baru */}
              <div className="col-sm-4">
                <p className={`f-16 ms-1 mt-2`}>
                  <b>Jumlah</b>
                </p>
                <ul className={`HorizontalList d-flex justify-center`}>
                  <li>
                    <button
                      // onClick={this.handleClickMin}
                      className={`btn ColorSelected rounded-circle selectedCount`}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  </li>
                  <li className="mt-2 mx-4">
                    <p className="f-16">1</p>
                  </li>
                  <li>
                    <button className={`btn ColorSelected rounded-circle`}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <button className={` BtnChart mt-2 me-2 mr-2`}>Chat</button>
              <button className={`BtnChart mt-2 me-2`}>Add to bag</button>
            </div>
            <button className={`BtnBuy mt-4`}>Buy Now</button>
          </div>
        </div>
        <h3 className="mt-3 fw-600">Informasi Produk</h3>
        <div>
          <p className="mt-3 f-20">
            <b>Condition</b>
          </p>
          <p className="mt-n3 c-red f-20">
            <b>New</b>
          </p>
          <p className="mt-3 f-20">
            <b>Description</b>
          </p>
          <p className="f-16 mt-n2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis
            laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Praesent sed enim vel turpis
            blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat.
            Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris
            vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl
            at, ornare suscipit magna. Donec non magna rutrum, pellentesque
            augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec
            pharetra quam. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac
            felis. In ultricies rutrum tempus. Mauris vel molestie orci.
          </p>
        </div>
        <h3 className="fw-600 mt-5">Product Review</h3>
        <div className="container" style={{ marginBottom: "70px" }}>
          <div className={`row Row`}>
            <div className="col-md-3 align-item-center justify-content-center">
              <h1 className="display-1 d-inline">
                <b>4.0</b>
              </h1>
              <p className="d-inline-block ms-1 mt-3 text-dark">
                <b>/ 5</b>
              </p>
              <div className={`mt-n2 ms-1 d-flex`}>
                <Rating rating={4} styling={"Star"} />
              </div>
            </div>

            <div className="col-md-3">
              <div className={`row Row`}>
                <div className="Side">
                  <div>
                    <i className={`fas fa-star Bintang`}></i>&nbsp; 5
                  </div>
                </div>
                <div className={`Middle`}>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        height: "10px",
                        width: "80%",
                        background: "#DB3022;",
                      }}
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className={`Side Right`}>
                  <div>4</div>
                </div>
                <div className={"Side"}>
                  <div>
                    <i className={`fas fa-star Bintang`}></i>&nbsp; 4
                  </div>
                </div>
                <div className={`Middle`}>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        height: "10px",
                        width: "0%",
                        background: "#DB3022;",
                      }}
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className={`Side Right`}>
                  <div>0</div>
                </div>
                <div className="Side">
                  <div>
                    <i className={`fas fa-star Bintang`}></i>&nbsp; 3
                  </div>
                </div>
                <div className={`Middle`}>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        height: "10px",
                        width: "0%",
                        background: "#DB3022;",
                      }}
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className={`Side Right`}>
                  <div>0</div>
                </div>
                <div className="Side">
                  <div>
                    <i className={`fas fa-star Bintang`}></i>&nbsp; 2
                  </div>
                </div>
                <div className={`Middle`}>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        height: "10px",
                        width: "0%",
                        background: "#DB3022;",
                      }}
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className={`Side Right`}>
                  <div>0</div>
                </div>
                <div className="Side">
                  <div>
                    <i className={`fas fa-star Bintang`}></i> &nbsp;1
                  </div>
                </div>
                <div className={`Middle`}>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        height: "10px",
                        width: "0%",
                        background: "#DB3022;",
                      }}
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className={`Side Right`}>
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ border: "1px solid #D4D4D4;" }} />
        <h1 className="fw-600 mt-4">You can also like this</h1>
        <p className="text-muted">You’ve never seen it before!</p>
      </div>
      <style jsx>
        {`
          .margin-100 {
            margin-top: 100px;
          }
          .text-muted {
            color: #9b9b9b;
          }

          .c-red {
            color: #db3022;
          }
          .f-14 {
            font-size: 14px;
          }
          .f-16 {
            font-size: 16px;
          }

          .f-20 {
            font-size: 20px;
          }
          .fw-600 {
            font-weight: 600;
          }
          ul.HorizontalList {
            min-width: 100%;
            list-style: none;
            margin-left: -40px;
          }

          ul.HorizontalList li {
            margin: 0 10px 0 0;
            display: inline;
          }

          .ColorSelected {
            width: 40px;
            height: 40px;
            border-spacing: 10px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }
          .ColorOption {
            display: inline-block;
            margin-top: -20px;
            width: 30px;
            height: 30px;
            outline: none;
          }

          .ColorOption:focus {
            width: 50px;
            height: 50px;
            border-spacing: 10px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }
          Row:after {
            content: "";
            display: table;
            clear: both;
          }

          .selectedCount {
            background: #d4d4d4;
            color: white;
          }

          .BtnChart {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 25px;
            width: 160px;
            height: 36px;
            font-size: 12px;
            background-color: #fff;
            border: 1px solid gray;
            color: gray;
            transition: background 0.5s;
          }

          .BtnChart:hover {
            border: 1px solid #db3022;
            background-color: #db3022;
            color: #fff;
            text-decoration: none;
          }

          .BtnBuy {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 25px;
            width: 330px;
            height: 36px;
            font-size: 12px;
            color: #fff;
            background-color: #db3022;
            border-color: #db3022;
            transition: background 0.5s;
          }

          .BtnBuy:hover {
            background-color: #ad1b0d;
            color: #fff;
            text-decoration: none;
          }

          .Side {
            float: left;
            width: 20%;
            margin-top: 10px;
          }

          .Right {
            text-align: right;
          }

          .Bintang {
            color: orange;
          }

          .Star {
            height: 20px;
          }

          .Middle {
            margin-top: 18px;
            float: left;
            width: 60%;
          }

          .BarContainer {
            width: 100%;
            background-color: #f1f1f1;
            text-align: center;
            color: white;
            border-radius: 25px;
          }

          .Bar {
            width: 0%;
            height: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default ProductDetail;
