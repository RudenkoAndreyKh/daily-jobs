import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

it('Button click', () => {
  const component = renderer.create(
    <Button label={'Gag'}>Click</Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})