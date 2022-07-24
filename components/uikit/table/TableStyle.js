import styled from "styled-components";
import { device } from "./device";

export const TableWrapper = styled.table`
  border: 1px solid #ddd;
  border-collapse: collapse;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  margin-bottom: 50px;

  & a {
    display: contents;
  }

  & thead {
    border-bottom: 2px solid #52cc9f;
    background-color: rgba(82, 204, 159, 0.3);
    color: #52cc9f;

    @media ${device.tablet} {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    & th {
      font-size: 0.85em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 0.625em;
      text-align: center;
    }
  }

  & tbody {
    & tr {
      background-color: #f8f8f8;
      border: 1px solid #ddd;
      padding: 0.35em;

      @media ${device.tablet} {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.625em;
      }

      & td {
        padding: 0.625em;
        text-align: center;

        @media ${device.tablet} {
          border-bottom: 1px solid #ddd;
          display: block;
          font-size: 0.8em;
          text-align: left;
        }

        &:last-child {
          @media ${device.tablet} {
            border-bottom: 0;
          }
        }

        &::before {
          @media ${device.tablet} {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    border: 0;
  }
`;
