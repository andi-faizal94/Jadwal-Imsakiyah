import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Table } from "react-bootstrap";

function App() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://imsakiyah-api.santrikoding.com/imsyakiyah?state=6LoSW8f3n%252F%252FZESP8H%252B5pWRA%252F%252BemLrg67rbWZWm9%252Fx2KZ97lqEpSeRiH94WyxnOQyTNZX%252FEsObmFTFtc26hxbZQ%253D%253D&city=2cpEiccS0pLhJnifcoRhupsrOTAXLHI7hiO7oQWM91iFx9dNB%252FZeF0AG2SleWRgNOI5y6sk6gS8UAHFQOBZDfg%253D%253D&year=2022"
      )
      .then((response) => {
        console.log(response.data.data);
        setTimes(response.data.data);
      });
  }, []);
  return (
    <Container className="mt-3">
      <h1 className="text-center">Jadwal</h1>
      <h1 className="text-center">Imsakiyah</h1>
      <h1 className="text-center">Kota Temanggung</h1>
      <h1 className="text-center"> Ramadhan 1443 H/2022 M</h1>
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Table responsive="sm" striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Ramadhan</th>
                    <th>Tanggal</th>
                    <th>Imsyak</th>
                    <th>Terbit</th>
                    <th>Subuh</th>
                    <th>Dhuha</th>
                    <th>Dzuhur</th>
                    <th>Ashar</th>
                    <th>Maghrib</th>
                    <th>Isya</th>
                  </tr>
                </thead>
                <tbody>
                  {times.map((time, index) => (
                    <tr key={time.id}>
                      <td>{index + 1}</td>
                      <td>{index + 1} Ramadhan 1443 H</td>
                      <td className="text-left">{time.date}</td>
                      <td className="text-center">{time.imsak}</td>
                      <td className="text-center">{time.syuruk}</td>
                      <td className="text-center">{time.subuh}</td>
                      <td className="text-center">{time.dhuha}</td>
                      <td className="text-center">{time.dzuhur}</td>
                      <td className="text-center">{time.ashar}</td>
                      <td className="text-center">{time.maghrib}</td>
                      <td className="text-center">{time.isya}</td>
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
