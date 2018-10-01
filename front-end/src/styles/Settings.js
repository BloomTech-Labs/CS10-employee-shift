import styled from "styled-components";

import { device } from "./globals.js";

// STYLES FOR SETTINGS PAGE

export const SettingsContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const FormItem = styled.div`
  min-width: 250px;
  padding: 5%;
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20%;
`;
