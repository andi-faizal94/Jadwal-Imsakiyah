import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import Title from "../Title";
import MainHead from "../MainHead";
import MainCell from "../MainCell";
import "../Table/Box.css";
function MainTable() {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://imsakiyah-api.santrikoding.com/imsyakiyah?state=6LoSW8f3n%252F%252FZESP8H%252B5pWRA%252F%252BemLrg67rbWZWm9%252Fx2KZ97lqEpSeRiH94WyxnOQyTNZX%252FEsObmFTFtc26hxbZQ%253D%253D&city=2cpEiccS0pLhJnifcoRhupsrOTAXLHI7hiO7oQWM91iFx9dNB%252FZeF0AG2SleWRgNOI5y6sk6gS8UAHFQOBZDfg%253D%253D&year=2022"
      )
      .then((response) => {
        setTimes(response.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="d-flex flex-column justify-content-center align-items-center main">
        <div className="box"></div>
        <h1 className="text-center text-success"> Loading ...</h1>
      </div>
    );
  if (error) console.error("Error Fetching Data in", error);
  return (
    <Container className="mt-3 mb-3 bg-success">
      <Title />
      <Row className="mt-4 mb-2">
        <Col md="{12}">
          <Card className="mb-4 border-0 rounded shadow-sm">
            <Card.Body className="mb-1">
              <Table responsive striped bordered hover className="table">
                <MainHead />
                <MainCell data={times} />
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MainTable;
