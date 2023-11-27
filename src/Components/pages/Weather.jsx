import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

function Weather() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const [error, setError] = useState(null);
  const API_KEY = 'daad2fbe05f3de020251a290a477db88';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const searchWeather = async (e) => {
    if (e.key === 'Enter') {
      try {
        axios.get(url).then((data) => {
          setResult(data);
          console.log(data);
        });
      } catch (err) {
        setError(err);
      }
    }
  };

  return (
    <Container>
      <Content>
        <MyInput
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {error && <h1>{error}</h1>}
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temperature">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
            </div>
            <div className="sky">{result.data.weather[0].main}</div>
          </ResultWrap>
        )}
      </Content>
    </Container>
  );
}

export default Weather;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Content = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 20px;
`;
const MyInput = styled.input`
  padding: 16px;
  border: 2px black solid;
  border-radius: 16px;
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  border: 1px black solid;
  padding: 10px;
  border-radius: 8px;
  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
`;
