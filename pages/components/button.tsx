import Layout from 'components/Layout'
import Button, { IconButton } from 'components/Button'
import { BiBell as BellIcon } from 'react-icons/bi'
import Code from 'components/Code'

export default function ButtonComponent() {
  return (
    <Layout>
      <h1>Button</h1>
      <p>Buttons trigger actions when clicked.</p>
      <h2>Style Variants</h2>
      <Button>Default</Button> <Button variant="outlined">Outlined</Button>{' '}
      <Button variant="contained">Contained</Button>{' '}
      <p>
        <Code componentType="Button">Default</Code>
        <br />
        <Code componentType="Button" variant="outlined">
          Outlined
        </Code>
        <br />
        <Code componentType="Button" variant="contained">
          Contained
        </Code>
      </p>
      <h2>Colors</h2>
      <Button variant="contained" color="primary">
        Primary
      </Button>{' '}
      <Button variant="contained" color="secondary">
        Secondary
      </Button>{' '}
      <Button variant="contained" color="red">
        Red
      </Button>{' '}
      <Button variant="contained" color="green">
        Green
      </Button>{' '}
      <p>
        <Code componentType="Button" variant="contained" color="primary">
          Primary
        </Code>
        <br />
        <Code componentType="Button" variant="contained" color="secondary">
          Secondary
        </Code>
        <br />
        <Code componentType="Button" variant="contained" color="red">
          Red
        </Code>
        <br />
        <Code componentType="Button" variant="contained" color="green">
          Green
        </Code>
      </p>
      <h2>Loading Button</h2>
      <Button loading>Loading</Button>
      <p>
        <Code componentType="Button" loading>
          Loading
        </Code>
      </p>
      <h2>Anchor Button</h2>
      <Button to="/">Home</Button>
      <p>
        Add <code>to</code> prop to create a button-like link.
      </p>
      <Code componentType="Button" to="/">
        Home
      </Code>
      <h2>Icon Button</h2>
      <div style={{ display: 'flex', gap: '0.5em' }}>
        <IconButton>
          <BellIcon />
        </IconButton>
        <IconButton variant="outlined">
          <BellIcon />
        </IconButton>
        <IconButton variant="contained">
          <BellIcon />
        </IconButton>
      </div>
      <p>
        <Code componentType="IconButton">
          <Code componentType="BellIcon" />
        </Code>
        <br />
        <Code componentType="IconButton" variant="outlined">
          <Code componentType="BellIcon" />
        </Code>
        <br />
        <Code componentType="IconButton" variant="contained">
          <Code componentType="BellIcon" />
        </Code>
      </p>
    </Layout>
  )
}
