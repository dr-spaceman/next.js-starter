import Layout from 'components/Layout'
import { Form, FormGroup, TextInput, SubmitRow } from 'components/Form'
import Code, { CodeBlock } from 'components/Code'
import Button from 'components/Button'

export default function FormComponent() {
  return (
    <Layout>
      <h1>Form</h1>
      <Form onSubmit={() => console.log('Form submit')}>
        <FormGroup
          label="Full Name"
          input={<TextInput name="name" placeholder="Your name" />}
        />
        <FormGroup
          label="Feedback"
          input={<TextInput name="feedback" multiline={true} rows={3} />}
        />
        <FormGroup
          label="Email Address"
          input={<TextInput type="email" name="email" />}
        />
        <SubmitRow>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </SubmitRow>
      </Form>
      <CodeBlock>
        <Code>{`<Form onSubmit={() => console.log('Form submit')}>
  <FormGroup
    label="Name"
    input={<TextInput name="name" placeholder="Your name" />}
  />
  <FormGroup
    label="Feedback"
    input={<TextInput name="feedback" multiline={true} rows={2} />}
  />
  <FormGroup label="Email" input={<TextInput type="email" name="email" />} />
  <SubmitRow>
    <Button variant="contained" color="primary">
      Submit
    </Button>
  </SubmitRow>
</Form>`}</Code>
      </CodeBlock>
    </Layout>
  )
}
