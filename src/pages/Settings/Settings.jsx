import React, { useState } from "react";
import BarterMenu from "components/BarterMenu";
import Header from "components/Header";
import SettingsStyled from "./Settings.styled";
import profileImg from "../../assets/img/button.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppSelector } from "../../lib/hooks";
import { UserState } from "../../lib/store";

function BartersPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { user } = useAppSelector((state) => state.authentication);

  return (
    <div>
      <Header />
      <SettingsStyled>
        <BarterMenu linkActive={"settings"} />
        <Form
          className="cont"
          style={{ padding: "30px", flex: "0.8", marginTop: "20px" }}
        >
          <div>
            <div className="info">
              <div>
                <h3>Profile settings</h3>
                <p>Here you can change profile inforamtion</p>
              </div>
            </div>
            <div className="settings">
              <div className="settings-main">
                <Form.Group className="mb-3">
                  <Form.Label className="h4">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    style={{ width: "50%" }}
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="h4">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    style={{ width: "50%" }}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Form.Group>
              </div>
              <div className="upload-pic">
                <input
                  type="file"
                  onChange={() => {}}
                  id="file"
                  style={{ display: "none" }}
                ></input>

                <label htmlFor="file">
                  <div className="DragText">
                    <div className="DragText Top">
                      <h3>Upload your photo</h3>
                      <img src={user.avatar} alt="" />

                      <div className="dragdrop">
                        <p>
                          <span>Drag drop</span> your file here or{" "}
                          <span>Browse</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* This is Grid system */}
          {/* <Container>
            Just mock of grid elements
            <Row>
              <Col className="border bg-secondary">1 of 2</Col>
              <Col className="border bg-secondary">2 of 2</Col>
            </Row>
            <Row>
              <Col className="border bg-primary">1 of 3</Col>
              <Col className="border bg-primary">2 of 3</Col>
              <Col className="border bg-primary">3 of 3</Col>
            </Row>
          </Container> */}
          {/* This is Navbat bootstrap */}
          {/* <Navbar className="bg-tertiary">

            <Container className="bg-secondary">
              <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as:{" "}
                  <span className="text-light">Ayirbasta user</span>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
        </Form>
      </SettingsStyled>
    </div>
  );
}

export default BartersPage;

