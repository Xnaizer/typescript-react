import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";


function App() {

  const customForm = useRef<FormHandle>(null);

  const input  = useRef<HTMLInputElement>(null);
  
  function handleSave(data:unknown) {
    const extractData = data as {name: string; age:string;};
    customForm.current?.clear();
  }
  return (
    <>
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="nama" label="Enter your name" type="textarea"/>
        <Input id="age" label="enter your age" type="number" />
        <Input id="TestRef" label="enter your Ref" ref={input} />
        <p>
          <Button href="https://google.com">A Link</Button>
        </p>
      </Form>
 

    </main>
    <Container   as='button' type='submit'>Add Button</Container>
    </>
  )
}

export default App;
