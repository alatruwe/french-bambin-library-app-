import React from "react";
import { withRouter } from "react-router-dom";
import ItemsApiService from "../../services/items-api-services";
import "./Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userHistory: false,
      deleted: false,
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  // redirect to SendRequestForm
  handleSendRequest = (event) => {
    event.preventDefault();
    const id = this.props.id;
    this.props.history.push({
      pathname: `/request`,
      itemId: id,
    });
  };

  // API call to delete data
  handleDeleteItem = (event) => {
    event.preventDefault();
    console.log("Item deleted");
    const id = this.props.id;
    ItemsApiService.deleteItem(id).then(() => {
      this.setState({ deleted: true });
    });
  };

  // button styling
  buttonsColors = () => {
    let colors = [
      "#FD0100",
      "#F76915",
      "#EEDE04",
      "#A0D636",
      "#2FA236",
      "#333ED4",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  };

  renderDeleteButton() {
    return (
      <div>
        <button
          className="btn"
          type="button"
          style={{ color: this.buttonsColors() }}
          onClick={this.handleDeleteItem}
        >
          Delete item
        </button>
      </div>
    );
  }
  renderRequestButton() {
    return (
      <div>
        <button
          className="btn"
          type="button"
          style={{
            color: this.buttonsColors(),
          }}
          onClick={(e) => this.handleSendRequest(e)}
        >
          Send a request
        </button>
      </div>
    );
  }

  render() {
    return (
      <section className="item">
        <div className="item-vertical-border"></div>
        <div className="item-details">
          <h3 className="item-title">{this.props.title}</h3>
          <p className="item-text">{this.props.description}</p>
          {this.props.userHistory
            ? this.renderDeleteButton()
            : this.renderRequestButton()}
          {this.state.deleted && <p>Deleted!</p>}
        </div>
      </section>
    );
  }
}

export default withRouter(Item);
