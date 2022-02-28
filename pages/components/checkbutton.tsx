import { useState } from 'react'
import Layout from 'components/Layout'
import CheckButton, { CheckButtonGroup } from 'components/CheckButton'
import Code, { CodeBlock } from 'components/Code'

export default function CheckButtonComponent() {
  const [checked, setChecked] = useState({ foo: true, bar: false })
  const [radio, setRadio] = useState('has_boat')
  return (
    <Layout>
      <h1>CheckButton</h1>
      <p>A button-like alternative to a checkbox.</p>

      <h2>Checkbox-Like Example</h2>
      <CheckButtonGroup>
        <CheckButton
          name="foo"
          value="foo"
          checked={checked.foo}
          onChange={isChecked => setChecked(c => ({ ...c, foo: isChecked }))}
        >
          Foo
        </CheckButton>
        <CheckButton
          name="bar"
          value="bar"
          checked={checked.bar}
          onChange={isChecked => setChecked(c => ({ ...c, bar: isChecked }))}
        >
          Bar
        </CheckButton>
      </CheckButtonGroup>

      <h2>Radio-Like Example</h2>
      <CheckButtonGroup>
        <CheckButton
          name="daddy"
          value="true"
          checked={radio === 'daddy'}
          onChange={() => setRadio('daddy')}
        >
          👨 I'm a daddy
        </CheckButton>
        <CheckButton
          name="has_boat"
          value="true"
          checked={radio === 'has_boat'}
          onChange={() => setRadio('has_boat')}
        >
          🛥️ I have a boat
        </CheckButton>
        <div>
          Checked: <strong>{radio || 'none'}</strong>
        </div>
      </CheckButtonGroup>
      <CodeBlock>
        <Code>{`<CheckButtonGroup> 
  <CheckButton name="gender" value="male">
    👨 I'm a daddy
  </CheckButton>

  <CheckButton
    name="has_boat"
    value="yes"
    checked={true}
  >
    🛥️ I have a boat
  </CheckButton>
<CheckButtonGroup>`}</Code>
      </CodeBlock>

      <h2>Props</h2>
      <h3>as</h3>
      <p>
        <Code>{'as={string|ReactElement'}</Code>
      </p>

      <h3>orientation</h3>
      <p>
        <Code>{`orientation={'horizontal'|'vertical'}`}</Code>
      </p>
      <CheckButtonGroup orientation="vertical">
        <CheckButton name="foo" value="1">
          Foo
        </CheckButton>
        <CheckButton name="bar" value="1">
          Bar
        </CheckButton>
      </CheckButtonGroup>
    </Layout>
  )
}
