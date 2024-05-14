/// <reference path="./SharedProps.d.ts" />
/// <reference path="./Ref.d.ts" />
/// <reference path="./FramerMotion.d.ts" />

type Props<T> = FramerMotion.Element<SharedProps & T>;

/**
 * A standard implemtation of types for HTML elements. There are several
 * ways to use built-in HTML element types, however, it turns out that some
 * of the types follow the React design and some do not. To create a standard
 * implementation for each HTML element type, I have decided to create a specific
 * tag element type here. All these HTML element tag types should be
 */
declare namespace Html {
  type Button = Props<React.ButtonHTMLAttributes<Ref.Button>>;
  type Div = Props<React.HTMLAttributes<Ref.Div>>;
  type UnorderedList = Props<React.HTMLAttributes<Ref.UnorderedList>>;
  type OrderedList = Props<React.HTMLAttributes<Ref.OrderedList>>;
  type ListItem = Props<React.LiHTMLAttributes<Ref.ListItem>>;
  type Anchor = Props<React.AnchorHTMLAttributes<Ref.Anchor>>;
  type Paragraph = Props<React.HTMLAttributes<Ref.Paragraph>>;
  type Input = Props<React.InputHTMLAttributes<Ref.Input>>;
  type Checkbox = Props<React.InputHTMLAttributes<Ref.Input>>;
  type Span = Props<React.HTMLAttributes<Ref.Span>>;
  type Label = Props<React.HTMLAttributes<Ref.Label>>;
  type Image = Props<React.HTMLAttributes<Ref.Image>>;
  type Fieldset = Props<React.HTMLAttributes<Ref.Fieldset>>;
  type Svg = Props<React.SVGAttributes<Ref.Svg>>;
  type Textarea = Props<React.TextareaHTMLAttributes<Ref.Textarea>>;
  type Main = Props<React.HTMLAttributes<Ref.Main>>;
  type Head = Props<React.HTMLAttributes<Ref.Head>>;
  type Header = Props<React.HTMLAttributes<Ref.Header>>;
  type Heading = Props<React.HTMLAttributes<Ref.Heading>>;
  type Footer = Props<React.HTMLAttributes<Ref.Footer>>;
  type Nav = Props<React.HTMLAttributes<Ref.Nav>>;
  type Section = Props<React.HTMLAttributes<Ref.Section>>;
  type Body = Props<React.HTMLAttributes<Ref.Body>>;
  type Select = Props<React.HtmlHTMLAttributes<Ref.Select>>;
  type Form = Props<React.HtmlHTMLAttributes<Ref.Form>>;
  type Dl = Props<React.HtmlHTMLAttributes<Ref.Dl>>;
  type Dt = Props<React.HtmlHTMLAttributes<Ref.Dt>>;
  type Dd = Props<React.HtmlHTMLAttributes<Ref.Dd>>;
}
