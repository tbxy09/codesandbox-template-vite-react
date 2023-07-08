import React, { useState } from "react";
import { Typography, TextareaAutosize, IconButton, Badge } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGlobe, faClock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Table, Accordion, AccordionItem, AccordionHeader, AccordionPanel } from "@fluentui/react-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  gap: 0px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 0.2em;
  color: palevioletred;
`;

const Subtitle = styled.text`
  display: flex;
  align-items: center;
  font-size: 0.01em;
  color: palevioletred;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1px;
  font-size: 0.2em;
  background-color: #e9e9e9;
`;

const StatusBar = styled.div`
  align-self: flex-end;
  font-size: 0.2em;
  color: gray;
`;

export type RowCardProps = {
  items: string[];
  onSelect: (item: string) => void;
  type: string;
};

export const RowCard = ({ items, onSelect, type }: RowCardProps) => {
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <Accordion collapsible>
      <AccordionItem value="1">
        <AccordionHeader expandIconPosition="end">
          <Container>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
            <Footer>
              <div>Footer text and html</div>
            </Footer>
          </Container>
        </AccordionHeader>
        <AccordionPanel>
          {type === "table" && (
            <Table>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} onClick={() => onSelect(item)}>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {type === "textarea" && (
            <>
              <TextareaAutosize
                minRows={3}
                style={{
                  width: "100%",
                  backgroundColor: "#333333",
                  color: "white",
                }}
                placeholder="Expanded content..."
                value={textareaValue}
                onChange={handleTextareaChange}
              />
              <StatusBar>{textareaValue.length} tokens</StatusBar>
            </>
          )}
          {type === "accordion" && (
            <Accordion collapsible>
              <AccordionItem value="1">
              <AccordionHeader expandIconPosition="end">
                  <Typography>Sub Accordion Header</Typography>
                </AccordionHeader>
                <AccordionPanel>Sub Accordion Content</AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default RowCard;
