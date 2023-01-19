import { render, screen } from '@testing-library/react';
import { List } from './list';

describe('Given "List" component', () => {
    describe('When it is initially instantiated', () => {
        render(<List />);

        test(`Then the list have been called should be render the list`, () => {
            const elementList = screen.getByRole('list');
            expect(elementList).toBeInTheDocument();
        });
    });
});
