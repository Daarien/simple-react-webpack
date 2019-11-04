import "regenerator-runtime/runtime";
import React from "react";
import {
  Table,
  Form,
  Tabs,
  Tab,
  Spinner,
  Button,
  Modal,
  Col
} from "react-bootstrap";
import { take } from "../../utils/funx";

const api = "http://localhost:3001/books";

const status = {
  none: "none",
  loading: "loading",
  success: "success",
  error: "error"
};

const defaultUserInput = {
  title: "",
  author: ""
};

export default class Database extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      mode: "add",
      userInput: defaultUserInput,
      status: status.none,
      data: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.status === status.success) {
      return {
        userInput: defaultUserInput
      };
    }
    return null;
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    const shouldRefreshData =
      this.state.status === status.success &&
      prevState.status !== status.success;
    if (shouldRefreshData) {
      this.getData();
    }
  }

  getData = async () => {
    const data = await take(api);
    if (data) {
      this.setState({ data });
    }
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState(state => ({
      userInput: { ...state.userInput, [name]: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, author } = this.state.userInput;
    if (title && author) {
      this.addNewItem({ title, author });
    }
  };

  addNewItem = async item => {
    await this.setState({ status: status.loading });

    const r = await take(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });

    if (r && typeof r === "object") {
      this.setState({ status: status.success });
    } else {
      this.setState({ status: status.error });
    }
  };

  closeErrorMessage = () => {
    this.setState({
      status: status.none
    });
  };

  handleModeSelect = key => {
    this.setState({ mode: key });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Tabs onSelect={this.handleModeSelect} activeKey={this.state.mode}>
          <Tab title="Add new book" eventKey="add" />
          <Tab title="Edit book" eventKey="edit" />
          <Tab title="Delete book" eventKey="delete" />
        </Tabs>
        {/** */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  value={this.state.userInput.title}
                  onChange={this.handleInput}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  name="author"
                  value={this.state.userInput.author}
                  onChange={this.handleInput}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Button
              type="submit"
              disabled={this.state.status === status.loading}
            >
              {this.state.status === status.loading ? (
                <Spinner animation="border" />
              ) : (
                <span>Add New Book</span>
              )}
            </Button>
          </Form.Row>
        </Form>
        {/** */}
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ErrorModal
          show={this.state.status === status.error}
          hide={this.closeErrorMessage}
        />
      </div>
    );
  }
}

function ErrorModal({ show, hide }) {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Title closeButton>Alert Error</Modal.Title>
      <Modal.Body>Operation failed !</Modal.Body>
      <Modal.Footer>
        <Button onClick={hide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
