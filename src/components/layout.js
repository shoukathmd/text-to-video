import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const SectionCta = styled.section`
  padding: 0.5rem 0 0.5rem;
`;

const Container = styled.div`
  max-width: 130rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

const HeadingSecondary = styled.h2`
  color: inherit;
  margin-bottom: 3.2rem;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 3.6rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 4.8rem;
  }
`;

const Cta = styled.div`
  display: grid;
  grid-template-columns: 40fr 60fr;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  border-radius: 11px;
  background-color: rgb(167, 227, 167);
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const CtaTextBox = styled.div`
  padding: 4.8rem 6.4rem 6.4rem 6.4rem;
  color: black;
`;

const CtaForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  color: inherit;
  border: none;
  background-color: #fdf2e9;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const CtaImgBox = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const Video = styled.video`
  width: 100%;
  border-radius: 1rem;
  display: cover;
`;

const Svg = styled.svg`
  stroke: black;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  align-self: end;
`;

const Path = styled.path`
  /* Add your styles here */
`;

const Button = styled.button`
  background-color: rgb(70, 223, 70);
  color: black;
  justify-self: center;
  align-self: center;
  grid-column: 1 / 3;
  padding: 1.2rem;
  width: 25rem;
  margin-bottom: 2rem;
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: #555;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 1.2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-column: 1;
  }
`;

const Layout = () => {
  return (
    <SectionCta>
      <Container>
        <Cta>
          <CtaTextBox>
            <HeadingSecondary>Free AI Video Generator</HeadingSecondary>
            <CtaForm action="#">
              <div>
                <Label htmlFor="Company Information">Company Info.</Label>
                <TextArea rows="3" cols="60" required />
              </div>
              <div>
                <Label htmlFor="Product Information">Product Information</Label>
                <TextArea rows="3" cols="60" required />
              </div>
              <div>
                <Label htmlFor="Target Group Info.">Target Group Profile</Label>
                <TextArea rows="3" cols="60" required />
              </div>
            </CtaForm>
          </CtaTextBox>
          <CtaImgBox role="img" aria-label="Woman enjoying food">
            <Video src="ai-video.mp4" controls loop autoPlay muted />
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <Path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
              <title>Download Video</title>
            </Svg>
          </CtaImgBox>
          <Button>Generate Video</Button>
        </Cta>
      </Container>
    </SectionCta>
  );
};

export default Layout;
