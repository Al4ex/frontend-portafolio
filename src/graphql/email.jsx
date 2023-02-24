import { gql } from '@apollo/client';

export const SEND_DATA = gql`
  mutation ($name: String!, $email: String!, $message: String!) {
    sendEmail(name: $name, email: $email, message: $message) {
      id
      name
      message
      email
    }
  }
`;
