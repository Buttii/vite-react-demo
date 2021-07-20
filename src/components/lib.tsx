import React from "react";
import styled from "@emotion/styled"
import {Spin} from "antd";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FullPageLoading = () => {

    return <FullPage>
        <Spin/>
    </FullPage>
}