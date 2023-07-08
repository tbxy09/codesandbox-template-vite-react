import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextareaAutosize, IconButton, Badge } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
// import styles from './RowCard.module.scss';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: #f9f9f9;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

// const Title = styled.h1`
//   font-size: 1.5em;
//   color: palevioletred;
// `;

// const Subtitle = styled.h2`
//   font-size: 1.2em;
//   color: palevioletred;
// `;

// const Footer = styled.footer`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   padding: 10px;
//   background-color: #e9e9e9;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: palevioletred;
`;

const Subtitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  color: palevioletred;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #e9e9e9;
`;

// In your component's render method:

export type RowCardProps = {
    items: string[];
    onSelect: (item: string) => void;
    type: string;
  };
  
  export const RowCard = ({ items, onSelect, type }: RowCardProps) => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Container>
            {/* <Headers> */}
              {/* <IconButton aria-label="emoji">
                <EmojiEmotionsIcon />
              </IconButton>
              <FontAwesomeIcon icon={faHome} /> */}
              <Title>
                <FontAwesomeIcon icon={faGlobe} /> Title
              </Title>
              <Subtitle>Subtitle</Subtitle>
            {/* </Header> */}
            <Footer>
              <FontAwesomeIcon icon={faClock} /> 
              <div>Footer text and html</div>
              <Badge badgeContent={4} color="primary" />
            </Footer>
          </Container>
        </AccordionSummary>
        <AccordionDetails>
          {type === 'table' && (
            <table>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} onClick={() => onSelect(item)}>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {(
            <TextareaAutosize 
              minRows={3} 
              style={{ width: '100%', backgroundColor: '#333333', color: 'white' }} 
              placeholder="Expanded content..."
            />
          )}
          {type === 'accordion' && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Sub Accordion Header</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Sub Accordion Content
              </AccordionDetails>
            </Accordion>
          )}
        </AccordionDetails>
      </Accordion>
    );
  };

export default RowCard;
