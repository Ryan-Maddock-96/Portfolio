import { useRef } from 'react';
import { Section } from './Styles/Global.style';
import { SectionTitle, Text } from './Styles/Text';
import { StyledForm, InputContainer } from './Styles/Forms';
import Input from './Input';
import { Button } from './Styles/Button.style';
import { sectionSpacing } from './Styles/Variables';

// eslint-disable-next-line react/prop-types
function Contact({ isMobile }) {
  const formRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);
    const name = data.get('name');
    const subject = data.get('subject');
    const message = data.get('message');
    window.location.href = `mailto:RyanMaddockDev@hotmail.com?subject=Portfolio Message from - ${name} - ${subject}&body=${message}`;
  };

  return (
    <Section gap="25px" margin={`${sectionSpacing} 0 0`}>
      <SectionTitle margin={isMobile ? '0 25px' : '0'}>Contact Me!</SectionTitle>
      <Text margin={isMobile ? '0 25px' : '0'} textAlign="center">
        Please feel free send me a message and I&apos;ll get back to you!
      </Text>
      <StyledForm onSubmit={submitHandler} ref={formRef}>
        <InputContainer>
          <Input type="text" name="name" labelText="Name:" />
          <Input type="text" name="subject" labelText="Subject:" />
        </InputContainer>
        <Input type="textarea" name="message" labelText="Message:" />
        <Button type="submit">Send</Button>
      </StyledForm>
    </Section>
  );
}

export default Contact;
