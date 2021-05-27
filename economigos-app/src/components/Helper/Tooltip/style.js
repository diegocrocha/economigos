import styled from "styled-components";

export const Container = styled.div`
    position: relative;
  span {
    width: 160px;
    background-color: #32A287;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.4s;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);

    color: white;

    &::before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0 6px;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      position: absolute;
    }
  }
  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`