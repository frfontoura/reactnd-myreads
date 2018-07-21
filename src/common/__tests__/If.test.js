import React from 'react'
import { shallow, mount } from 'enzyme'
import If from '../If'

const children = <div>Children</div>

describe('Component <If />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<If />))
  })

  it('should render children', () => {
    const wrapper = mount(<If test={true}>
        {children}
    </If>)
    expect(wrapper.find('div').length).toBe(1)
  })

  it('should not render children', () => {
    const wrapper = mount(<If test={false}>
        {children}
    </If>)
    expect(wrapper.find('div').length).toBe(0)
  })
})