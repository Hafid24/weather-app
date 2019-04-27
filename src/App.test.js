import React from 'react'
import App from './App'
import {mount, shallow} from 'enzyme'

describe('<App/>',()=>{ 
  it('renders 1 <App/> component',()=>{ 
    const component = shallow(<App/>) 
    expect(component).toHaveLength(1) 
  }) 
describe('it update city on button click or submit',()=>{
   const component =  mount(<App/>) 
   const button = component.find('button') 
   button.simulate('click') 
   expect(component.state.data !== null).toBeTruthy() 
})

})