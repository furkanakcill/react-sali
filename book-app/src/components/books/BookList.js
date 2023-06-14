import React, { Component } from "react";
import { connect } from "react-redux";

export default class BookList extends Component {
  
  componentDidMount() {
    this.props.actions.getBooks();
  }

  render() {
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
        .bcontent {
            margin-top: 10px;
        }
        .card {
            width: 400px;
            margin-bottom: 10px;
        }.."
        `,
          }}
        />
        <div className="container bcontent">
          <div className="row">
            {this.props.books.map((book) => (
            <div className="col-sm-4">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-sm-5">
                    <img className="card-img" src="" alt="Suresh Dasari Card" />
                  </div>
                  <div className="col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title">Başlik</h5>
                      <p className="card-text">
                        Suresh Dasari is a founder and technical lead developer
                        in tutlane.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Detay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    books: state.bookListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBooks: bindActionCreators(bookActions.getBooks, dispatch),
    },
  };
}

