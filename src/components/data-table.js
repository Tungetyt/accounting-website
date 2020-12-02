import { useIntl } from 'gatsby-plugin-intl';
import MUIDataTable from 'mui-datatables';
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function DataTable() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            pricesSection {
              dataTable
              offers
              prices
              specialOffer
            }
          }
        }
      }
    }
  }
`);
  const allMarkdownRemark = data?.allMarkdownRemark;
  const { pricesSection } = allMarkdownRemark
    ?.edges[1]
    ?.node
    ?.frontmatter;
  console.log('pricesSection', pricesSection);
  const intl = useIntl();
  const SECTION_DATA_TABLE = 'pricesSection.dataTable';
  const columns = [
    {
      name: 'offer',
      label: pricesSection?.dataTable[0] || 'Oferta',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'price',
      label: pricesSection?.dataTable[1] || 'Cena',
      options: {
        filter: false,
        sort: false,
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
    />
  );
}
