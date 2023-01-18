import { render, screen } from '@testing-library/react';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../context/character.context';
import {
    mockAdvisor,
    mockFighter,
    mockKing,
    mockSquire,
} from '../../mock/models.mocks';
import { Item } from './item';

describe('Given "Item" component', () => {
    const handleDie = jest.fn();
    const handleComunicate = jest.fn();

    const mockContext = {
        handleDie,
        handleComunicate,
    } as unknown as CharacterContextStructure;

    describe('When it has been render', () => {
        test('Then Advisor info should have been render', () => {
            render(<Item character={mockAdvisor}></Item>);
            const textElement = screen.getByText(/Tyrion/i);
            const textElement2 = screen.getByText(/Asesora a/i);
            expect(textElement).toBeInTheDocument();
            expect(textElement2).toBeInTheDocument();
        });

        test('Then Fighter info should have been render', () => {
            render(<Item character={mockFighter}></Item>);
            const textElement = screen.getByText(/Dragón/i);
            expect(textElement).toBeInTheDocument();
        });

        test('Then user could interact with them if we render with context', async () => {
            render(
                <CharacterContext.Provider value={mockContext}>
                    <Item character={mockAdvisor}></Item>
                </CharacterContext.Provider>
            );

            const comunicateButton = screen.getAllByRole('button')[0];
            expect(comunicateButton).toBeInTheDocument();
            comunicateButton.click();
            expect(handleComunicate).toHaveBeenCalled();

            const dieButton = screen.getAllByRole('button')[1];
            expect(dieButton).toBeInTheDocument();
            dieButton.click();
            expect(handleDie).toHaveBeenCalled();
        });
    });
});
