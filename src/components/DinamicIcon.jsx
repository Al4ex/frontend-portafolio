import React from 'react'
import * as SimpleIcon from "react-icons/si";

const DinamicIcon = ({ icon, index }) => {
    const Icon = SimpleIcon[icon];
  return (
    <>
      <Icon />
    </>
  );
}

export default DinamicIcon