import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class BookDetail extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                className="img-fluid img-thumbnail w-25 h-auto mb-5"
                src="https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg"
                // alt={product.title}
              />
            </div>
            <div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h2>Başlık</h2>
                <p>Yazar:</p>
                <p>Description:</p>
                <button className="btn btn-danger" onClick="{addToFavorites}">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;
