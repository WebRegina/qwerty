import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddElement() {
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [price, setPrice] = useState();
  const [oldPrice, setOldPrice] = useState();
  const [sale, setSale] = useState();

  const prev = useNavigate();
  const sendData = (e) => {
    e.preventDefault();
    const newData = { title, img, price, text, oldPrice, sale };
    fetch("  http://localhost:3000/allproducts", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }).then(() => {
      prev("/");
    });
  };

  return (
    <>
      <div className="add-box container">
        <h4>New element</h4>
        <div className="add-wrapper">
          <div className="preview-box">
            <h6>Preview</h6>
            <div className="card">
              <img src={img} alt="" />
              <h2 className="card-title">{title}</h2>
              <div className="prices-box">
                <div className="p-left">
                  <span>
                    <h5>Oldprice:</h5>
                    <h3>{oldPrice}</h3>
                  </span>
                  <span>
                    <h5>Price:</h5>
                    <h3>{price}</h3>
                  </span>
                </div>

                <div className="p-right">
                  <span>
                    <h5>Sale:</h5>
                    <h4>{sale}</h4>
                  </span>

                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="form-box">
            <form onSubmit={sendData}>
              <div className="inputs-box">
                <div className="inputs">
                  <label htmlFor="">Upload img link:</label>
                  <input
                    required
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="img link:"
                    type="text"
                  />
                </div>
              </div>
              <div className="inputs-box">
                <div className="inputs">
                  <label htmlFor="">name:</label>
                  <input
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title:"
                    type="text"
                  />
                </div>
              </div>
              <div className="inputs-box">
                <div className="inputs">
                  <label htmlFor="">oldPrice:</label>
                  <input
                    required
                    value={oldPrice}
                    onChange={(e) => setOldPrice(e.target.value)}
                    placeholder="OdPrice:"
                    type="text"
                  />
                </div>
              </div>
              <div className="inputs-box">
                <div className="inputs">
                  <label htmlFor="">price:</label>
                  <input
                    placeholder="price:"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="inputs-box">
                <div className="inputs">
                  <label htmlFor="">sale:</label>
                  <input
                    placeholder="sale:"
                    required
                    value={sale}
                    onChange={(e) => setSale(e.target.value)}
                    type="text"
                  />
                </div>
              </div>
              <div className="item-box">
                <button>create item</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddElement;
