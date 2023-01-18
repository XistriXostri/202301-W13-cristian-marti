import { act, render, screen } from '@testing-library/react';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../context/character.context';
import { mockCharacters } from '../../mock/models.mocks';
import { List } from './list';

describe('Given "List" component', () => {
    let mockContext: CharacterContextStructure;

    describe('When it is initially instantiated', () => {
        render(<List />);

        test(`Then the list have been called should be render the list`, () => {
            const elementList = screen.getByRole('list');
            expect(elementList).toBeInTheDocument();
        });
    });
});
