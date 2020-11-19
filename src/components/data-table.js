import { useIntl } from 'gatsby-plugin-intl';
import MUIDataTable from 'mui-datatables';
import * as React from 'react';

export default function DataTable() {
  const intl = useIntl();
  const SECTION_DATA_TABLE = 'pricesSection.dataTable';
  const columns = [
    {
      name: 'offer',
      label: intl.formatMessage({ id: `${SECTION_DATA_TABLE}.offer` }),
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'price',
      label: intl.formatMessage({ id: `${SECTION_DATA_TABLE}.price` }),
      options: {
        filter: false,
        sort: true,
      },
    },
  ];

  const numOfOffers = 3;
  const translateCollection = (idPart) => Array(numOfOffers).fill(null).map((line, i) => (
    intl.formatMessage({ id: `${idPart}.${i}` })
  ));
  const section = 'pricesSection';
  const offers = translateCollection(`${section}.offers`);
  const prices = translateCollection(`${section}.prices`);

  const rows = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numOfOffers; i++) {
    rows.push({ id: i, offer: offers[i], price: prices[i] });
  }

  const options = {
    download: false,
    filter: false,
    filterArrayFullMatch: false,
    print: false,
    responsive: 'simple',
    search: false,
    viewColumns: false,
    selectableRowsHeader: false,
    selectableRows: 'none',
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => (
      <></>
    ),
  };

  return (
    <MUIDataTable
      data={rows}
      columns={columns}
      options={options}
      style={{ backgroundColor: 'red' }}
    />
  );
}
