import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextareaAutosize, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
export type RowCardProps = {
  items: string[];
  onSelect: (item: string) => void;
};

export const RowCard = ({ items, onSelect }: RowCardProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <IconButton aria-label="emoji">
          <EmojiEmotionsIcon />
        </IconButton>
        <Typography>Accordion Header</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextareaAutosize 
          minRows={3} 
          style={{ width: '100%', backgroundColor: '#333333', color: 'white' }} 
          placeholder="Expanded content..."
        />
        {/* <table>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} onClick={() => onSelect(item)}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </AccordionDetails>
    </Accordion>
  );
};
export default RowCard;
