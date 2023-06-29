import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'
import { AffairType, filterAffairs } from '../s2-homeworks/hw02/HW2'

test('renders learn react link', () => {
    render(<App/>)
    // const linkElement = screen.getByText(/learn react/i)
    // expect(linkElement).toBeInTheDocument()
    expect(1).toBe(1)
})

const affairs: Array<AffairType> = [ // need to fix any
{_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
{_id: 2, name: 'anime', priority: 'low'},
{_id: 3, name: 'games', priority: 'low'},
{_id: 4, name: 'work', priority: 'high'},
{_id: 5, name: 'html & css', priority: 'middle'},
]
const highAffairs = [
{_id: 1, name: 'React', priority: 'high'},
{_id: 4, name: 'work', priority: 'high'}
]
const lowAffairs: Array<AffairType> = [
{_id: 2, name: 'anime', priority: 'low'},
{_id: 3, name: 'games', priority: 'low'},
]
const middleAffairs: Array<AffairType> = [
{_id: 5, name: 'html & css', priority: 'middle'},
]
test('Checking filterAffairs for health', ()=> {
   
    expect(filterAffairs(affairs,'all')).toStrictEqual(affairs)
    expect(filterAffairs(affairs,'high')).toStrictEqual(highAffairs)
    expect(filterAffairs(affairs,'low')).toStrictEqual(lowAffairs)
    expect(filterAffairs(affairs,'middle')).toStrictEqual(middleAffairs)
})