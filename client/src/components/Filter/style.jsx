import styled from "styled-components";
import {Checkbox} from "antd";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #fff;
  border-radius: 8px;
  padding:20px;
`;

export const CheckboxContainer = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
`

export const CheckboxTitle = styled.p`
  margin: 0 0 15px 0;
  font-size: 1rem;
  line-height: 1;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0;
  opacity: 1;
  text-transform: none;
  vertical-align: unset;
  text-decoration: none;
  color: rgb(52, 71, 103);
  font-weight: 600;
`;