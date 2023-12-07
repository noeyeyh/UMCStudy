import styled from 'styled-components';
import { tvPrograms } from "../../Data/tvDummy";
import { Program } from "./Program";

export const TV = () => {
    return (
      <ProgramLayout>
        {tvPrograms.results.map((program) => {
          return (
            <Program
              backImg={program.backdrop_path}
              title={program.title}
              star={program.vote_average}
              detail={program.overview}
            />
          );
        })}
      </ProgramLayout>
    );
  };

  const ProgramLayout = styled.div`
    display: flex;
    margin: 0px;
    height: 100vh;
    background-color: #22254b;
    flex-wrap: wrap;
    align-content: flex-start;
  `;
  