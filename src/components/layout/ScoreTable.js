import React from 'react';

import { Table } from 'semantic-ui-react';

import { scoreTableDetailsPropType } from '../common';

function ScoreTable({ details }) {
  return (
    <Table
      basic="very"
    >
      <Table.Body>
        {details.map((detail) => (
          <Table.Row
            key={detail.key}
          >
            <Table.Cell>{detail.text}</Table.Cell>
            <Table.Cell><b>{detail.value}</b></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

ScoreTable.propTypes = {
  details: scoreTableDetailsPropType.isRequired,
};

export default ScoreTable;
