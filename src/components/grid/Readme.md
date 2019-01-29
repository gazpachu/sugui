The Grid component allows to create responsive liquid or fixed layouts.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/grid/index.jsx" target="_blank">Grid</a> and the the <a href="https://github.com/gazpachu/sugui/src/components/grid/_cell.jsx" target="_blank">Cell</a> component implementations

### Classic grid

```jsx
const { default: styled, css } = require('styled-components');
const Cell = require('./_cell').default;

const StyledCell = styled(Cell)`
  background-color: lightGrey;
  height: 50px;
`;

<Grid>
  <StyledCell width={1} center middle>1/12</StyledCell>
  <StyledCell width={1} center middle>2/12</StyledCell>
  <StyledCell width={1} center middle>3/12</StyledCell>
  <StyledCell width={1} center middle>4/12</StyledCell>
  <StyledCell width={1} center middle>5/12</StyledCell>
  <StyledCell width={1} center middle>6/12</StyledCell>
  <StyledCell width={1} center middle>7/12</StyledCell>
  <StyledCell width={1} center middle>8/12</StyledCell>
  <StyledCell width={1} center middle>9/12</StyledCell>
  <StyledCell width={1} center middle>10/12</StyledCell>
  <StyledCell width={1} center middle>11/12</StyledCell>
  <StyledCell width={1} center middle>12/12</StyledCell>
  <StyledCell width={2} center middle>1/6</StyledCell>
  <StyledCell width={2} center middle>2/6</StyledCell>
  <StyledCell width={2} center middle>3/6</StyledCell>
  <StyledCell width={2} center middle>4/6</StyledCell>
  <StyledCell width={2} center middle>5/6</StyledCell>
  <StyledCell width={2} center middle>6/6</StyledCell>
  <StyledCell width={3} center middle>1/4</StyledCell>
  <StyledCell width={3} center middle>2/4</StyledCell>
  <StyledCell width={3} center middle>3/4</StyledCell>
  <StyledCell width={3} center middle>4/4</StyledCell>
  <StyledCell width={4} center middle>1/3</StyledCell>
  <StyledCell width={4} center middle>2/3</StyledCell>
  <StyledCell width={4} center middle>3/3</StyledCell>
  <StyledCell width={6} center middle>1/2</StyledCell>
  <StyledCell width={6} center middle>2/2</StyledCell>
  <StyledCell width={12} center middle>1/1</StyledCell>
</Grid>
```

### Centering Content

```jsx
const { default: styled, css } = require('styled-components');
const Cell = require('./_cell').default;

const StyledCell = styled(Cell)`
  background-color: lightGrey;
  height: 80px;
`;

<Grid columns={2}>
  <StyledCell>Default</StyledCell>
  <StyledCell middle>Middle</StyledCell>
  <StyledCell center>Center</StyledCell>
  <StyledCell center middle>Center-Middle</StyledCell>
</Grid>
```

### Transposed grid

```jsx
const { default: styled, css } = require('styled-components');
const Cell = require('./_cell').default;

const StyledCell = styled(Cell)`
  background-color: lightGrey;
`;

<Grid flow="column" columns={5}>
  <StyledCell height={1} center middle>1/12</StyledCell>
  <StyledCell height={1} center middle>2/12</StyledCell>
  <StyledCell height={1} center middle>3/12</StyledCell>
  <StyledCell height={1} center middle>4/12</StyledCell>
  <StyledCell height={1} center middle>5/12</StyledCell>
  <StyledCell height={1} center middle>6/12</StyledCell>
  <StyledCell height={1} center middle>7/12</StyledCell>
  <StyledCell height={1} center middle>8/12</StyledCell>
  <StyledCell height={1} center middle>9/12</StyledCell>
  <StyledCell height={1} center middle>10/12</StyledCell>
  <StyledCell height={1} center middle>11/12</StyledCell>
  <StyledCell height={1} center middle>12/12</StyledCell>
  <StyledCell height={2} center middle>1/6</StyledCell>
  <StyledCell height={2} center middle>2/6</StyledCell>
  <StyledCell height={2} center middle>3/6</StyledCell>
  <StyledCell height={2} center middle>4/6</StyledCell>
  <StyledCell height={2} center middle>5/6</StyledCell>
  <StyledCell height={2} center middle>6/6</StyledCell>
  <StyledCell height={3} center middle>1/4</StyledCell>
  <StyledCell height={3} center middle>2/4</StyledCell>
  <StyledCell height={3} center middle>3/4</StyledCell>
  <StyledCell height={3} center middle>4/4</StyledCell>
  <StyledCell height={6} center middle>1/2</StyledCell>
  <StyledCell height={6} center middle>2/2</StyledCell>
  <StyledCell height={12} center middle>1/1</StyledCell>
</Grid>
```

### Positioning

You can use the left and top props to set the `grid-column-start` and `grid-row-start` CSS properties, respectively. This allows you to offset content or have finer grain control over the position of cells.

Keep in mind that the top-left coordinate is (1, 1), not (0, 0).

```jsx
const { default: styled, css } = require('styled-components');
const Cell = require('./_cell').default;

const StyledCell = styled(Cell)`
  background-color: lightGrey;
  height: 80px;
`;

<Grid columns={3}>
  <StyledCell center middle>Top Left</StyledCell>
  <StyledCell center middle left={3}>Top Right</StyledCell>
  <StyledCell center middle left={2} top={2}>Middle</StyledCell>
  <StyledCell center middle top={3}>Bottom Left</StyledCell>
  <StyledCell center middle top={3} left={3}>Bottom Right</StyledCell>
</Grid>
```

### Dense Layout

By default, the flow property is set to `row`. However, by setting it to `row dense` you can turn on CSS grid's dense cell packing. Notice how the order of the cells in the markup is not same when it is rendered.

```jsx
const { default: styled, css } = require('styled-components');
const Cell = require('./_cell').default;

const StyledCell = styled(Cell)`
  background-color: lightGrey;
  height: 80px;
`;

<Grid flow="row dense" columns={4}>
  <Cell width={2} height={1}><img src="https://lorempixel.com/400/150/cats/2/" /></Cell>
  <Cell width={1} height={2}><img src="https://lorempixel.com/180/315/cats/1/" /></Cell>
  <Cell width={2} height={1}><img src="https://lorempixel.com/400/150/cats/4/" /></Cell>
  <Cell><img src="https://lorempixel.com/200/150/cats/3/" /></Cell>
  <Cell><img src="https://lorempixel.com/200/150/cats/5/" /></Cell>
</Grid>
```

### Responsive Layout

The `grid-template-columns` CSS property is incredibly powerful for building responsive content. When the `columns` prop is a number, it is a shorthand for `grid-template-columns: repeat(N, 1fr)`. However, when you pass a string, the value is passed directly to the CSS property, allowing you leverage the full power of this property.

If you're just after basic responsive content that will automatically fit to your content, you can use `repeat(auto-fit, minmax(120px, 1fr))` as your `columns` prop, which will create columns to auto-fit your content with a minimum width of 120px.

Resize your browser for an example.

```jsx
const { default: styled, css } = require('styled-components');
const Cell = require('./_cell').default;

const StyledCell = styled(Cell)`
  background-color: lightGrey;
  height: 80px;
`;

<Grid columns="repeat(auto-fit,minmax(120px,1fr))">
  <StyledCell center middle>A</StyledCell>
  <StyledCell center middle>B</StyledCell>
  <StyledCell center middle>C</StyledCell>
  <StyledCell center middle>D</StyledCell>
  <StyledCell center middle>E</StyledCell>
  <StyledCell center middle>F</StyledCell>
</Grid>
```

### Alignment

Horizontal alignment of columns can be modified using the <a href="https://mdn.io/justify-content" target="_blank">justify-content CSS property</a>.

```jsx
const { default: styled, css } = require('styled-components');
const Cell = require('./_cell').default;

const StyledCell = styled(Cell)`
  background-color: lightGrey;
`;

const Heading = styled.div`
  background-color: #BFEBF2;
  padding: 2px 4px;
  margin-bottom: 5px;
`;

<Grid columns={2}>
  <Cell>
    <Heading>start</Heading>
    <Grid columns={"50px 50px 50px"} justifyContent="start">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </Cell>
  <Cell>
    <Heading>end</Heading>
    <Grid columns={"50px 50px 50px"} justifyContent="end">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </Cell>
  <Cell>
    <Heading>center</Heading>
    <Grid columns={"50px 50px 50px"} justifyContent="center">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </Cell>
  <Cell>
    <Heading>space-around</Heading>
    <Grid columns={"50px 50px 50px"} justifyContent="space-around">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </Cell>
  <Cell>
    <Heading>space-between</Heading>
    <Grid columns={"50px 50px 50px"} justifyContent="space-between">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </Cell>
  <Cell>
    <Heading>space-evenly</Heading>
    <Grid columns={"50px 50px 50px"} justifyContent="space-evenly">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </Cell>
</Grid>
```

Vertical alignment of rows can be modified using the <a href="https://mdn.io/align-content" target="_blank">align-content CSS property</a>.

```jsx
const { default: styled, css } = require('styled-components');
const Cell = require('./_cell').default;

const CellWrapper = styled(Cell)`
  display: flex;
  flex-direction: column;
`;

const StyledCell = styled(Cell)`
  background-color: lightGrey;
`;

const Heading = styled.div`
  background-color: #BFEBF2;
  padding: 2px 4px;
  margin-bottom: 5px;
`;

<Grid columns={4} minRowHeight="200px">
  <CellWrapper>
    <Heading>start</Heading>
    <Grid columns={1} alignContent="start">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </CellWrapper>
  <CellWrapper>
    <Heading>end</Heading>
    <Grid columns={1} alignContent="end">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </CellWrapper>
  <CellWrapper>
    <Heading>center</Heading>
    <Grid columns={1} alignContent="center">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </CellWrapper>
  <CellWrapper>
    <Heading>stretch</Heading>
    <Grid columns={1} alignContent="stretch">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </CellWrapper>
  <CellWrapper>
    <Heading>space-around</Heading>
    <Grid columns={1} alignContent="space-around">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </CellWrapper>
  <CellWrapper>
    <Heading>space-between</Heading>
    <Grid columns={1} alignContent="space-between">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </CellWrapper>
  <CellWrapper>
    <Heading>space-evenly</Heading>
    <Grid columns={1} alignContent="space-evenly">
      <StyledCell center middle>A</StyledCell>
      <StyledCell center middle>B</StyledCell>
      <StyledCell center middle>C</StyledCell>
    </Grid>
  </CellWrapper>
</Grid>
```
