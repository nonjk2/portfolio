import styled from "styled-components";

export const StudyCardListContainer = styled.div`
  flex: 3;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
`;
export const CardContainer = styled.div`
  width: 25%;
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    /* Apply mobile styles */
    width: 100%;
  }
`;
export const SearchCardContainer: any = styled.div`
  box-sizing: border-box;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s;
  perspective: 1000px;
  &:hover {
    transform: perspective(500px) scale3d(1.1, 1.1, 1.1);
    box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.6);
  }
  .blog-card {
    height: 40vh;
    /* display: flex;
    flex-direction: column; */
    background-color: #fff;
    margin: 1rem auto;
    box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
    margin-bottom: 1.6%;
    cursor: pointer;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;

    a {
      color: blue;
      &:hover {
        color: blue;
      }
    }
    &:hover {
      .photo {
        transform: scale(1.3) rotate(3deg);
      }
    }
    .meta {
      position: relative;
      z-index: 0;
    }
    .photo {
      position: relative;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 150px;
      background-size: cover;
      background-position: center;
      transition: transform 0.2s;
    }
    .details,
    .details ul {
      margin: auto;
      padding: 0;
      list-style: none;
    }
    .details {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -120%;
      margin: auto;
      transition: all 0.1s;
      background: rgba(0, 0, 0, 0.6);
      color: #000;
      padding: 10px;
      width: 100%;
      font-size: 0.9rem;
      a {
        text-decoration: none;
      }
      ul li {
        display: inline-block;
      }
      .author:before {
        margin-right: 10px;
        color: #000;
      }

      .date:before {
        margin-right: 10px;
        color: #000;
      }

      .tags {
        ul:before {
          margin-right: 10px;
        }
        li {
          margin-right: 2px;
          color: #000;
          &:first-child {
            margin-left: -4px;
          }
        }
      }
    }
    .description {
      padding: 1rem;
      background-color: #fff;
      position: relative;
      z-index: 1;
      color: #000;
      h1,
      h2 {
        /* font-family: Poppins, sans-serif; */
      }
      h1 {
        line-height: 1;
        margin: 0;
        font-size: 1.2rem;
      }
      span {
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        color: #000;
        margin-top: 5px;
      }
      h2 {
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        color: #000;
        margin-top: 5px;
      }
      .read-more {
        text-align: right;
        a {
          color: #000;
          display: inline-block;
          position: relative;
          &:after {
            margin-left: -10px;
            opacity: 0;
            vertical-align: middle;
            transition: margin 0.3s, opacity 0.3s;
          }

          &:hover:after {
            margin-left: 5px;
            opacity: 1;
          }
        }
      }
    }
    p {
      position: relative;
      margin: 1rem 0 0;
      &:first-of-type {
        margin-top: 1.25rem;
        &:before {
          position: absolute;
          height: 5px;
          background: ${(props: any) => props.frameType};
          width: 135px;
          top: -0.75rem;
          border-radius: 3px;
        }
      }
    }
    &:hover {
      .details {
        left: 0%;
      }
    }
    .SearchCard {
      width: 1200px;
      display: flex;
      flex-direction: column;
      .imgContainer {
        img {
          width: 150px;
        }
      }
      .SearchCardAbout {
      }
    }
    @media (min-width: 640px) {
      flex-direction: row;
      max-width: 700px;
      .meta {
        flex-basis: 40%;
        height: auto;
      }
      .description {
        flex-basis: 60%;
        &:before {
          transform: skewX(-3deg);

          width: 30px;
          position: absolute;
          left: -10px;
          top: 0;
          bottom: 0;
          z-index: -1;
        }
      }
    }
  }
`;
