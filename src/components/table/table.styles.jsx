import React from 'react';
import styled, { css } from 'styled-components';
import Mixins from '../theme/mixins';
import ExpandMoreIcon from '../../icons/expandMore';
import Pagination from '../pagination';
import Input from '../input';

export const Container = styled.div`
`;

export const Header = styled.div`
  ${Mixins.clearfix};
`;

export const TableWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.mercury};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: white;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
`;

export const TableContainer = styled.table`
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 14px;

  tr:nth-child(even) { background-color: ${props => props.theme.colors.wildSand}; }
  tr:hover { background-color: ${props => props.theme.colors.mercury}; }
`;

export const Th = styled.th`
  text-align: left;
  background-color: ${props => props.theme.colors.wildSand};
  padding: 10px 25px;
  white-space: nowrap;
`;

export const Td = styled.td`
  text-align: left;
  padding: 5px 25px;

  ${Mixins.mobile`
    padding: 10px 15px;
  `};

  &:hover {}
`;

export const HeadingButton = styled.button`
  padding: 0;
  font-weight: bold;
`;

export const SearchContainer = styled(Input)`
  margin-bottom: 20px;
  width: 200px;
  float: left;
`;

export const StyledArrowIcon = styled(({ active, ...props }) => <ExpandMoreIcon {...props} />)`
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-left: 5px;
  visibility: ${props => !props.active && css`hidden`};
  transform: ${props => !props.reversed && css`rotate(180deg)`};
`;

export const PaginationContainer = styled.div`
  font-size: 14px;
  line-height: 18px;
  height: 40px;
`;

export const PaginationInfo = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-left: 25px;
`;

export const StyledPagination = styled(Pagination)`
  float: right;
`;

export const RowsSelector = styled.select`
  border: none;
  background: none;
  margin-right: 10px;
`;
