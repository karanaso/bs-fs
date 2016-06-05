import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HelloWorldComponent from './HelloWorldComponent';

describe( '<HelloWorldComponent />', () => {

  it( 'should have an <div>', () => {
    const wrapper = shallow( <HelloWorldComponent /> );
    expect( wrapper.find( 'div' ) ).to.have.length( 1 );
  });

  it( 'should have an <h3> withing a', () => {
    const wrapper = shallow( <HelloWorldComponent /> );
    expect( wrapper.find( 'div h1' ) ).to.have.length( 1 );
  });

  it( 'should have an "div a link" with text "Click me !!!"', () => {
    const wrapper = shallow( <HelloWorldComponent /> );
    expect( wrapper.find( 'div a' ).text() ).to.equal( 'Click me' );
  });

});
