import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Table } from "react-bootstrap";

function App() {
  const [time, setTime] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://imsakiyah-api.santrikoding.com/imsyakiyah?state=6LoSW8f3n%252F%252FZESP8H%252B5pWRA%252F%252BemLrg67rbWZWm9%252Fx2KZ97lqEpSeRiH94WyxnOQyTNZX%252FEsObmFTFtc26hxbZQ%253D%253D&city=2cpEiccS0pLhJnifcoRhupsrOTAXLHI7hiO7oQWM91iFx9dNB%252FZeF0AG2SleWRgNOI5y6sk6gS8UAHFQOBZDfg%253D%253D&year=2022"
      )
      .then((response) => {
        console.log(response.data.data);
        setTime(response.data.data);
      });
  }, []);
  return (
    <Container className="mt-3">
      <Row>
        <h1 className="text-center">Jadwal Imsakiyah Temanggung 2022</h1>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Tanggal</th>
                    <th>Imsyak</th>
                    <th>Terbit</th>
                    <th>Dhuha</th>
                    <th>Subuh</th>
                    <th>Dzuhur</th>
                    <th>Ashar</th>
                    <th>Maghrib</th>
                    <th>Isya</th>
                  </tr>
                </thead>
                <tbody>
                  {time.map((tim, index) => (
                    <tr key={tim.id}>
                      <td>{index + 1}</td>
                      <td className="text-left">{tim.date}</td>
                      <td className="text-center">{tim.imsak}</td>
                      <td className="text-center">{tim.syuruk}</td>
                      <td className="text-center">{tim.dhuha}</td>
                      <td className="text-center">{tim.subuh}</td>
                      <td className="text-center">{tim.dzuhur}</td>
                      <td className="text-center">{tim.ashar}</td>
                      <td className="text-center">{tim.maghrib}</td>
                      <td className="text-center">{tim.isya}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
