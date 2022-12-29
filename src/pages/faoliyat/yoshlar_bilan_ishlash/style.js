import styled from "styled-components";

export const YoshlarWrapper = styled.div`
  .container {
    .wrap-card {
      display: flex;
      justify-content: space-between;
      margin: 80px 0;

      .left-content {
        width: 40%;
        p{
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 27px;
          text-transform: uppercase;
          color: #37363C;
        }
      }

      .right-video {
        position: relative;
      }
    }
  }
`