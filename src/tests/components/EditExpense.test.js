import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpense';

let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
    history = { push: jest.fn() };
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper = shallow(<EditExpensePage 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense} 
        history={history}
        expense={expenses[1]}
    />)
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot;
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});