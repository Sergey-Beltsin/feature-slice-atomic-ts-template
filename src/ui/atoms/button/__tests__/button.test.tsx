import ReactDOM from 'react-dom';
import {Button} from "../index";

import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('render without crashing', function () {
  const div = document.createElement('div');
  ReactDOM.render(<Button onClick={() => console.log('rendered')} label='simple button'>Hi</Button>, div);
});

it('render button should be correctly', function () {
  const {getByTestId} = render(<Button onClick={() => console.log('rendered')} label='simple button'>I'm test button</Button>);
  expect(getByTestId('button')).toHaveTextContent('I\'m test button');
});

it('matches snapshot', function () {
  const tree = renderer.create(<Button onClick={() => console.log('renderer')} label='simple button'>Hi, I'm test button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
