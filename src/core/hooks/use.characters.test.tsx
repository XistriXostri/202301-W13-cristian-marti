import { fireEvent, render, screen } from '@testing-library/react';
import { mockAdvisor } from '../mock/models.mocks';
import { CharacterFeatures } from '../models/character';
import { useCharacters } from './use.characters';

describe(`Given useCharacter (custom hook)
            render with a virtual component`, () => {
    const mockPayload: CharacterFeatures['id'] = mockAdvisor.id;

    const TestComponent = () => {
        const { getCharacters, handleDie, handleComunicate } = useCharacters();
        return (
            <>
                <button onClick={() => handleDie(mockPayload)}>Die</button>
                <button onClick={() => handleComunicate(mockPayload)}>
                    Comunicate
                </button>

                <div>
                    <ul>
                        {getCharacters().map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    describe(`When component is loaded`, () => {
        render(<TestComponent />);
        const buttons = screen.getAllByRole('button');
        test('Then its should call handleDie and handleComunicate', async () => {
            expect(
                await screen.findByText(mockAdvisor.name)
            ).toBeInTheDocument();

            fireEvent.click(buttons[0]);
            fireEvent.click(buttons[1]);
        });
    });
});
