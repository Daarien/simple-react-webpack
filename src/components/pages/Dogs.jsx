import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { take, showError } from "../../utils/funx";

export default class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      url: ""
    };
  }

  componentDidMount = () => this.showDog();

  showDog = () => {
    this.setState({ loading: true }, () => {
      try {
        take("https://dog.ceo/api/breeds/image/random").then(data => {
          if (data.status === "success") {
            this.setState({ url: data.message, loading: false });
          }
        });
      } catch (error) {
        showError("getting dog failed", error);
        this.setState({ loading: false });
      }
    });
  };

  render() {
    const { loading, url } = this.state;
    return (
      <div id="dogs-page">
        <img src={url} alt="random dog" />
        <Button onClick={this.showDog} disabled={loading}>
          {loading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            <span>Show dog</span>
          )}
        </Button>
      </div>
    );
  }
}
