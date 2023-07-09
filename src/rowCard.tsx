import { useState } from "react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGlobe, faClock } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
  Table,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Text,
  Button,
  Field,
  ProgressBar,
  makeStyles,
} from "@fluentui/react-components";
import { FlagRegular, Important16Regular } from "@fluentui/react-icons";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
//   padding: 5px;
//   width: 100%;
//   gap: 0px;
// `;

// const Title = styled.h2`
//   display: flex;
//   align-items: center;
//   font-size: 0.2em;
//   // color: palevioletred;
// `;

// const Subtitle = styled.text`
//   display: flex;
//   align-items: center;
//   font-size: 0.01em;
//   // color: palevioletred;
// `;

// const Footer = styled.footer`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   padding: 1px;
//   font-size: 0.2em;
//   // background-color: #e9e9e9;
// `;

// const StatusBar = styled.div`
//   align-self: flex-end;
//   font-size: 0.2em;
//   color: gray;
// `;

export type RowCardProps = {
  items: string[];
  onSelect: (item: string) => void;
  type: string;
};

const useStyles = makeStyles({
  thickProgressBar: {
    height: "20px", // Adjust this value to change the thickness of the progress bar
    backgroundColor: "green", // Add a background color to the progress bar
    // background-color:"green"// color: "yellow",
  },
});
export const RowCard = ({ items, onSelect, type }: RowCardProps) => {
  const [textareaValue, setTextareaValue] = useState("");
  const styles = useStyles();
  const handleTextareaChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextareaValue(event.target.value);
  };
  return (
    <Field validationMessage="Large ProgressBar" validationState="none">
      <ProgressBar
        className={styles.thickProgressBar}
        shape="square"
        color="error"
        value={0.7}
      />
    </Field>
    // <ProgressBar className={styles.thickProgressBar} value={50} />
  );
  return (
    <Accordion collapsible>
      <AccordionItem value="1">
        <AccordionHeader expandIconPosition="end">
          <Container>
            <Title>
              <Button icon={<FlagRegular />} />
              Title
              <Important16Regular />
            </Title>
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
              <Text>
                <textarea
                  rows={3}
                  style={{
                    width: "100%",
                    backgroundColor: "#333333",
                    color: "white",
                  }}
                  placeholder="Expanded content..."
                  value={textareaValue}
                  onChange={handleTextareaChange}
                />
              </Text>
              <StatusBar>{textareaValue.length} tokens</StatusBar>
              <Field>
                <ProgressBar className={styles.thickProgressBar} value={0.5} />
              </Field>
            </>
          )}
          {type === "accordion" && (
            <Accordion>
              <AccordionItem value="1">
                <AccordionHeader expandIconPosition="end">
                  <Text>Sub Accordion Header</Text>
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
