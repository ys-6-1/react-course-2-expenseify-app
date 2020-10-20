import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { bindActionCreators } from 'redux';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
});

test('should add exepense', () => {
    const expense = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0,
        id: 109
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expenses', () => {   
    const updates =  { description: 'updated'}
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('updated');
});

test('should not edit expense if expense not found', () => {
    const updates =  { description: 'updated'}
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
}) 

test('should set expenses', () => {   
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }  
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});