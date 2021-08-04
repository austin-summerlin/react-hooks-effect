import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from '../components/CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList Component', () => {
  const character = [
    {
      name: 'Test',
      image: 'test.png',
    }
  ];

  afterEach(() => cleanup());
  it('should render the CharacterList component', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList
          characters={character}
        />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
