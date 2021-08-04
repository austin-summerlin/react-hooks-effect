import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from '../components/CharacterDetails';
import { MemoryRouter } from 'react-router-dom';


describe('Character Detail Component', () => {
  const character = {
    name: 'Test Character',
    image: 'test-image.jpg',
  };

  afterEach(() => cleanup());
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterDetail
          name={character.name}
          image={character.image} />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});

