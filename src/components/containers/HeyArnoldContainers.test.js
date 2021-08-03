/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import HeyArnoldCharacters from './HeyArnoldCharacters';
import DetailContainer from './DetailContainer';

describe('HeyArnoldCharacters Container', () => {
  it('renders the Hey Arnold Characters', async () => {
    render(<MemoryRouter>
      <HeyArnoldCharacters />
    </MemoryRouter>);

    const ul = await screen.findByRole('list', { name: 'character-list' });
    expect(ul).toMatchSnapshot();
  });
});

describe('Character Detail Test', () => {
  it('renders the character detail', async () => {
    render(<MemoryRouter>
      <DetailContainer name="nancy" image="https://vignette.wikia.nocookie.net/heyarnold/images/6/62/Nancy.jpg/revision/latest/scale-to-width-down/310?cb=20110423055923" />
    </MemoryRouter>);

    const figure = await screen.findByRole('individual');
    expect(figure).not.toBeEmptyDOMElement();
  });
});

